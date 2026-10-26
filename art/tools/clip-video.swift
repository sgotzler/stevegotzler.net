import AVFoundation
import AppKit
// usage: clip <in> <out.mp4> <start> <duration> <poster.jpg>
let a = CommandLine.arguments
let asset = AVURLAsset(url: URL(fileURLWithPath: a[1]))
let start = CMTime(seconds: Double(a[3])!, preferredTimescale: 600)
let dur = CMTime(seconds: Double(a[4])!, preferredTimescale: 600)
let comp = AVMutableComposition()
let src = asset.tracks(withMediaType: .video).first!
let track = comp.addMutableTrack(withMediaType: .video, preferredTrackID: kCMPersistentTrackID_Invalid)!
try! track.insertTimeRange(CMTimeRange(start: start, duration: dur), of: src, at: .zero) // video only: no sound
track.preferredTransform = src.preferredTransform
try? FileManager.default.removeItem(atPath: a[2])
// crop to the band holding the two side-by-side panes (16:9), then scale to 960x540
let crop = CGRect(x: 0, y: 160, width: 1216, height: 684).intersection(CGRect(x: 0, y: 0, width: 1280, height: 720))
let cw = 1216.0, ch = 400.0 // band height in the source
let band = CGRect(x: 16, y: 166, width: 1186, height: 410)
let outW = 1186.0, outH = outW * 9.0 / 16.0
let vc = AVMutableVideoComposition()
vc.renderSize = CGSize(width: outW, height: outH)
vc.frameDuration = CMTime(value: 1, timescale: 30)
let ins = AVMutableVideoCompositionInstruction()
ins.timeRange = CMTimeRange(start: .zero, duration: dur)
let li = AVMutableVideoCompositionLayerInstruction(assetTrack: track)
// move the band's centre to the frame's centre
let dy = outH / 2 - (band.midY)
li.setTransform(CGAffineTransform(translationX: -band.minX, y: dy), at: .zero)
ins.layerInstructions = [li]
vc.instructions = [ins]
let ex = AVAssetExportSession(asset: comp, presetName: AVAssetExportPreset640x480)!
ex.videoComposition = vc
ex.outputURL = URL(fileURLWithPath: a[2]); ex.outputFileType = .mp4; ex.shouldOptimizeForNetworkUse = true
let sem = DispatchSemaphore(value: 0)
ex.exportAsynchronously { sem.signal() }
sem.wait()
print("export", ex.status.rawValue, ex.error?.localizedDescription ?? "ok")
let gen = AVAssetImageGenerator(asset: comp)
gen.videoComposition = vc
gen.requestedTimeToleranceBefore = .zero; gen.requestedTimeToleranceAfter = .zero
gen.maximumSize = CGSize(width: 1280, height: 720)
let img = try! gen.copyCGImage(at: CMTime(seconds: Double(CommandLine.arguments.count > 6 ? CommandLine.arguments[6] : "1.0")!, preferredTimescale: 600), actualTime: nil)
try! NSBitmapImageRep(cgImage: img).representation(using: .jpeg, properties: [.compressionFactor: 0.88])!.write(to: URL(fileURLWithPath: a[5]))

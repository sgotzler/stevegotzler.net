import AVFoundation
import AppKit
let url = URL(fileURLWithPath: CommandLine.arguments[1])
let out = CommandLine.arguments[2]
let asset = AVURLAsset(url: url)
let dur = CMTimeGetSeconds(asset.duration)
let v = asset.tracks(withMediaType: .video).first!
print("secs", dur, "size", v.naturalSize, "fps", v.nominalFrameRate, "audio", asset.tracks(withMediaType: .audio).count)
let gen = AVAssetImageGenerator(asset: asset)
gen.appliesPreferredTrackTransform = true
gen.maximumSize = CGSize(width: 480, height: 480)
gen.requestedTimeToleranceBefore = .zero; gen.requestedTimeToleranceAfter = .zero
let step = max(dur / 40.0, 1.0)
var t = 0.0; var i = 0
while t < dur {
  if let img = try? gen.copyCGImage(at: CMTime(seconds: t, preferredTimescale: 600), actualTime: nil) {
    let rep = NSBitmapImageRep(cgImage: img)
    let data = rep.representation(using: .jpeg, properties: [:])!
    try! data.write(to: URL(fileURLWithPath: String(format: "%@/f%03d_%06.1f.jpg", out, i, t)))
  }
  t += step; i += 1
}

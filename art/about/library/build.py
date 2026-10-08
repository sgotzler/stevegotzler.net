#!/usr/bin/env python3
"""Builds the mark and icon library: every drawing made while working out the About page mark.

Run from this folder:  python3 build.py
Writes marks/ and icons/, each in a dark and a light colourway, as SVG. (PNG copies are made by render.sh.)
All drawings are original; nothing is traced or copied from another source.
"""
import math, os, re, glob

THEMES = {
    'dark':  dict(ink='#EDE9E0', ground='#0D0C0A', accent='#E2BDB8'),
    'light': dict(ink='#141210', ground='#F4F0E6', accent='#8C4A57'),
}
FC = 'fill="currentColor" stroke="none"'
GR = 'fill="var(--color-ground)"'

def poly(pts): return 'M' + 'L'.join(f'{x:.2f} {y:.2f}' for x, y in pts) + 'z'
def hexa(cx, cy, r): return poly([(cx + r*math.cos(math.radians(a)), cy + r*math.sin(math.radians(a))) for a in range(0, 360, 60)])

MEEPLE = "M10 0C7 0 5.5 2 5.5 4.5c0 1 .3 1.8.8 2.5C3 8 0 9.5 0 11.5c0 1.500 1.500 2 4.500 2L2 20h6l2-3.500 2 3.500h6l-2.500-6.500c3 0 4.500-.500 4.500-2 0-2-3-3.500-6.300-4.500.500-.700.800-1.500.800-2.500C14.500 2 13 0 10 0z"
MEEPLE = re.sub(r'(\.\d)00\b', r'\1', MEEPLE)

I = {}  # name -> svg fragment, drawn around 0,0 within about +/-10

# ---- pieces -----------------------------------------------------------------
I['piece-meeple-outline'] = f'<path transform="translate(-9 -9) scale(.9)" d="{MEEPLE}" stroke-width="1.8"/>'
I['piece-meeple-solid']   = f'<path transform="translate(-9 -9) scale(.9)" d="{MEEPLE}" fill="var(--color-section)" stroke="none"/>'
I['piece-pointer']        = '<path transform="translate(-5 -8) scale(1.15)" d="M0 0v12l3.2-3 2.2 5 2-.9-2.2-4.8h4.3z"/>'
I['piece-resource-cube']  = '<rect x="-5" y="-5" width="10" height="10" fill="var(--color-section)" stroke="none"/>'
I['piece-resource-pixels']= '<g fill="var(--color-section)" stroke="none"><rect x="-9" y="-6" width="5.5" height="5.5"/><rect x="-2.5" y="-6" width="5.5" height="5.5"/><rect x="-9" y=".5" width="5.5" height="5.5"/><rect x="4" y=".5" width="5.5" height="5.5" opacity=".6"/></g>'

# ---- analog play ------------------------------------------------------------
I['play-die'] = f'<rect x="-7" y="-7" width="14" height="14" rx="2.5"/><g {FC}><circle cx="-3.3" cy="-3.3" r="1.2"/><circle r="1.2"/><circle cx="3.3" cy="3.3" r="1.2"/></g>'
h = [(8.5*math.cos(math.radians(a-90)), 8.5*math.sin(math.radians(a-90))) for a in range(0, 360, 60)]
t = [(0, -4.2), (4.6, 3.6), (-4.6, 3.6)]
spokes = ''.join(f'M{t[i][0]} {t[i][1]}L{h[j][0]:.2f} {h[j][1]:.2f}' for i, js in ((0, (0, 1, 5)), (1, (1, 2, 3)), (2, (3, 4, 5))) for j in js)
I['play-d20'] = f'<path d="{poly(h)}"/><path d="{poly(t)}{spokes}" stroke-width="1"/>'
I['play-card'] = f'<g transform="rotate(-8)"><rect x="-5.5" y="-8" width="11" height="16" rx="1.5"/><path d="M0 -3l2.5 3-2.5 3-2.5-3z" {FC}/></g>'
I['play-hand-of-cards'] = f'<rect x="-5" y="-7.5" width="10" height="14" rx="1.3" transform="rotate(-22 0 8)"/><rect x="-5" y="-7.5" width="10" height="14" rx="1.3" {GR}/><rect x="-5" y="-7.5" width="10" height="14" rx="1.3" {GR} transform="rotate(22 0 8)"/>'
I['play-hex-tiles'] = f'<path d="{hexa(-3.6,-4.1,4.6)}{hexa(3.5,0,4.6)}{hexa(-3.6,4.1,4.6)}"/>'
I['play-pawn'] = '<circle cy="-5" r="3"/><path d="M-2 -2.3c0 4-3.5 6-4.5 9.800h13c-1-3.800-4.500-5.800-4.500-9.800"/>'.replace('800','8').replace('4.500','4.5')
I['play-domino'] = f'<g transform="rotate(12)"><rect x="-4.5" y="-8.5" width="9" height="17" rx="1.5"/><path d="M-4.5 0h9"/><g {FC}><circle cx="-1.8" cy="-6" r="1"/><circle cx="1.8" cy="-2.5" r="1"/><circle cy="4.3" r="1"/></g></g>'
I['play-sand-timer'] = f'<path d="M-5.5 -8h11M-5.5 8h11M-4.5 -8c0 5 4.5 5.5 4.5 8s-4.5 3-4.5 8M4.5 -8c0 5-4.5 5.5-4.5 8s4.5 3 4.5 8"/><path d="M-2.3 6.5h4.6l-2.3-2.5z" {FC}/>'
I['play-spinner'] = f'<circle r="8"/><path d="M0 -8v16M-8 0h16" stroke-width="1" opacity=".7"/><path d="M-1.2 1.2l5.7-5.7" stroke-width="1.8"/><circle r="1.3" {FC}/>'
I['play-character-sheet'] = '<rect x="-6.5" y="-8.5" width="13" height="17" rx="1"/><circle cx="-3" cy="-5" r="1.7" stroke-width="1"/><path d="M.5 -5.8h3.5M.5 -4h2.5M-4 -.5h8M-4 2.5h8M-4 5.5h5" stroke-width="1"/>'
I['play-share-certificate'] = '<rect x="-9" y="-6" width="18" height="12" rx="1"/><path d="M-6 -3h7M-6 0h5M3 3h3.5M-6 3h2" stroke-width="1"/><circle cx="5" cy="-2" r="1.8" stroke-width="1"/>'

# ---- game boards ------------------------------------------------------------
I['board-grid-track'] = f'<path d="M-8 -6.5h16v4.3h-16zM-8 -2.2h16v4.4h-16zM-8 2.2h16v4.3h-16zM-4 -6.5v13M0 -6.5v13M4 -6.5v13" stroke-width="1"/><circle cx="2" r="1.5" {FC}/>'
ticks = ''.join(f'M{x} -8v4M{x} 4v4' for x in (-5, -1.7, 1.7, 5)) + ''.join(f'M-9 {y}h4M5 {y}h4' for y in (-4, 0, 4))
ring = f'<rect x="-9" y="-8" width="18" height="16" rx="1"/><rect x="-5" y="-4" width="10" height="8" stroke-width="1"/><path d="{ticks}" stroke-width="1"/>'
I['board-perimeter-track'] = ring + f'<circle cx="3.3" cy="-6" r="1.4" {FC}/>'
I['board-track-around-card'] = ring + f'<rect x="-2.2" y="-2.6" width="4.4" height="5.2" rx=".6" stroke-width="1" transform="rotate(-10)"/><circle cx="-7" cy="2" r="1.4" {FC}/>'
S = "M-9.5 -6h14a3 3 0 0 1 0 6h-9a3 3 0 0 0 0 6h14"
I['board-winding-track'] = f'<path d="{S}" stroke-width="5.4" stroke-linecap="butt"/><path d="{S}" stroke="var(--color-ground)" stroke-width="3" stroke-linecap="butt"/><path d="M-6 -8.5v5M-2 -8.5v5M2 -8.5v5M-2.5 -2.5v5M1.5 -2.5v5M-1.5 3.5v5M2.5 3.5v5M6.5 3.5v5" stroke-width="1"/><circle cx="4.2" cy="-6" r="1.3" {FC}/>'
pts = [(-8,6.5),(-4.5,7),(-1,6),(1.5,3.5),(0,.5),(-3.5,-.5),(-6.5,-2.5),(-6,-6),(-2.5,-7.5),(1.5,-7),(5,-6.5)]
I['board-stepping-stones'] = ''.join(f'<circle cx="{x}" cy="{y}" r="1.35" stroke-width="1"/>' for x, y in pts) + f'<circle cy=".5" r="1.9" {FC}/><path d="M8 -8.5v5.5M8 -8.5l-3.2 1.5 3.2 1.5" stroke-width="1"/>'
def tri(x, up, fill):
    y0, y1 = (-7.5, -1.8) if up else (7.5, 1.8)
    f = 'fill="currentColor"' if fill else ''
    return f'<path d="M{x-1.25} {y0}L{x} {y1}L{x+1.25} {y0}z" stroke-width=".8" {f}/>'
I['board-backgammon'] = '<rect x="-9" y="-7.5" width="18" height="15" rx="1"/><path d="M0 -7.5v15"/>' + ''.join(tri(x, True, i % 2 == 0) + tri(x, False, i % 2 == 1) for i, x in enumerate([-7, -4.4, -1.8, 1.8, 4.4, 7]))
g = [-7.5, -2.5, 2.5, 7.5]
I['board-go'] = '<path d="' + ''.join(f'M{a} -7.5v15M-7.5 {a}h15' for a in g) + f'" stroke-width="1"/><circle cx="-2.5" cy="-2.5" r="2" {FC}/><circle cx="2.5" cy="2.5" r="2" {FC}/><circle cx="7.5" cy="-2.5" r="2" {FC}/><circle cx="2.5" cy="-2.5" r="1.9" {GR} stroke-width="1"/><circle cx="-2.5" cy="2.5" r="1.9" {GR} stroke-width="1"/>'
I['board-noughts-and-crosses'] = '<path d="M-3 -8.5v17M3 -8.5v17M-8.5 -3h17M-8.5 3h17"/><path d="M-7.6 -7.6l3.2 3.2M-4.4 -7.6l-3.2 3.2M4.4 4.4l3.2 3.2M7.6 4.4l-3.2 3.2" stroke-width="1.3"/><circle r="1.8" stroke-width="1.3"/><circle cx="6" cy="-6" r="1.8" stroke-width="1.3"/>'
N = [(-7,-5),(1,-7.5),(7.5,-1.5),(-1.5,1),(-7,6.5),(5.5,6.5)]
I['board-route-map'] = '<path d="' + ''.join(f'M{N[a][0]} {N[a][1]}L{N[b][0]} {N[b][1]}' for a, b in [(0,1),(1,2),(0,3),(3,2),(3,4),(3,5),(2,5)]) + '" stroke-width="1"/>' + ''.join(f'<circle cx="{x}" cy="{y}" r="1.7" {GR} stroke-width="1.1"/>' for x, y in N) + f'<circle cx="-1.5" cy="1" r="1.7" {FC}/>'
I['board-territory-map'] = f'<rect x="-9" y="-7.5" width="18" height="15" rx="1.5"/><path d="M-3 -7.5c1 3-1.5 4-1 6.5 3-1 5 1 7.5-.5-1-2 1.5-3.5.5-6z" fill="currentColor" stroke="none" opacity=".35"/><path d="M-3 -7.5c1 3-1.5 4-1 6.5s3 2.500 2.5 8.5M-4 -1c3-1 5 1 7.5-.5s3-1 5.5-.5M3.5 -1.5c-1-2 1.5-3.5.5-6" stroke-width="1"/><circle cx="-6" cy="2.5" r="1.2" {FC}/><circle cx="4" cy="3.5" r="1.2" {FC}/>'.replace('2.500','2.5')
# Board with pieces, redrawn: the pawns stand on the board and cover the lines behind them.
def pawn(x, y, solid=False):
    f = 'fill="currentColor"' if solid else GR
    return f'<path d="M{x-2.4} {y}c.7-2.6 1.5-3.6 1.500-5.400h1.800c0 1.800.8 2.800 1.500 5.400z" {f} stroke-width="1.1"/><circle cx="{x}" cy="{y-6.9}" r="1.8" {f} stroke-width="1.1"/>'.replace('1.500','1.5').replace('5.400','5.4').replace('1.800','1.8')
I['board-with-pieces'] = '<path d="M-10 8l5-8.500h15l-5 8.500z"/><path d="M-7.500 3.750h15M-2.500 8l5-8.500" stroke-width="1" opacity=".6"/>'.replace('8.500','8.5').replace('7.500','7.5').replace('2.500','2.5') + pawn(-3.4, 2.2) + pawn(4.6, 5.6, solid=True)
I['board-mancala'] = '<rect x="-9.5" y="-5.5" width="19" height="11" rx="5"/>' + ''.join(f'<circle cx="{x}" cy="{y}" r="1.25" stroke-width="1"/>' for x in (-3.6,-1.2,1.2,3.6) for y in (-2.3,2.3)) + '<path d="M-7.3 -2v4M7.3 -2v4" stroke-width="2.2"/>'
c = 3.75
I['board-checkerboard'] = '<rect x="-7.5" y="-7.5" width="15" height="15"/>' + ''.join(f'<rect x="{-7.5+i*c}" y="{-7.5+j*c}" width="{c}" height="{c}" fill="currentColor" stroke="none" opacity=".75"/>' for i in range(4) for j in range(4) if (i+j) % 2) + f'<circle cx="{-7.5+c*1.5}" cy="{-7.5+c*1.5}" r="1.5" {GR} stroke-width="1"/>'

# ---- work -------------------------------------------------------------------
holes = [(-5.4,-2.6),(-1.8,-2.6),(5.4,-2.6),(-5.4,1),(1.8,1),(-1.8,4.6),(1.8,4.6),(5.4,4.6)]
I['work-punch-card'] = f'<path d="M-5.5 -8h14v16h-17v-13z"/><g {FC}>' + ''.join(f'<rect x="{x-.9:.1f}" y="{y-1.3:.1f}" width="1.8" height="2.6"/>' for x, y in holes) + '</g>'
I['work-factory'] = '<path d="M-8.5 7.5v-9l5.5 3.5v-3.5l5.5 3.5v-9.5h3.5l1 9.5v5.500z"/><path d="M-5 4.5h2M0 4.5h2" stroke-width="1"/>'.replace('5.500','5.5')
I['work-briefcase'] = '<rect x="-8.5" y="-4" width="17" height="11.5" rx="1.5"/><path d="M-3 -4v-2.5h6v2.500M-8.5 1h17"/>'.replace('2.500','2.5')
I['work-spreadsheet'] = '<rect x="-8.5" y="-7" width="17" height="14" rx="1"/><path d="M-8.5 -2.5h17M-8.5 2h17M-3 -7v14M3 -7v14" stroke-width="1"/><rect x="-3" y="-2.5" width="6" height="4.5" fill="currentColor" stroke="none" opacity=".8"/>'
I['work-clock'] = '<circle r="7.5"/><path d="M0 -4.5v4.5l3.2 2"/>'
I['work-gear'] = '<circle r="2.2"/><circle r="5.2"/><path d="' + ''.join(f'M{5.2*math.cos(a):.2f} {5.2*math.sin(a):.2f}L{7.8*math.cos(a):.2f} {7.8*math.sin(a):.2f}' for a in [i*math.pi/4 for i in range(8)]) + '" stroke-width="2.2" stroke-linecap="butt"/>'
I['work-document'] = '<path d="M-7 -5h14M-7 0h14M-7 5h9"/>'

# ---- digital ----------------------------------------------------------------
I['digital-command-prompt'] = '<path d="M-7.5 -5l5.5 4.5-5.5 4.5M1 5.5h7"/>'
I['digital-terminal'] = '<rect x="-9" y="-7.5" width="18" height="15" rx="1.5"/><path d="M-5.5 -3l3.5 3-3.5 3M0 3.5h5"/>'
I['digital-chip'] = '<rect x="-5" y="-5" width="10" height="10"/><path d="' + ''.join(f'M{d} -8v3M{d} 5v3M-8 {d}h3M5 {d}h3' for d in (-2.5, 0, 2.5)) + '" stroke-width="1"/>'
I['digital-window'] = f'<rect x="-8" y="-6.5" width="16" height="13" rx="1"/><path d="M-8 -2.5h16"/><circle cx="-5.5" cy="-4.5" r=".7" {FC}/>'
I['digital-book'] = '<path d="M0 -5c-2.5-1.8-5.5-2-8.5-1v11c3-1 6-.8 8.5 1 2.5-1.8 5.5-2 8.5-1v-11c-3-1-6-.8-8.5 1zM0 -5v11"/>'

def bake(svg, th):
    c = THEMES[th]
    svg = svg.replace('var(--color-section)', c['accent']).replace('var(--color-ground)', c['ground']).replace('currentColor', c['ink'])
    return svg

def write(path, svg):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    open(path, 'w').write(svg)

for th, c in THEMES.items():
    # icons: each alone on a square ground
    for name, frag in I.items():
        svg = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="-14 -14 28 28" width="560" height="560" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">\n  <rect x="-14" y="-14" width="28" height="28" fill="var(--color-ground)" stroke="none"/>\n  {frag}\n</svg>\n'
        write(f'icons/{th}/{name}.svg', bake(svg, th))
    # marks: the full drawings kept in the folder above (the worker placement family only)
    for f in sorted(glob.glob('../mark-a*.svg')):
        s = open(f).read()
        s = re.sub(r'(<svg [^>]*viewBox="0 0 120 100")', r'\1 width="1200" height="1000"', s, 1)
        s = re.sub(r'(<svg [^>]*>\n)', r'\1  <rect width="120" height="100" fill="var(--color-ground)" stroke="none"/>\n', s, 1)
        name = os.path.basename(f).replace('mark-', '')
        write(f'marks/{th}/{name}', bake(s, th))
print(len(I), 'icons;', len(glob.glob('../mark-a*.svg')), 'marks')

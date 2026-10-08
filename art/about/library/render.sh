#!/bin/sh
# Makes a PNG beside every SVG in marks/ and icons/ (needs Google Chrome).
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
cd "$(dirname "$0")"
for f in marks/*/*.svg; do "$CHROME" --headless=new --disable-gpu --hide-scrollbars --window-size=1200,1000 --screenshot="${f%.svg}.png" "file://$PWD/$f" 2>/dev/null; done
for f in icons/*/*.svg; do "$CHROME" --headless=new --disable-gpu --hide-scrollbars --window-size=560,560 --screenshot="${f%.svg}.png" "file://$PWD/$f" 2>/dev/null; done

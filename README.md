# Something I Never Said — Love Letter Envelope Reveal

A full-screen desktop animation: a wax-sealed envelope opens on click and reveals a big "I LOVE YOU" message, with falling hearts in the background throughout.

## Files
- `index.html` — page structure, links the CSS and JS
- `style.css` — all styling and animations
- `script.js` — interactivity (open on click, falling hearts, replay)

Keep all three files in the same folder — `index.html` loads the other two by relative path, so if you move it, move all three together.

## How to use
1. Open `index.html` in any browser (double-click it, or drag it into a browser window).
2. Best viewed full-screen on desktop — it's built for that, not mobile.
3. Click/tap the envelope to trigger the open animation.
4. Use the **↺ replay** button (bottom center) to reset and watch it again — handy for re-recording takes.

## What happens
1. "Something I Never Said" + a quiet invite line, envelope sits center screen with a soft glow.
2. Click the envelope → the gold wax seal cracks and fades, the flap swings open.
3. The heading and envelope fade away, clearing the screen.
4. A big gold-to-rose "I LOVE YOU" fades in center screen with a gentle heartbeat pulse, framed by a small line above and a handwritten line below acknowledging her situation without expecting anything back.
5. Hearts burst upward and continue falling in the background throughout.

## Customizing
- **Message text**: edit the `.reveal-pre`, `.reveal-main`, `.reveal-sub` content in `index.html`.
- **Colors**: all defined as CSS variables at the top of `style.css` (`--teal-deep`, `--gold`, `--rose`, etc.) — change once, applies everywhere.
- **Timing**: animation delays are set in seconds in `style.css` (search `animation-delay` / the numbers after each `animation:` line) and in `script.js` (`setTimeout(burstHearts, 1900)`).
- **Falling heart density**: `count` in the `buildRain()` function in `script.js`.



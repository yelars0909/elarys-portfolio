# IndexStrip Specification (includes Marquee + MagicImage primitives)

## Overview
- **Target files:**
  - `src/components/sites/studiodpi-work-708a7940/root-8a5edab2/IndexStrip.tsx`
  - `src/components/sites/studiodpi-work-708a7940/root-8a5edab2/Marquee.tsx`
  - `src/components/sites/studiodpi-work-708a7940/root-8a5edab2/MagicImage.tsx`
- **Screenshot:** `desktop-1440-top.png`, `desktop-1440-item-expanded.png` (middle column)
- **Interaction model:** time-driven (auto-scroll marquee) + click-driven (jump to project) + hover pause

## MagicImage (primitive)
- Props: `hashName`, `rootStyle` (width/height on wrapper), `className`, `style` (img), `dir` ("images" | "supply")
- Renders wrapper div (rootStyle) + `<img src="/sites/studiodpi-work-708a7940/root-8a5edab2/<dir>/<hashName>">` with `width:100%; height:100%; display:block; object-fit:contain; font-size:0`
- Placeholder: wrapper bg `#f9f9f9` until img `onLoad` (original shows loader bg while loading)

## Marquee (primitive, forwardRef)
- Props: `speed` (default 1), `className`, `childClassName`, `children`
- Measures container height vs single block height; if block > container → overflow mode:
  - Renders 3 duplicated blocks; inner wrapper `transform: translate3d(0,-33.3333%,0)`
  - RAF loop: `translateY -= speed` each frame; when `|translateY| >= blockHeight` → reset to 0 (seamless)
  - `onWheel`: `translateY -= deltaY` manually (same wrap rule)
- Exposes imperative handle: `translateTo(y)`, `getTranslate()`, `start()`, `stop()`
- Not overflow: renders single block, no loop.

## IndexStrip
### DOM
```
div.wrap (flex:1, h:100vh, flex col, overflow hidden)
├─ div.top (h-11px, bg #fff, flex-none)
└─ Marquee.content (flex-1, w-100%, overflow hidden)
   └─ item × N (flex col, items-center justify-center, w-100%, cursor pointer, onClick → onItem(index))
      ├─ MagicImage cover (rootStyle oV(170)×oV(170) = 8.8541667vw square)
      └─ div.title (16px/20px, #959595, text-center, padding-bottom 3px) — zero-padded number; .bold → #000 when index === currIndex
```

### Behaviors
- **Auto-scroll:** marquee runs while `isRunning`; parent pauses on hover over the strip wrap (`onMouseEnter` → stop, `onMouseLeave` → start).
- **Reset:** when `isMiddleNeedReset` → stop + `translateTo(0)` + resume + `setIsMiddleNeedReset(false)`.
- **Click:** `onItem(index)` → parent sets `currIndex` → right column scrolls to project; item number gets `.bold` (color #000).
- Covers come from `work.cover.hashName` (35 items, filtered list order).

## Assets
- Cover images: `/sites/studiodpi-work-708a7940/root-8a5edab2/images/<cover.hashName>`

## Responsive
- Widths in vw; numbers fixed 16px (overflow is accepted, matches original).

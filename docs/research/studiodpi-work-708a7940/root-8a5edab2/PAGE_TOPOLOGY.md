# Page Topology — https://studiodpi.work/

Single-viewport app (100vh, no document scroll). Three columns, each with independent internal scroll. Built originally with Umi/React + Swiper + Video.js + Mobx; data from `/api/v1/works`, `/api/v1/categories`, `/api/v1/athenas/about`, `/api/v1/athenas/supply`.

## Layers (z-index)
1. Flow: 3-column flex layout
2. `z-999` fixed overlay: RandomImageOverlay (pointer-events none), shown by "DOTs ON i"

## Sections (left → right)

### 1. InfoColumn (left, 18.75vw) — static shell + internal scroll
- Top: "STUDIO DPi" title bar (56px, border-bottom) — click = global reset + scroll left to top
- Center (scrollable): studio description (CN bold + EN), then jigsaw sections:
  - CONTACT (rich text), ACTIVITIES (rows: year + desc ×9), AWARDS (rows ×10), SELECTED CLIENTS (rich text), JOBS (rich text), FRIENDS (rich text, links)
- Bottom: copyright bar (62px, border-top, 12px text)
- INTERACTION MODEL: static + native scroll

### 2. IndexStrip (middle, flex:1 ≈210px) — time-driven infinite marquee
- 11px white top spacer, then marquee of 35 items (cover thumb 170px design + zero-padded number)
- INTERACTION MODEL: time-driven (auto-scroll 1px/frame RAF), pauses on hover, wheel adjusts manually, click → scrolls right column to project & marks number black

### 3. ProjectsColumn (right, 68.23vw) — mixed
- Top bar: horizontal scrolling category list ("ALL PROJECTS, VISUAL IDENTITY, PACKAGING, BOOK, KEY VISUAL, DIGITAL, INSTALLATION & DISPLAY") — click filters list, active = gray. Right: "DOTs ON i" → random overlay
- Center (scrollable, smooth): 35 ProjectItems (filtered by category)
- INTERACTION MODEL: click-driven (filter, expand) + native scroll + per-item carousel

### 3a. ProjectItem
- Row 1 (always visible): name | "TYPE. <categories>" | "INFO"  — middle/right click toggles expansion
- Row 2 (expandable, 0.8s cubic-bezier(0.075,0.82,0.165,1)): CLIENT.+Year. | extends (param/value) | description HTML
- Carousel: Swiper loop, images/videos, custom cursor label "n/total", left/right click zones

### 4. RandomImageOverlay
- Fixed full-viewport random supply image; click anywhere dismisses

## Dependencies
- Strip click → store.currIndex → right column scrollIntoView
- Category click → filter works + reset scrolls of strip (translateTo 0) and right (scrollTop 0)
- STUDIO DPi click → same reset + category reset

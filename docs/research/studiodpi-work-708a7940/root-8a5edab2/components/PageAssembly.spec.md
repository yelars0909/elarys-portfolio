# RandomOverlay + Page Assembly Specification

## RandomOverlay
- **Target file:** `src/components/sites/studiodpi-work-708a7940/root-8a5edab2/RandomOverlay.tsx`
- **Interaction model:** click-driven (open via DOTs ON i, dismiss via any page click)
- Fixed overlay: `position:fixed; inset:0; z-index:999; display:flex; align-items:center; justify-content:center; pointer-events:none`
- Image: `height:100vh; width:auto; max-width:100vw; object-fit:contain` — random pick from `SUPPLY_MEDIAS` (16 images), dir `supply`
- Shown only when `showRandomImg && randomImg`; page-level `onClick` on main sets `showRandomImg=false` (overlay itself never receives clicks)

## Page Assembly (`src/app/page.tsx` replaces scaffold)
- Client component holding the store (React state):
  - `works` (with `isCollapse: true` each), `categories` (ALL PROJECTS + CATEGORIES), `currCategoryId: -1`, `currIndex: -1`, `lastIndex`, `showRandomImg`, `randomIndex`, `isMiddleNeedReset`, `isRightNeedReset`
  - `toggleCollapse(id)` — flips that work's isCollapse
  - `onStudioClick()` — category → -1, both resets true, currIndex → -1
  - `onCategoryClick(id)` — only if different: set id, both resets true, currIndex → -1
  - `setCurrIndex(n)` — sets currIndex (+ lastIndex)
  - `openRandom()` — randomIndex = floor(random * SUPPLY_MEDIAS.length), showRandomImg = true
- Filtered list: `currCategoryId === -1 ? all : works.filter(w => w.categories.some(c => c.id === currCategoryId))` — SAME filtered array feeds IndexStrip and ProjectsColumn
- Layout:
```
<main className="relative w-full" onClick={dismiss overlay}>
  <div className="main"> (flex, justify-between, flex-nowrap, px-[1.0416667vw], h-screen, w-full)
    <InfoColumn /> <IndexStrip /> <ProjectsColumn />
  </div>
  {showRandomImg && <RandomOverlay />}
</main>
```

## Loading
- Original shows a loading spinner while fetching; clone has local data → render immediately (no loading state needed).

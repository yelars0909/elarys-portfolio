"use client";

import { useMemo, useState } from "react";
import { CATEGORIES, WORKS } from "./data";
import { InfoColumn } from "./InfoColumn";
import { IndexStrip } from "./IndexStrip";
import { ProjectsColumn } from "./ProjectsColumn";
import type { Work } from "./types";

type WorkState = Work & { isCollapse: boolean };

const ALL_CATEGORY = { id: -1, nameEn: "ALL PROJECTS" };

/**
 * Root of the studiodpi.work clone: three-column fixed-viewport layout with
 * the shared interaction store (category filter, collapse state, strip/right
 * scroll sync, random overlay).
 */
export function DpiApp() {
  const [works, setWorks] = useState<WorkState[]>(() =>
    WORKS.map((w) => ({ ...w, isCollapse: true })),
  );
  const [currCategoryId, setCurrCategoryId] = useState(-1);
  const [currIndex, setCurrIndexState] = useState(-1);
  const [isMiddleNeedReset, setIsMiddleNeedReset] = useState(false);
  const [isRightNeedReset, setIsRightNeedReset] = useState(false);

  const categories = useMemo(() => [ALL_CATEGORY, ...CATEGORIES], []);
  const list = useMemo(
    () =>
      currCategoryId === -1
        ? works
        : works.filter((w) => w.categories.some((c) => c.id === currCategoryId)),
    [works, currCategoryId],
  );

  const toggleCollapse = (id: number) => {
    setWorks((prev) =>
      prev.map((w) => (w.id === id ? { ...w, isCollapse: !w.isCollapse } : w)),
    );
  };

  const onStudioClick = () => {
    setCurrCategoryId(-1);
    setIsMiddleNeedReset(true);
    setIsRightNeedReset(true);
    setCurrIndexState(-1);
  };

  const onCategoryClick = (id: number) => {
    if (id === currCategoryId) return;
    setCurrCategoryId(id);
    setIsMiddleNeedReset(true);
    setIsRightNeedReset(true);
    setCurrIndexState(-1);
  };

  const setCurrIndex = (n: number) => setCurrIndexState(n);

  return (
    <>
      {/* Fonts injected here (not globals.css) so the relative URLs resolve
          against the document, working at dev root and on GitHub Pages. */}
      <style>{`
        @font-face {
          font-family: "AntiqueOli-Lig";
          src: url("sites/studiodpi-work-708a7940/root-8a5edab2/fonts/AntiqueOli-Lig.woff2") format("woff2");
          font-display: swap;
        }
        @font-face {
          font-family: "AntiqueOli-Reg";
          src: url("sites/studiodpi-work-708a7940/root-8a5edab2/fonts/AntiqueOli-Reg.woff2") format("woff2");
          font-display: swap;
        }
      `}</style>
      <main className="relative w-full">
        <div className="flex h-screen w-full flex-nowrap items-start justify-between px-[1.0416667vw]">
          <InfoColumn onStudioClick={onStudioClick} />
          <ProjectsColumn
            list={list}
            categories={categories}
            currCategoryId={currCategoryId}
            onCategory={onCategoryClick}
            currIndex={currIndex}
            isRightNeedReset={isRightNeedReset}
            setIsRightNeedReset={setIsRightNeedReset}
            toggleCollapse={toggleCollapse}
          />
          <IndexStrip
            list={list}
            currIndex={currIndex}
            isMiddleNeedReset={isMiddleNeedReset}
            setIsMiddleNeedReset={setIsMiddleNeedReset}
            onItem={setCurrIndex}
          />
        </div>
      </main>
    </>
  );
}

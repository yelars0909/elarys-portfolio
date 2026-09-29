"use client";

import { useMemo, useState } from "react";
import { CATEGORIES, COPYRIGHT, WORKS } from "./data";
import { InfoColumn, InfoSections } from "./InfoColumn";
import { IndexStrip } from "./IndexStrip";
import { ProjectItem } from "./ProjectItem";
import { ProjectsColumn } from "./ProjectsColumn";
import { useIsMobile } from "./useIsMobile";
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

  const isMobile = useIsMobile();
  const [infoOpen, setInfoOpen] = useState(false);

  const fontsStyle = (
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
  );

  if (isMobile) {
    return (
      <>
        {fontsStyle}
        <main className="relative w-full text-black">
          {/* Sticky header: studio name left, INFO toggle right */}
          <header className="sticky top-0 z-40 flex h-14 items-center justify-between border-b border-black bg-white px-3 text-base leading-5">
            <span
              className="cursor-pointer"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                onStudioClick();
              }}
            >
              ELARYS TOLKHYN
            </span>
            <span className="cursor-pointer" onClick={() => setInfoOpen(true)}>
              INFO
            </span>
          </header>

          {/* Category filter: large wrapped text, like the original mobile site */}
          <div className="px-3 pt-4 pb-2 text-[22px] leading-7 break-words">
            {categories.map((cat, i) => (
              <span key={cat.id}>
                {i !== 0 && <span>, </span>}
                <span
                  className={
                    currCategoryId === cat.id ? "text-[#959595]" : "text-black"
                  }
                  onClick={() => onCategoryClick(cat.id)}
                >
                  {cat.nameEn}
                </span>
              </span>
            ))}
          </div>

          {/* Single-column project feed, page-level scroll */}
          <div className="w-full pt-4">
            {list.map((work) => (
              <ProjectItem
                key={work.id}
                work={work}
                toggleCollapse={toggleCollapse}
                mobile
              />
            ))}
          </div>

          <footer className="px-3 pt-2 pb-8 text-xs leading-5">
            {COPYRIGHT}
          </footer>

          {/* Full-screen INFO overlay */}
          {infoOpen && (
            <div className="dpi-scrollbar-hidden fixed inset-0 z-50 overflow-y-auto bg-white text-base leading-5 text-black">
              <div className="sticky top-0 z-10 flex h-14 items-center justify-between border-b border-black bg-white px-3">
                <span>ELARYS TOLKHYN</span>
                <span
                  className="cursor-pointer"
                  onClick={() => setInfoOpen(false)}
                >
                  CLOSE
                </span>
              </div>
              <div className="px-3 pt-2 pb-10">
                <InfoSections />
              </div>
            </div>
          )}
        </main>
      </>
    );
  }

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

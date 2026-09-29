"use client";

import { Fragment, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ProjectItem } from "./ProjectItem";
import type { Category, Work } from "./types";

interface ProjectsColumnProps {
  list: (Work & { isCollapse: boolean })[];
  categories: Category[];
  currCategoryId: number;
  onCategory: (id: number) => void;
  currIndex: number;
  isRightNeedReset: boolean;
  setIsRightNeedReset: (v: boolean) => void;
  toggleCollapse: (id: number) => void;
}

/**
 * Right column: category filter bar and the scrollable list of project items.
 */
export function ProjectsColumn({
  list,
  categories,
  currCategoryId,
  onCategory,
  currIndex,
  isRightNeedReset,
  setIsRightNeedReset,
  toggleCollapse,
}: ProjectsColumnProps) {
  const centerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const center = centerRef.current;
    if (!center) return;
    if (isRightNeedReset) {
      center.scrollTop = 0;
      setIsRightNeedReset(false);
      return;
    }
    if (currIndex !== -1) {
      const work = list[currIndex];
      if (work) {
        document
          .getElementById(`right-item-${work.id}`)
          ?.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [currIndex, isRightNeedReset, list, setIsRightNeedReset]);

  return (
    <div className="ml-auto flex h-screen w-[68.2291667vw] flex-none flex-col p-0 text-black">
      <div className="mb-[17px] flex h-14 w-full flex-none items-center bg-white">
        <div className="flex min-w-0 flex-1 items-center pr-4">
          <div className="dpi-scrollbar-hidden w-full overflow-x-auto text-base leading-14 whitespace-nowrap [scroll-behavior:smooth]">
            {categories.map((cat, i) => (
              <Fragment key={cat.id}>
                {i !== 0 && <span>, </span>}
                <span
                  className={cn(
                    "cursor-pointer",
                    currCategoryId === cat.id ? "text-[#959595]" : "text-black",
                  )}
                  onClick={() => onCategory(cat.id)}
                >
                  {cat.nameEn}
                </span>
              </Fragment>
            ))}
          </div>
        </div>
      </div>

      <div
        ref={centerRef}
        className="dpi-scrollbar-hidden relative w-full flex-1 overflow-y-auto pb-5 [scroll-behavior:smooth]"
      >
        {list.map((work) => (
          <ProjectItem key={work.id} work={work} toggleCollapse={toggleCollapse} />
        ))}
      </div>
    </div>
  );
}

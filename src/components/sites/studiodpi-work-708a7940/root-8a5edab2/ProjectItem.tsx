"use client";

import { cn } from "@/lib/utils";
import { ProjectCarousel } from "./ProjectCarousel";
import type { Work } from "./types";

interface ProjectItemProps {
  work: Work & { isCollapse: boolean };
  toggleCollapse: (id: number) => void;
}

const TRANSITION = "[transition:all_0.8s_cubic-bezier(0.075,0.82,0.165,1)]";

/**
 * One project row: always-visible name / TYPE. / INFO row, an expandable
 * CLIENT. / Year. / extends / description area, then the media carousel.
 */
export function ProjectItem({ work, toggleCollapse }: ProjectItemProps) {
  const toggle = () => toggleCollapse(work.id);

  return (
    <div className="mb-8 w-full" id={`right-item-${work.id}`}>
      <div className={cn("flex items-start justify-start text-left text-base leading-5", TRANSITION)}>
        <div className="mr-5 w-[24%] flex-none">
          <span dangerouslySetInnerHTML={{ __html: work.nameEn }} />
          {work.link && (
            <a
              className="text-[#959595] underline hover:text-black"
              href={work.link}
              target="_blank"
              rel="noreferrer"
            >
              <span className="pl-1">(</span>
              LINK
              <span>)</span>
            </a>
          )}
        </div>
        <div className="mr-10 w-[24%] flex-none cursor-pointer" onClick={toggle}>
          <span className="text-[#959595]">TYPE.</span>
          <span className="dpi-html-text dpi-html-text-left-space">
            {work.categories.map((c) => c.nameEn).join(", ")}
          </span>
        </div>
        <div className="w-[52%] cursor-pointer" onClick={toggle}>
          INFO
        </div>
      </div>

      <div
        className={cn(
          "flex items-start justify-start overflow-hidden text-left text-base leading-5",
          TRANSITION,
          work.isCollapse ? "h-0" : "h-auto",
        )}
      >
        <div className="mr-5 w-[24%] flex-none pt-2.5">
          {work.clientEn && (
            <div>
              <span className="text-[#959595]">CLIENT.</span>
              <span
                className="dpi-html-text dpi-html-text-left-space"
                dangerouslySetInnerHTML={{ __html: work.clientEn }}
              />
            </div>
          )}
          <div>
            <span className="text-[#959595]">Year.</span>
            <span
              className="dpi-html-text dpi-html-text-left-space"
              dangerouslySetInnerHTML={{ __html: work.year }}
            />
          </div>
        </div>
        <div className="mr-10 w-[24%] flex-none cursor-pointer pt-2.5" onClick={toggle}>
          {work.extendsEn.map((ext, i) => (
            <div key={i}>
              <span className="text-[#959595]">{ext.param}</span>
              <span
                className="dpi-html-text dpi-html-text-left-space"
                dangerouslySetInnerHTML={{ __html: ext.value }}
              />
            </div>
          ))}
        </div>
        <div
          className="w-[52%] cursor-pointer break-words pt-2.5 [&_.dpi-cn]:mb-5 [&_.dpi-cn]:text-[14px] [&_.dpi-cn]:font-semibold [&_.dpi-en-inline]:font-normal"
          onClick={toggle}
          dangerouslySetInnerHTML={{ __html: work.descriptionEn || "" }}
        />
      </div>

      <div className="h-5 w-full" />
      <ProjectCarousel eventId={work.id} medias={work.medias} />
    </div>
  );
}

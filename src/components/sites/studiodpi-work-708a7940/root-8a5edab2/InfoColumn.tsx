"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ABOUT, COPYRIGHT } from "./data";

interface InfoColumnProps {
  onStudioClick: () => void;
}

const TRANSITION = "[transition:all_0.8s_cubic-bezier(0.075,0.82,0.165,1)]";

/**
 * The ABOUT / CONTACT / AWARDS collapsible sections, shared by the desktop
 * left column and the mobile INFO overlay.
 */
export function InfoSections() {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const toggle = (key: string) => setOpen((s) => ({ ...s, [key]: !s[key] }));

  return (
    <>
      {/* Studio description (CN + EN paragraphs; CN glyphs at 14px, EN unchanged) */}
      <p className="mb-0 cursor-pointer" onClick={() => toggle("about")}>
        ABOUT
      </p>
      <div
        className={cn(
          "overflow-hidden",
          TRANSITION,
          open.about ? "mb-11 h-auto" : "h-0",
        )}
      >
        <div
          className="pt-[22px] text-left break-words [&_p]:mt-[22px] [&_p]:first:mt-0 [&_p:first-of-type_strong]:text-[14px] [&_p:first-of-type_strong]:font-semibold [&_.dpi-en-inline]:font-normal"
          dangerouslySetInnerHTML={{ __html: ABOUT.descriptionEn }}
        />
      </div>

      {ABOUT.jigsaws.map((jigsaw) => (
        <div key={jigsaw.id}>
          <p className="mb-0 cursor-pointer" onClick={() => toggle(String(jigsaw.id))}>
            {jigsaw.nameEn}
          </p>
          <div
            className={cn(
              "overflow-hidden",
              TRANSITION,
              open[String(jigsaw.id)] ? "h-auto" : "h-0",
            )}
          >
            {(jigsaw.mode === "RICH_TEXT" || jigsaw.mode === "CONTACT") && (
              <div
                className={cn(
                  "mb-[22px] pt-[22px] text-left break-words",
                  jigsaw.mode === "CONTACT" && "[&_p_a]:no-underline",
                )}
                dangerouslySetInnerHTML={{ __html: jigsaw.content.descriptionEn ?? "" }}
              />
            )}
            {jigsaw.mode === "ROWS" && (
              <div className="mb-[22px] pt-[22px]">
                {(jigsaw.content.rows ?? []).map((row, i) => (
                  <div key={i} className="flex items-start justify-start">
                    <span className="min-w-[4.1666667vw] flex-none pr-[0.5208333vw] break-words max-md:min-w-[52px] max-md:pr-2">
                      {row.year}
                    </span>
                    <span
                      className="flex-1"
                      dangerouslySetInnerHTML={{ __html: row.descriptionEn }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
}

/**
 * Left column: studio title, scrollable info sections (description, CONTACT,
 * AWARDS), copyright bar. Sections are collapsed by default; clicking a
 * header (ABOUT / CONTACT / AWARDS) expands it, like INFO in project rows.
 */
export function InfoColumn({ onStudioClick }: InfoColumnProps) {
  const centerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex h-screen w-[240px] flex-none flex-col text-black">
      <div className="mb-[17px] w-full flex-none flex-col text-base font-normal">
        <div
          className="flex h-14 w-full cursor-pointer flex-col items-start justify-center leading-5"
          onClick={() => {
            if (centerRef.current) centerRef.current.scrollTop = 0;
            onStudioClick();
          }}
        >
          <span>ELARYS TOLKHYN</span>
        </div>
      </div>

      <div
        ref={centerRef}
        className="dpi-scrollbar-hidden relative w-full flex-1 overflow-y-auto text-base leading-5 [scroll-behavior:smooth]"
      >
        <InfoSections />
      </div>

      <div className="flex h-[62px] w-full flex-none items-center bg-white leading-5 text-black">
        <span className="text-xs">{COPYRIGHT}</span>
      </div>
    </div>
  );
}

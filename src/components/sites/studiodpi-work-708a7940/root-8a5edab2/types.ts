export interface Media {
  hashName: string;
  width: number;
  height: number;
  type: "IMAGE" | "VIDEO";
}

export interface WorkCategory {
  id: number;
  nameEn: string;
}

export interface WorkExtend {
  param: string;
  value: string;
}

export interface Work {
  id: number;
  nameEn: string;
  clientEn: string;
  year: string;
  descriptionEn: string;
  extendsEn: WorkExtend[];
  link: string | null;
  categories: WorkCategory[];
  cover: { hashName: string; width: number; height: number } | null;
  medias: Media[];
}

export interface Category {
  id: number;
  nameEn: string;
}

export interface JigsawRow {
  year: string;
  descriptionEn: string;
}

export interface Jigsaw {
  id: number;
  nameEn: string;
  mode: "RICH_TEXT" | "CONTACT" | "ROWS" | "MEDIAS";
  content: {
    descriptionEn?: string;
    rows?: JigsawRow[];
  };
}

export interface AboutInfo {
  descriptionEn: string;
  jigsaws: Jigsaw[];
}

export interface SupplyMedia {
  hashName: string;
  width: number;
  height: number;
  type: "IMAGE" | "VIDEO";
}

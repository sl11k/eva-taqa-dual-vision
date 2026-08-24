import { DICT, isLang, type Lang } from "@/content/site";

export const LANG_STORAGE_KEY = "evataqa.lang";

export function langFromPath(pathname: string): Lang {
  const seg = pathname.split("/").filter(Boolean)[0] ?? "";
  return isLang(seg) ? seg : "en";
}

/** Same page, other language. /en/services/x -> /ar/services/x */
export function swapLangPath(pathname: string, to: Lang): string {
  const parts = pathname.split("/").filter(Boolean);
  const first = parts[0];
  if (first && isLang(first)) parts[0] = to;
  else parts.unshift(to);
  return "/" + parts.join("/");
}

export function storeLang(lang: Lang) {
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch {
    /* ignore */
  }
}

export function preferredLang(): Lang {
  try {
    const stored = localStorage.getItem(LANG_STORAGE_KEY);
    if (stored && isLang(stored)) return stored;
  } catch {
    /* ignore */
  }
  if (typeof navigator !== "undefined") {
    const langs = navigator.languages?.length ? navigator.languages : [navigator.language];
    if (langs.some((l) => l?.toLowerCase().startsWith("ar"))) return "ar";
  }
  return "en";
}

export const dictFor = (lang: Lang) => DICT[lang];

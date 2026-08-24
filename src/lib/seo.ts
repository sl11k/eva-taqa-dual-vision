import { DICT, type Lang } from "@/content/site";

/** Builds title/description/OG/twitter meta + canonical & hreflang alternates. */
export function pageHead(lang: Lang, key: string, subpath: string, override?: { title?: string | undefined; description?: string | undefined }) {
  const metas = DICT[lang].meta;
  const t = metas[key] ?? metas["home"]!;
  const title = override?.title ?? t.title;
  const description = override?.description ?? t.description;
  const path = `/${lang}${subpath}`;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: path },
      { property: "og:locale", content: lang === "ar" ? "ar_SA" : "en_US" },
      { property: "og:locale:alternate", content: lang === "ar" ? "en_US" : "ar_SA" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [
      { rel: "canonical", href: path },
      { rel: "alternate", hrefLang: "en", href: `/en${subpath}` },
      { rel: "alternate", hrefLang: "ar", href: `/ar${subpath}` },
      { rel: "alternate", hrefLang: "x-default", href: `/en${subpath}` },
    ],
  };
}

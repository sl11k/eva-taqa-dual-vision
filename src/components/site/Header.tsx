import { useRouterState } from "@tanstack/react-router";
import { Link } from "@/components/site/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import type { Lang } from "@/content/site";
import logoLight from "@/assets/eva-taqa-logo-light.png.asset.json";
import { dictFor, storeLang, swapLangPath } from "@/lib/lang";

export function Header({ lang }: { lang: Lang }) {
  const t = dictFor(lang);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const other: Lang = lang === "en" ? "ar" : "en";
  const links = [
    { to: `/${lang}`, label: t.nav.home, exact: true },
    { to: `/${lang}/about`, label: t.nav.about },
    { to: `/${lang}/services`, label: t.nav.services },
    { to: `/${lang}/projects`, label: t.nav.projects },
    { to: `/${lang}/contact`, label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3" : "py-5 border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center gap-6 px-6">
        <Link to={`/${lang}`} className="group flex items-center" aria-label="EVA TAQA">
          <img
            src={logoLight.url}
            alt={lang === "en" ? "EVA TAQA logo" : "شعار ايفا طاقة"}
            width={1256}
            height={310}
            className="h-9 w-auto md:h-10"
          />
        </Link>

        <nav className="mx-auto hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.exact === true }}
              className="relative py-1 text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ms-auto flex items-center gap-3 lg:ms-0">
          <Link
            to={swapLangPath(pathname, other)}
            onClick={() => storeLang(other)}
            resetScroll={false}
            aria-label={other === "ar" ? "التبديل إلى العربية" : "Switch to English"}
            className="rounded-xs border border-border px-3 py-2 text-xs font-semibold tracking-widest text-foreground/80 transition-colors hover:border-cyan/50 hover:text-foreground"
          >
            {t.otherLangLabel}
          </Link>
          <Link
            to={`/${lang}/contact`}
            className="hidden rounded-xs bg-primary px-5 py-2.5 text-xs font-bold tracking-wide text-primary-foreground transition-shadow hover:shadow-[var(--glow-primary)] sm:inline-block"
          >
            {t.cta}
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden rounded-xs border border-border p-2 text-foreground"
            aria-label="Menu"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="glass mt-3 lg:hidden">
          <nav className="mx-auto flex max-w-[1280px] flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="border-b border-hairline py-3 text-sm text-muted-foreground"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: l.exact === true }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to={`/${lang}/contact`}
              className="mt-3 rounded-xs bg-primary px-5 py-3 text-center text-xs font-bold text-primary-foreground"
            >
              {t.cta}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

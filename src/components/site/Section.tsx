import type { ReactNode } from "react";
import { CONTACT, type Lang } from "@/content/site";
import { dictFor } from "@/lib/lang";
import { Link } from "@/components/site/link";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-6 py-24 md:py-32 ${className}`}>
      <div className="mx-auto max-w-[1280px]">{children}</div>
    </section>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-[3px] w-8 bg-orange" />
      <span className="text-[11px] font-bold tracking-[0.28em] uppercase text-orange">{children}</span>
    </div>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="brand-caps mt-6 max-w-3xl text-4xl md:text-5xl">{children}</h2>;
}

export function PageHero({
  lang,
  kicker,
  title,
  intro,
}: {
  lang: Lang;
  kicker: string;
  title: string;
  intro?: string | undefined;
}) {
  return (
    <section className="relative overflow-hidden border-b border-hairline bg-navy/40 pt-40 pb-20">
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-[0.14]" />
      <div className="pointer-events-none absolute inset-y-0 end-0 w-1/3 bg-gradient-to-l from-orange/10 to-transparent" />
      <div className="relative mx-auto max-w-[1280px] px-6">
        <Kicker>{kicker}</Kicker>
        <h1 className={`brand-caps mt-6 max-w-4xl ${lang === "ar" ? "text-4xl md:text-6xl" : "text-5xl md:text-7xl"}`}>
          {title}
        </h1>
        {intro && <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{intro}</p>}
      </div>
    </section>
  );
}

export function CtaBand({ lang }: { lang: Lang }) {
  const t = dictFor(lang);
  return (
    <Section className="relative overflow-hidden">
      <div className="relative overflow-hidden border border-hairline bg-navy/60 px-8 py-16 md:px-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 dot-grid opacity-[0.14]" />
        <div className="pointer-events-none absolute inset-y-0 start-0 w-1.5 bg-orange" />
        <div className="relative flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="brand-caps text-3xl md:text-4xl">{t.ctaBlock.title}</h2>
            <p className="mt-5 text-muted-foreground">{t.ctaBlock.body}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to={`/${lang}/contact`}
              className="rounded-none bg-orange px-7 py-3.5 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
            >
              {t.ctaBlock.primary}
            </Link>
            <a
              href={`mailto:${CONTACT.email}`}
              className="rounded-none border border-border px-7 py-3.5 text-sm font-bold transition-colors hover:border-orange"
            >
              {t.ctaBlock.secondary}
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

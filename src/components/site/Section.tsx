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
    <section className="relative overflow-hidden border-b border-hairline pt-40 pb-20">
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-60" />
      <div className="pointer-events-none absolute -top-40 start-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[140px]" />
      <div className="relative mx-auto max-w-[1280px] px-6">
        <Kicker>{kicker}</Kicker>
        <h1 className={`mt-6 max-w-4xl font-extrabold ${lang === "ar" ? "text-4xl md:text-6xl" : "text-5xl md:text-7xl"}`}>
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
      <div className="panel relative overflow-hidden px-8 py-16 md:px-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 grid-overlay opacity-40" />
        <div className="pointer-events-none absolute -bottom-32 end-0 h-80 w-80 rounded-full bg-cyan/15 blur-[120px]" />
        <div className="relative flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold md:text-4xl">{t.ctaBlock.title}</h2>
            <p className="mt-5 text-muted-foreground">{t.ctaBlock.body}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to={`/${lang}/contact`}
              className="rounded-xs bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition-shadow hover:shadow-[var(--glow-primary)]"
            >
              {t.ctaBlock.primary}
            </Link>
            <a
              href={`mailto:${CONTACT.email}`}
              className="rounded-xs border border-border px-7 py-3.5 text-sm font-bold transition-colors hover:border-cyan/60"
            >
              {t.ctaBlock.secondary}
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

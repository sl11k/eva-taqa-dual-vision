import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SERVICE_SLUGS, isLang, type Lang } from "@/content/site";
import { brandFor } from "@/content/brand";
import { dictFor } from "@/lib/lang";
import { pageHead } from "@/lib/seo";
import { Link } from "@/components/site/link";
import { CtaBand, Kicker, Section, SectionTitle } from "@/components/site/Section";
import heroImg from "@/assets/brand-hero.jpg";
import gridImg from "@/assets/hero-grid.jpg";
import riyadhImg from "@/assets/riyadh.jpg";
import controlImg from "@/assets/control-room.jpg";
import solarImg from "@/assets/solar.jpg";
import teamImg from "@/assets/team-site.jpg";

export const Route = createFileRoute("/$lang/")({
  head: ({ params }) => pageHead(isLang(params.lang) ? params.lang : "en", "home", ""),
  component: Home,
});

function Home() {
  const { lang } = Route.useParams() as { lang: Lang };
  const t = dictFor(lang);
  const b = brandFor(lang);
  const rtl = lang === "ar";
  const Arrow = rtl ? ArrowLeft : ArrowRight;

  return (
    <>
      {/* ── HERO — brand book cover ─────────────────────────── */}
      <section className="relative min-h-[88vh] overflow-hidden bg-background">
        <img
          src={heroImg}
          alt={rtl ? "محطة كهرباء وأبراج نقل الطاقة ليلاً" : "High-voltage substation and transmission towers at night"}
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        
        <div className="absolute inset-0 diagonal-band opacity-90" />
        <div className="absolute inset-0 dot-grid opacity-[0.16]" />

        <div className="relative mx-auto flex min-h-[88vh] max-w-[1280px] flex-col justify-center px-6 pt-32 pb-24">
          <div className="reveal">
            <Kicker>{t.hero.eyebrow}</Kicker>
          </div>
          <h1
            className={`brand-caps mt-8 reveal ${rtl ? "max-w-4xl text-4xl sm:text-5xl md:text-6xl" : "max-w-4xl text-5xl sm:text-6xl md:text-[5.5rem]"}`}
            style={{ animationDelay: "80ms" }}
          >
            {t.hero.headline[0]}
            <br />
            <span className="text-orange">{t.hero.headline[1]}</span>
          </h1>
          <div className="mt-8 reveal brand-rule" style={{ animationDelay: "140ms" }} />
          <p className="mt-8 reveal max-w-xl text-lg text-muted-foreground" style={{ animationDelay: "180ms" }}>
            {t.hero.desc}
          </p>
          <p
            className="mt-6 reveal text-xs font-bold tracking-[0.34em] text-orange uppercase"
            style={{ animationDelay: "230ms" }}
          >
            {b.signature}
          </p>

          <div className="mt-12 reveal flex flex-wrap items-center gap-4" style={{ animationDelay: "300ms" }}>
            <Link
              to={`/${lang}/services`}
              className="rounded-none bg-orange px-8 py-4 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
            >
              {t.hero.primary}
            </Link>
            <Link
              to={`/${lang}/contact`}
              className="rounded-none border border-border px-8 py-4 text-sm font-bold transition-colors hover:border-orange"
            >
              {t.hero.secondary}
            </Link>
            <Link
              to={`/${lang}/projects`}
              className="group inline-flex items-center gap-2 px-2 py-4 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.hero.tertiary.replace(/[→←]\s*$/, "").trim()}
              <Arrow className="size-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 border-t border-hairline bg-navy/70 backdrop-blur-sm">
          <div className="mx-auto flex max-w-[1280px] flex-wrap items-center gap-x-10 gap-y-2 px-6 py-4 text-[11px] font-bold tracking-[0.24em] text-muted-foreground uppercase">
            <span className="text-orange">{b.signature}</span>
            <span className="hidden sm:inline">{b.signatureSub}</span>
          </div>
        </div>
      </section>

      {/* ── CONFIDENCE STATEMENT ────────────────────────────── */}
      <Section className="border-b border-hairline bg-navy/40">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <h2 className={`brand-caps ${rtl ? "text-3xl md:text-5xl" : "text-4xl md:text-6xl"}`}>
              {b.confidence.lines[0]}
              <br />
              <span className="text-orange">{b.confidence.lines[1]}</span>
            </h2>
            <p className="mt-8 max-w-xl text-muted-foreground">{b.confidence.body}</p>
          </div>
          <div className="border-s-2 border-orange ps-8">
            <div className="stat-figure text-6xl md:text-7xl">{b.confidence.stat}</div>
            <div className="mt-3 text-xs font-bold tracking-[0.3em] text-muted-foreground uppercase">
              {b.confidence.statLabel}
            </div>
            <p className="mt-6 text-lg font-semibold">{b.confidence.statNote}</p>
          </div>
        </div>
      </Section>

      {/* ── WHY WE EXIST (light) ────────────────────────────── */}
      <Section className="section-light border-b border-hairline">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <Kicker>{b.why.kicker}</Kicker>
            <h2 className={`brand-caps mt-6 ${rtl ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl"}`}>
              {b.why.title[0]}
              <br />
              <span className="text-orange">{b.why.title[1]}</span>
            </h2>
            <p className="mt-8 max-w-xl text-muted-foreground">{b.why.body}</p>
            <blockquote className="mt-10 border-s-2 border-orange ps-6 text-xl font-semibold">
              “{b.why.quote}
              <span className="text-orange">{b.why.quoteHighlight}</span>”
            </blockquote>
          </div>
          <div className="relative">
            <img
              src={teamImg}
              alt={rtl ? "مهندسو ايفا طاقة في غرفة لوحات كهربائية" : "EVA TAQA engineers inspecting electrical switchgear"}
              loading="lazy"
              width={1600}
              height={1000}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-1.5 bg-orange" />
          </div>
        </div>
      </Section>

      {/* ── BY THE NUMBERS ─────────────────────────────────── */}
      <Section className="border-b border-hairline">
        <Kicker>{b.numbers.kicker}</Kicker>
        <SectionTitle>{b.numbers.title}</SectionTitle>
        <div className="mt-14 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {b.numbers.items.map((n) => (
            <div key={n.label} className="bg-background p-10 transition-colors hover:bg-surface">
              <div className="stat-figure text-5xl">
                <span className="ltr-inline">{n.value}</span>
              </div>
              <div className="mt-4 text-xs font-bold tracking-[0.24em] text-muted-foreground uppercase">{n.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── CORE SOLUTIONS (light) ─────────────────────────── */}
      <Section className="section-light border-b border-hairline">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Kicker>{t.services.kicker}</Kicker>
            <SectionTitle>{t.services.title}</SectionTitle>
          </div>
          <Link to={`/${lang}/services`} className="group inline-flex items-center gap-2 text-sm font-bold text-orange">
            {t.services.back}
            <Arrow className="size-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
          </Link>
        </div>
        <div className="mt-14 grid gap-px bg-hairline md:grid-cols-2 lg:grid-cols-3">
          {SERVICE_SLUGS.map((slug) => {
            const s = t.services.items[slug];
            return (
              <Link
                key={slug}
                to={`/${lang}/services/${slug}`}
                className="group relative bg-surface p-9 transition-colors hover:bg-surface-2"
              >
                <span className="num-plate">{s.num}</span>
                <h3 className="brand-caps mt-6 text-lg">{s.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground">{s.desc}</p>
                <span className="mt-7 inline-flex items-center gap-2 text-xs font-bold text-orange opacity-0 transition-opacity group-hover:opacity-100">
                  {t.services.detailCta}
                  <Arrow className="size-3.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* ── INDUSTRIES WE SERVE ────────────────────────────── */}
      <Section className="border-b border-hairline bg-navy/30">
        <Kicker>{b.industries.kicker}</Kicker>
        <SectionTitle>{b.industries.title}</SectionTitle>
        <div className="mt-12 flex flex-wrap gap-3">
          {b.industries.items.map((i) => (
            <span
              key={i}
              className="border border-hairline px-5 py-3 text-sm text-muted-foreground transition-colors hover:border-orange hover:text-foreground"
            >
              {i}
            </span>
          ))}
        </div>
      </Section>

      {/* ── ENGINEERING PROCESS (light) ────────────────────── */}
      <Section className="section-light border-b border-hairline">
        <Kicker>{b.process.kicker}</Kicker>
        <SectionTitle>{b.process.title}</SectionTitle>
        <p className="mt-6 max-w-2xl text-muted-foreground">{b.process.body}</p>
        <div className="mt-14 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {b.process.steps.map((s) => (
            <div key={s.num} className="bg-surface p-9">
              <span className="num-plate">{s.num}</span>
              <h3 className="brand-caps mt-6 text-base">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── CORE VALUES ────────────────────────────────────── */}
      <Section className="border-b border-hairline">
        <Kicker>{b.values.kicker}</Kicker>
        <SectionTitle>{b.values.title}</SectionTitle>
        <div className="mt-14 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {b.values.items.map((v, i) => (
            <div key={v.title} className="group bg-background p-9 transition-colors hover:bg-surface">
              <div className="flex items-baseline gap-4">
                <span className="text-xs font-bold tracking-[0.2em] text-orange">
                  <span className="ltr-inline">{String(i + 1).padStart(2, "0")}</span>
                </span>
                <h3 className="brand-caps text-lg">{v.title}</h3>
              </div>
              <div className="mt-4 h-px w-14 bg-orange/60 transition-all duration-500 group-hover:w-24" />
              <p className="mt-5 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── HSE + RELIABILITY ──────────────────────────────── */}
      <Section className="border-b border-hairline bg-navy/40">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <img
              src={controlImg}
              alt={rtl ? "غرفة تحكم كهربائية حديثة" : "Modern electrical control room"}
              loading="lazy"
              width={1600}
              height={1000}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-y-0 start-0 w-1.5 bg-orange" />
          </div>
          <div>
            <Kicker>{b.hse.kicker}</Kicker>
            <h2 className={`brand-caps mt-6 ${rtl ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl"}`}>{b.hse.title}</h2>
            <p className="mt-6 text-muted-foreground">{b.hse.body}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {b.hse.items.map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-2 w-2 shrink-0 bg-orange" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-sm text-muted-foreground">{t.reliability.body}</p>
          </div>
        </div>
      </Section>

      {/* ── PARTNERS (light) ───────────────────────────────── */}
      <Section className="section-light border-b border-hairline">
        <Kicker>{b.partners.kicker}</Kicker>
        <SectionTitle>{b.partners.title}</SectionTitle>
        <p className="mt-6 max-w-2xl text-muted-foreground">{b.partners.body}</p>
        <div className="mt-12 grid gap-px bg-hairline sm:grid-cols-3 lg:grid-cols-3">
          {b.partners.items.map((p) => (
            <div
              key={p}
              className="flex h-24 items-center justify-center bg-surface px-4 text-center text-sm font-bold tracking-[0.2em] text-foreground/70 transition-colors hover:text-orange"
            >
              <span className="ltr-inline">{p}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* ── PROJECTS ───────────────────────────────────────── */}
      <Section className="border-b border-hairline">
        <Kicker>{t.projects.kicker}</Kicker>
        <SectionTitle>{t.projects.title}</SectionTitle>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.projects.rows.slice(0, 3).map((row, i) => (
            <article key={`${row.name}-${i}`} className="lift group relative overflow-hidden border border-hairline bg-surface">
              <div className="relative h-52 overflow-hidden">
                <img
                  src={i === 2 ? solarImg : i === 1 ? gridImg : riyadhImg}
                  alt={row.name}
                  loading="lazy"
                  width={1600}
                  height={1000}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-1 bg-orange" />
              </div>
              <div className="p-7">
                <h3 className="text-lg font-bold">{row.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{row.location}</p>
              </div>
            </article>
          ))}
        </div>
        <Link
          to={`/${lang}/projects`}
          className="group mt-10 inline-flex items-center gap-2 border-b border-orange/50 pb-2 text-sm font-bold text-orange"
        >
          {t.projects.title}
          <Arrow className="size-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
        </Link>
      </Section>

      {/* ── VISION 2030 ────────────────────────────────────── */}
      <Section className="relative overflow-hidden border-b border-hairline">
        <img
          src={riyadhImg}
          alt={rtl ? "أفق مدينة الرياض" : "Riyadh skyline"}
          loading="lazy"
          width={1600}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 diagonal-band" />
        <div className="relative">
          <Kicker>{b.vision2030.kicker}</Kicker>
          <h2 className={`brand-caps mt-6 max-w-3xl ${rtl ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl"}`}>
            {b.vision2030.title}
          </h2>
          <p className="mt-6 max-w-2xl text-muted-foreground">{b.vision2030.body}</p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {b.vision2030.items.map((i) => (
              <li key={i} className="border-t-2 border-orange pt-4 text-sm font-semibold">
                {i}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ── COMMITMENT ─────────────────────────────────────── */}
      <Section className="border-b border-hairline bg-navy/50 text-center">
        <p className="brand-caps text-2xl md:text-3xl">{b.commitment.line1}</p>
        <p className="brand-caps mt-2 text-2xl text-orange md:text-3xl">{b.commitment.line2}</p>
        <div className="mx-auto mt-8 brand-rule" />
        <p className="mt-8 text-lg text-muted-foreground">{b.commitment.line3}</p>
      </Section>

      <CtaBand lang={lang} />
    </>
  );
}

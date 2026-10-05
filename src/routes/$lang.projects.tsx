import { createFileRoute } from "@tanstack/react-router";
import { CONTACT, isLang, type Lang } from "@/content/site";
import { dictFor } from "@/lib/lang";
import { pageHead } from "@/lib/seo";
import { Link } from "@/components/site/link";
import { PageHero, Section } from "@/components/site/Section";
import inverterImg from "@/assets/projects/project-inverter-mobile.jpg";
import samiImg from "@/assets/projects/project-sami-generators.jpg";
import seuImg from "@/assets/projects/project-seu-generators.jpg";
import sdaiaImg from "@/assets/projects/project-sdaia-mobile-operations.jpg";
import borderUpsImg from "@/assets/projects/project-border-ups.jpg";
import satelliteBatteriesImg from "@/assets/projects/project-satellite-batteries.jpg";

const featuredProjects = [
  {
    image: inverterImg,
    ar: "تركيب منظومة كهرباء وإنفيرتر لمركبة متنقلة",
    en: "Mobile vehicle electrical and inverter system installation",
  },
  {
    image: samiImg,
    ar: "صيانة مولدات شركة سامي للصناعات العسكرية",
    en: "Generator maintenance for SAMI Military Industries",
    military: true,
  },
  {
    image: seuImg,
    ar: "صيانة مولدات الجامعة السعودية الإلكترونية",
    en: "Generator maintenance for Saudi Electronic University",
  },
  {
    image: sdaiaImg,
    ar: "تجهيز منظومة الكهرباء للعربات المتنقلة لسدايا",
    en: "Electrical systems for SDAIA mobile vehicles",
  },
  {
    image: borderUpsImg,
    ar: "توريد وتركيب UPS لمنفذ علب بظهران الجنوب",
    en: "UPS supply and installation at Alab border crossing, Dhahran Al-Janoub",
  },
  {
    image: satelliteBatteriesImg,
    ar: "توريد وتركيب بطاريات بإدارة الأقمار الصناعية في تبوك",
    en: "Battery supply and installation for the Satellite Administration in Tabuk",
  },
];

export const Route = createFileRoute("/$lang/projects")({
  head: ({ params }) => pageHead(isLang(params.lang) ? params.lang : "en", "projects", "/projects"),
  component: Projects,
});

function Projects() {
  const { lang } = Route.useParams() as { lang: Lang };
  const t = dictFor(lang);

  return (
    <>
      <PageHero
        lang={lang}
        kicker={t.projects.kicker}
        title={t.projects.title}
        intro={t.projects.note}
      />

      <Section className="section-light">
        <div className="max-w-4xl">
          <p className="text-lg text-muted-foreground">{t.projects.intro}</p>
          <h2 className="mt-16 text-3xl font-extrabold md:text-4xl">
            {lang === "ar" ? "مشاريع مختارة بالصور" : "Selected projects in pictures"}
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <article
              key={project.en}
              className={`group overflow-hidden border bg-surface ${project.military ? "border-orange" : "border-hairline"}`}
            >
              <div className="relative h-72 overflow-hidden bg-navy">
                <img
                  src={project.image}
                  alt={lang === "ar" ? project.ar : project.en}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {project.military && (
                  <span className="absolute end-4 top-4 bg-orange px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-primary-foreground">
                    {lang === "ar" ? "مشروع عسكري" : "Military project"}
                  </span>
                )}
              </div>
              <div className="border-t-4 border-orange p-6">
                <h3 className="font-bold leading-relaxed">
                  {lang === "ar" ? project.ar : project.en}
                </h3>
              </div>
            </article>
          ))}
        </div>

        <div className="max-w-4xl">
          <h2 className="mt-16 text-3xl font-extrabold md:text-4xl">{t.projects.majorTitle}</h2>
          <p className="mt-4 text-muted-foreground">{t.projects.majorNote}</p>
        </div>

        <div className="mt-10 overflow-hidden rounded-xs border border-hairline">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-start">
              <thead>
                <tr className="bg-surface-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  <th className="w-16 px-5 py-4">{t.projects.tableHeaders.num}</th>
                  <th className="px-5 py-4">{t.projects.tableHeaders.project}</th>
                  <th className="px-5 py-4">{t.projects.tableHeaders.location}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline">
                {t.projects.rows.map((row, i) => (
                  <tr
                    key={`${row.name}-${i}`}
                    className={`transition-colors hover:bg-surface-2/40 ${row.military ? "border-s-4 border-orange bg-orange/8" : ""}`}
                  >
                    <td className="px-5 py-4 font-bold text-orange">{i + 1}</td>
                    <td className="px-5 py-4 font-semibold">
                      <div className="flex flex-wrap items-center gap-3">
                        <span>{row.name}</span>
                        {row.military && (
                          <span className="border border-orange/50 bg-orange/10 px-2 py-1 text-[10px] font-extrabold tracking-wider text-orange uppercase">
                            {lang === "ar" ? "مشروع عسكري" : "Military project"}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-5 py-4 text-muted-foreground">{row.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-6 text-sm italic text-muted-foreground">
          {lang === "ar"
            ? "تم تبسيط الأسماء المرجعية الداخلية للعرض العام."
            : "Internal reference names have been simplified for public display."}
        </p>

        <div className="mt-16 overflow-hidden rounded-xs border border-hairline bg-surface px-8 py-12 md:px-12 md:py-16">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-extrabold md:text-3xl">{t.projects.cta.title}</h3>
              <p className="mt-4 text-muted-foreground">{t.projects.cta.body}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to={`/${lang}/contact`}
                className="rounded-none bg-orange px-7 py-3.5 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
              >
                {t.projects.cta.primary}
              </Link>
              <a
                href={`mailto:${CONTACT.email}`}
                className="rounded-xs border border-border px-7 py-3.5 text-sm font-bold transition-colors hover:border-orange"
              >
                {t.projects.cta.secondary}
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

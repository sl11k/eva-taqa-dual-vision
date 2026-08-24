import { createFileRoute } from "@tanstack/react-router";
import { CONTACT, isLang, type Lang } from "@/content/site";
import { dictFor } from "@/lib/lang";
import { pageHead } from "@/lib/seo";
import { Link } from "@/components/site/link";
import { PageHero, Section } from "@/components/site/Section";

export const Route = createFileRoute("/$lang/projects")({
  head: ({ params }) => pageHead(isLang(params.lang) ? params.lang : "en", "projects", "/projects"),
  component: Projects,
});

function Projects() {
  const { lang } = Route.useParams() as { lang: Lang };
  const t = dictFor(lang);

  return (
    <>
      <PageHero lang={lang} kicker={t.projects.kicker} title={t.projects.title} intro={t.projects.note} />

      <Section>
        <div className="max-w-4xl">
          <p className="text-lg text-muted-foreground">{t.projects.intro}</p>
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
                  <tr key={`${row.name}-${i}`} className="transition-colors hover:bg-surface-2/40">
                    <td className="px-5 py-4 text-muted-foreground">{i + 1}</td>
                    <td className="px-5 py-4 font-semibold">{row.name}</td>
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
                className="rounded-xs bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition-shadow hover:shadow-[var(--glow-primary)]"
              >
                {t.projects.cta.primary}
              </Link>
              <a
                href={`mailto:${CONTACT.email}`}
                className="rounded-xs border border-border px-7 py-3.5 text-sm font-bold transition-colors hover:border-cyan/60"
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

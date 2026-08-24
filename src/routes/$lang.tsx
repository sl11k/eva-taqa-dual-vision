import { createFileRoute, Outlet, redirect, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { isLang, type Lang } from "@/content/site";
import { storeLang } from "@/lib/lang";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/$lang")({
  beforeLoad: ({ params }) => {
    if (!isLang(params.lang)) throw redirect({ to: "/en" as never, replace: true });
  },
  component: LangLayout,
});

function LangLayout() {
  const { lang } = Route.useParams() as { lang: Lang };
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    storeLang(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header lang={lang} />
      <main key={pathname} className="flex-1 page-enter">
        <Outlet />
      </main>
      <Footer lang={lang} />
    </div>
  );
}

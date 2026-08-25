import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { preferredLang } from "@/lib/lang";
import logoLight from "@/assets/eva-taqa-logo-light.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EVA TAQA — Reliable Power & Energy Solutions in Saudi Arabia" },
      {
        name: "description",
        content:
          "EVA TAQA designs, delivers, commissions and maintains high-performance electrical power systems for Saudi Arabia's critical infrastructure.",
      },
      { property: "og:title", content: "EVA TAQA — Reliable Power & Energy Solutions" },
      { property: "og:description", content: "حلول موثوقة للطاقة والكهرباء في المملكة العربية السعودية" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "alternate", hrefLang: "en", href: "/en" },
      { rel: "alternate", hrefLang: "ar", href: "/ar" },
      { rel: "alternate", hrefLang: "x-default", href: "/en" },
    ],
  }),
  component: LanguageGate,
});

function LanguageGate() {
  const navigate = useNavigate();

  useEffect(() => {
    // Respect a stored choice, otherwise fall back to browser language once.
    navigate({ to: `/${preferredLang()}` as never, replace: true });
  }, [navigate]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-6 text-center">
      <h1 className="sr-only">EVA TAQA</h1>
      <img src={logoLight.url} alt="EVA TAQA logo" width={1256} height={310} className="h-12 w-auto" />
      <div className="h-px w-24 accent-rule" />
      <p className="text-xs tracking-[0.2em] text-muted-foreground">POWER &amp; ENERGY SOLUTIONS</p>
      <noscript>
        <a href="/en" className="underline">
          English
        </a>{" "}
        ·{" "}
        <a href="/ar" className="underline">
          العربية
        </a>
      </noscript>
    </main>
  );
}

import { BatteryCharging, Cable, Factory, Fan, Network, PlugZap, Sun } from "lucide-react";
import type { ServiceSlug } from "@/content/site";

const ICONS = {
  "power-transmission": Cable,
  "distribution-substations": Network,
  "electrical-installations": PlugZap,
  "power-plants": Factory,
  "solar-renewable": Sun,
  "control-panels-hvac": Fan,
  "power-conversion": BatteryCharging,
} satisfies Record<ServiceSlug, typeof Cable>;

export function ServiceIcon({ slug, className = "" }: { slug: ServiceSlug; className?: string }) {
  const Icon = ICONS[slug];
  return (
    <span className={`inline-flex size-14 items-center justify-center border border-orange/30 bg-orange/10 text-orange transition-colors group-hover:border-orange group-hover:bg-orange/20 ${className}`}>
      <Icon className="size-7" strokeWidth={1.6} aria-hidden="true" />
    </span>
  );
}

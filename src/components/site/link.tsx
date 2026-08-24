import { Link as RouterLink } from "@tanstack/react-router";
import type { ComponentProps } from "react";

type Props = Omit<ComponentProps<typeof RouterLink>, "to"> & { to: string };

/**
 * Loosely-typed Link: routes are built from a dynamic `$lang` segment, so we
 * compose href strings ("/ar/services/solar-renewable") at runtime.
 */
export function Link({ to, ...rest }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <RouterLink to={to as any} {...(rest as any)} />;
}

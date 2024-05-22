"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";
import type { FC, PropsWithChildren } from "react";

export const ThemeProvider: FC<PropsWithChildren<ThemeProviderProps>> = ({
  children,
  ...props
}: ThemeProviderProps) => (
  <NextThemesProvider {...props}>{children}</NextThemesProvider>
);

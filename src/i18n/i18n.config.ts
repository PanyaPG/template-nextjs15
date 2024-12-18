import { enumLocale } from "./types";

export const locales: enumLocale[] = [enumLocale.En, enumLocale.Th];

export const i18n = {
  defaultLocale: enumLocale.En,
  locales: locales,
  // basePath: process.env.NEXT_PUBLIC_BASE_PATH,
} as const;

export type Locale = (typeof i18n)["locales"][number];

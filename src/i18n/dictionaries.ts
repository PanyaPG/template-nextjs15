// import "server-only";
"use client";
import { enumLocale } from "./types";

const dictionaries = {
  en: () => import("./dictionaries/en").then((module) => module.default),
  th: () => import("./dictionaries/th").then((module) => module.default),
};

export const getDictionary = async (locale: enumLocale) =>
  (await dictionaries[locale]?.()) ?? (await dictionaries.en());

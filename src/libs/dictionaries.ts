import "server-only";
import type { Locale } from "@/i18n.config";

const dictionaries = {
  en: () => import("@/translate/en.json").then((module) => module.default),
  fr: () => import("@/translate/fr.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  return locale == "fr" ? dictionaries.fr() : dictionaries.en();
};

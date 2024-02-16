export const i18n = {
    defaultLocale: "fr",
    locales: ["en", "fr"],
    localePath: "public/locales",
    localeSubpaths: {
      en: "en",
      fr: "fr",
    },
    localeDetection: false,
  } as const;
  
  export type Locale = (typeof i18n)["locales"][number];
  
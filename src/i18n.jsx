import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import ruTranslation from "./locales/ru.json";
import enTranslation from "./locales/en.json";

const lang = localStorage.getItem("i18nextLng") || "en";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: lang,
    debug: true,
    resources: {
      en: { translation: enTranslation },
      ru: { translation: ruTranslation },
    },
  });

export default i18n;

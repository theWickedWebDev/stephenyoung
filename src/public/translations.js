import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: require('./assets/copy/en_us.json'),
      es: require('./assets/copy/es_es.json'),
      fr: require('./assets/copy/fr_fr.json'),
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['cookie'],
      lookupCookie: 'lang'
    }
  });

i18n.on('languageChanged', function(lng) {
  window.scrollTo(0,0);
})

export default i18n;

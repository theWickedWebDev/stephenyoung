
  window.S3_URL = 'https://cdn.thewickedweb.dev'
  window.S3_IMAGES_PATH = '/images'
  window.S3_IMAGES_GALLERY_PATH = '/gallery'
  window.S3_RESUME_PATH = '/resume'
  window.S3_FLAGS_PATH = '/flags'
  window.S3_AVATAR_PATH = '/avatar'
  window.S3_LOGOS_PATH = '/logo'
  window.S3_SOCIAL_PATH = '/social'
  window.BREAKPOINTS = {
    mobile: 500,
    tablet: 800,
    desktop: 1100,
  };

window.scrollTo = jest.fn();
window.addEventListener = jest.fn((event, cb) => cb);
window.removeEventListener = jest.fn((event, cb) => cb);

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: require('../src/public/assets/copy/en_us.json'),
      es: require('../src/public/assets/copy/es_es.json'),
      fr: require('../src/public/assets/copy/fr_fr.json'),
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

export { i18n };

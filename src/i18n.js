import i18n from 'i18next';
import Backend from 'i18next-chained-backend';
import XHR from 'i18next-xhr-backend';
import LocalStorageBackend from 'i18next-localstorage-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    initImmediate: false,
    backend: {
      backends: [LocalStorageBackend, XHR],
      backendOptions: [
        {
          // LocalStorageOptions
          prefix: 'i18next_res_',
          expirationTime: 60000, // 7*24*60*60*1000=604800000 miliseconds (7days),
          versions: {},
          store: window.localStorage
        },
        {
          // FileSystemBackend Options
          loadPath: '/locales/{{lng}}/{{ns}}.json',
          addPath: '/locales/{{lng}}/{{ns}}.missing.json'
        }
      ]
    },
    fallbackLng: 'en',
    saveMissing: true,
    whitelist: ['en', 'es'],
    load: ['en', 'es'],
    preload: ['en', 'es'],
    ns: ['translation', 'router', 'apa'],
    returnObjects: true,
    defaultNS: 'translation',
    saveMissingTo: 'fallback',
    debug: true,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

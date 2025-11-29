

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


import caTranslation from './locales/ca/translation.json';
import esTranslation from './locales/es/translation.json';
import enTranslation from './locales/en/translation.json';

i18n
  .use(initReactI18next) 
  .init({
    
    resources: {
      ca: {
        translation: caTranslation
      },
      es: {
        translation: esTranslation
      },
      en: {
        translation: enTranslation
      }
    },
    
    
    lng: "ca", 
    fallbackLng: "en", 
    debug: false, 
    
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(initReactI18next) 
  .init({    
    lng: "en",
    fallbackLng: 'en',    
    interpolation: {
      escapeValue: false, // react already safes from xss
      format: function (value, format, lng) {
        if (value instanceof Date){         
          return value.toLocaleDateString(format)
        } 
        if (format === 'uppercase') return value.toUpperCase();
        return value;
      }
    },
    debug: true,
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    }   
});

export default i18n;
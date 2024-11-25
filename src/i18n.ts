import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import Backend from "i18next-xhr-backend"
import LanguageDetector from "i18next-browser-languagedetector"

i18n
    .use(LanguageDetector)
    .use(Backend)
    .use(initReactI18next)
    .init({
        load: "languageOnly", 
        backend: {
            // loadPath: "/locales/{{lng}}/{{ns}}.json",
        },
        detection: {
            order: ["localStorage","htmlTag", "cookie", "path"],
            caches: ["localStorage"], // cache user language on
        },
        fallbackLng: "ar",
        
        interpolation: {
            escapeValue: false,
        },
        initImmediate: false,
    })
export default i18n
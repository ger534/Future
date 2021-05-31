import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-xhr-backend';

import common_de from "./translations/de/common.json";
import common_en from "./translations/en/common.json";
import common_es from "./translations/es/common.json";

i18n
    .use(Backend)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        interpolation: { escapeValue: false },  // React already does escaping
        lng: 'en',                              // language to use
        resources: {
            en: {
                common: common_en               // 'common' is our custom namespace
            },
            de: {
                common: common_de
            },
            es: {
                common: common_es
            },
        },
        fallbackLng: ["es", "de", "en"],
    });

export default i18n;

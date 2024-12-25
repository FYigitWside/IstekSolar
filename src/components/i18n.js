import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from '../locales/en.json';
import frTranslation from '../locales/fr.json';
import rsTranslation from '../locales/rs.json';
import trTranslation from '../locales/tr.json';

const resources = {
    en: { translation: enTranslation },
    fr: { translation: frTranslation },
    rs: { translation: rsTranslation },
    tr: { translation: trTranslation }
};

// Dil bilgisini localStorage'dan al
const storedLanguage = localStorage.getItem('language');

// Varsayılan dil, localStorage'da kayıtlı değilse 'en' olarak ayarla
const defaultLanguage = storedLanguage || 'en';

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: defaultLanguage,
        fallbackLng: 'tr',
        interpolation: {
            escapeValue: false
        }
    });

// Dil bilgisini localStorage'a kaydet
i18n.on('languageChanged', (lng) => {
    localStorage.setItem('language', lng);
});

export default i18n;
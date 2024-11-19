import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: "Welcome",
      description: "This is a client-rendered i18n example.",
    },
  },
  es: {
    translation: {
      welcome: "Bienvenido",
      description: "Este es un ejemplo de i18n renderizado en cliente.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

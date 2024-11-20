import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      text_1: "Explore 1,000+ Quizzes",
    },
  },
  si: {
    translation: {
      text_1: "ප්‍රශ්නාවලිය 1,000+ ගවේෂණය කරන්න",
    },
  },
  ta: {
    translation: {
      text_1: "1,000+ வினாடி வினாக்களை ஆராயுங்கள்",
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

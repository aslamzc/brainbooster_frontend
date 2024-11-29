import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      text_1: "Explore 1,000+ Quizzes",
      text_2: "Elevate Your Learning",
      text_3: "Learn,Grow, ",
      text_4: "Succeed",
      text_5: "Welcome to BrainBooster App! Ready to test your knowledge and have some fun?",
      text_6: "See All Quizzes",
      text_7: "Quizzes",
      text_8: "Search",
      text_9: "Question",
      text_10: "Answer",
    },
  },
  si: {
    translation: {
      text_1: "ප්‍රශ්නාවලිය 1,000+ ගවේෂණය කරන්න",
      text_2: "ඔබේ ඉගෙනීම උසස් කරන්න",
      text_3: "ඉගෙන ගන්න, වැඩෙන්න, ",
      text_4: "සාර්ථක වෙන්න",
      text_5: "BrainBooster යෙදුම වෙත සාදරයෙන් පිළිගනිමු! ඔබේ දැනුම පරීක්ෂා කර විනෝද වීමට සූදානම්ද?",
      text_6: "සියලුම ප්‍රශ්නාවලිය බලන්න",
      text_7: "ප්‍රශ්නාවලිය",
      text_8: "සොයන්න",
      text_9: "ප්රශ්නය",
      text_10: "උත්තර දෙන්න",
    },
  },
  ta: {
    translation: {
      text_1: "1,000+ வினாடி வினாக்களை ஆராயுங்கள்",
      text_2: "உங்கள் கற்றலை உயர்த்துங்கள்",
      text_3: "கற்றுக்கொள்ளுங்கள், வளருங்கள், ",
      text_4: "வெற்றி பெறுங்கள்",
      text_5: "BrainBooster பயன்பாட்டிற்கு வரவேற்கிறோம்! உங்கள் அறிவை சோதித்து வேடிக்கை பார்க்க தயாரா?",
      text_6: "அனைத்து வினாடி வினாக்களையும் பார்க்கவும்",
      text_7: "வினாடி வினாக்கள்",
      text_8: "தேடு",
      text_9: "கேள்வி",
      text_10: "பதில்",
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

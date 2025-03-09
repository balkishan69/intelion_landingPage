import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'hero.title': 'Transform your business',
      'hero.subtitle': 'with intelligent solutions',
      'services.title': 'Our Services',
      'contact.title': 'Get in Touch',
      // Add more translations
    },
  },
  es: {
    translation: {
      'hero.title': 'Transforma tu negocio',
      'hero.subtitle': 'con soluciones inteligentes',
      'services.title': 'Nuestros Servicios',
      'contact.title': 'Contáctanos',
      // Add more translations
    },
  },
  // Add more languages
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
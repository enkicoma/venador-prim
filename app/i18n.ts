import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        navigation: {
          home: 'Home',
          products: 'Products',
          services: 'Services',
          projects: 'Projects',
          certificates: 'Certificates',
          contact: 'Contact',
        },
        languages: {
          ro: 'Romanian',
          en: 'English',
          ru: 'Russian',
        },
      },
    },
    ro: {
      translation: {
        navigation: {
          home: 'Acasă',
          products: 'Produse',
          services: 'Servicii',
          projects: 'Proiecte',
          certificates: 'Certificate',
          contact: 'Contact',
        },
        languages: {
          ro: 'Română',
          en: 'Engleză',
          ru: 'Rusă',
        },
      },
    },
    ru: {
      translation: {
        navigation: {
          home: 'Главная',
          products: 'Продукты',
          services: 'Услуги',
          projects: 'Проекты',
          certificates: 'Сертификаты',
          contact: 'Контакты',
        },
        languages: {
          ro: 'Румынский',
          en: 'Английский',
          ru: 'Русский',
        },
      },
    },
  },
  lng: 'ro',
  fallbackLng: 'ro',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

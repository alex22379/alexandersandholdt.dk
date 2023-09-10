export const languages = {
  da: 'Dansk',
  en: 'English',
};

export const defaultLang = 'da';

export const ui = {
  da: {
    'meta.title': 'Alexander Sandholdt',
    'site.mail': 'mail@alexandersandholdt.dk',
    'site.links': [
      {
        text: 'instagram/alexandersandholdt',
        url: 'https://www.instagram.com/alexandersandholdt/',
        icon: 'fa-brands fa-instagram',
      },
      {
        text: 'in/alexandersandholdt',
        url: 'https://www.linkedin.com/in/alexandersandholdt/',
        icon: 'fa-brands fa-linkedin-in',
      },
      {
        text: 'mail@alexandersandholdt.dk',
        url: 'mailto:mail@alexandersandholdt.dk',
        icon: 'fa-solid fa-envelope',
      },
    ],
  },
  en: {},
} as const;

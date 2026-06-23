export const languages = {
  es: "Español",
  en: "English",
} as const;

export const defaultLang = "es";

export type Lang = keyof typeof languages;

export const ui = {
  es: {
    "meta.title": "Camilo Varón | Desarrollador Frontend",
    "meta.description":
      "Portafolio de Camilo Varón, desarrollador frontend especializado en React, Next.js y Astro. Con base en Chile.",

    "nav.label": "Navegación principal",
    "nav.gotoHome": "Ir al inicio",
    "nav.inicio": "Inicio",
    "nav.habilidades": "Habilidades",
    "nav.proyectos": "Proyectos",
    "nav.contacto": "Contacto",
    "nav.langAria": "Switch to English",

    "photo.alt": "Retrato de Camilo Varón, desarrollador frontend",
    "hero.role": "Desarrollador Frontend · 📍 Chile",
    "hero.build": "Construyo",
    "hero.stores": "tiendas online",
    "hero.and": "y",
    "hero.apps": "aplicaciones web rápidas",
    "hero.with": "con",
    "hero.subtitle":
      "Transformo ideas en productos digitales cuidados, accesibles y listos para vender.",
    "hero.ctaPrimary": "Hablemos de tu proyecto",
    "hero.ctaSecondary": "Ver proyectos",
    "hero.linkedin": "Perfil de LinkedIn (abre en una pestaña nueva)",
    "hero.github": "Perfil de GitHub (abre en una pestaña nueva)",

    "about.title": "Sobre mí",
    "about.body":
      "Soy un desarrollador frontend colombiano radicado en Chile, apasionado por crear experiencias web que se vean bien y funcionen mejor. Trabajo de cerca con cada cliente para entender su negocio y entregar soluciones a medida, desde tiendas online hasta portafolios y aplicaciones a medida.",

    "skills.title": "Mis Habilidades",
    "skills.subtitle": "Tecnologías con las que he trabajado",

    "projects.title": "Mis Proyectos",
    "projects.subtitle": "Explora algunos de mis trabajos recientes",
    "projects.viewCode": "Ver código de {title} en GitHub (abre en una pestaña nueva)",
    "projects.viewLive": "Ver el proyecto {title} en vivo (abre en una pestaña nueva)",
    "projects.screenshot": "Captura del proyecto {title}",

    "contact.title": "Contacto",
    "contact.subtitle": "¿Interesado en trabajar juntos? ¡Contáctame!",

    "footer.rights": "Todos los derechos reservados.",
    "footer.builtWith": "Desarrollado con",
    "footer.builtWith2": "usando Astro y Tailwind CSS",
    "footer.heart": "amor",
    "footer.social": "{name} (abre en una pestaña nueva)",
  },
  en: {
    "meta.title": "Camilo Varón | Frontend Developer",
    "meta.description":
      "Portfolio of Camilo Varón, a frontend developer specialized in React, Next.js and Astro. Based in Chile.",

    "nav.label": "Main navigation",
    "nav.gotoHome": "Go to home",
    "nav.inicio": "Home",
    "nav.habilidades": "Skills",
    "nav.proyectos": "Projects",
    "nav.contacto": "Contact",
    "nav.langAria": "Cambiar a español",

    "photo.alt": "Portrait of Camilo Varón, frontend developer",
    "hero.role": "Frontend Developer · 📍 Chile",
    "hero.build": "I build",
    "hero.stores": "online stores",
    "hero.and": "and",
    "hero.apps": "fast web apps",
    "hero.with": "with",
    "hero.subtitle":
      "I turn ideas into polished, accessible digital products that are ready to sell.",
    "hero.ctaPrimary": "Let's talk about your project",
    "hero.ctaSecondary": "View projects",
    "hero.linkedin": "LinkedIn profile (opens in a new tab)",
    "hero.github": "GitHub profile (opens in a new tab)",

    "about.title": "About me",
    "about.body":
      "I'm a Colombian frontend developer based in Chile, passionate about building web experiences that look great and work even better. I work closely with each client to understand their business and deliver tailored solutions, from online stores to portfolios and custom web apps.",

    "skills.title": "My Skills",
    "skills.subtitle": "Technologies I've worked with",

    "projects.title": "My Projects",
    "projects.subtitle": "Explore some of my recent work",
    "projects.viewCode": "View {title} code on GitHub (opens in a new tab)",
    "projects.viewLive": "View the live {title} project (opens in a new tab)",
    "projects.screenshot": "Screenshot of the {title} project",

    "contact.title": "Contact",
    "contact.subtitle": "Interested in working together? Get in touch!",

    "footer.rights": "All rights reserved.",
    "footer.builtWith": "Built with",
    "footer.builtWith2": "using Astro and Tailwind CSS",
    "footer.heart": "love",
    "footer.social": "{name} (opens in a new tab)",
  },
} as const;

type TranslationKey = keyof (typeof ui)[typeof defaultLang];

export function getLang(locale: string | undefined): Lang {
  return locale && locale in ui ? (locale as Lang) : defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey, params?: Record<string, string>): string {
    let text: string = ui[lang][key] ?? ui[defaultLang][key];
    if (params) {
      for (const [k, v] of Object.entries(params)) {
        text = text.replace(`{${k}}`, v);
      }
    }
    return text;
  };
}

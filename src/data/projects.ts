import type { ImageMetadata } from "astro";
import type { Lang } from "../i18n/ui";

import vmstore from "../assets/projects/vmstore.png";
import rosapastell from "../assets/projects/rosapastell.webp";
import divastore from "../assets/projects/divastore.webp";
import stefyfood from "../assets/projects/stefyfood.webp";
import rigaproyectos from "../assets/projects/rigaproyectos.webp";

export interface Project {
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  image: ImageMetadata;
  url: string;
  github?: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: { es: "E-commerce RosaPastell", en: "E-commerce RosaPastell" },
    description: {
      es: "Tienda online para la venta de pijamas creada con WooCommerce.",
      en: "Online store for selling pajamas, built with WooCommerce.",
    },
    image: rosapastell,
    url: "https://www.rosapastell.com/",
    github: "#",
    tags: ["WordPress", "WooCommerce", "MySQL", "Digital Ocean"],
  },
  {
    title: { es: "E-commerce DivaStore", en: "E-commerce DivaStore" },
    description: {
      es: "Frontend de un e-commerce creado con Next.js, TailwindCSS y API REST.",
      en: "E-commerce frontend built with Next.js, TailwindCSS and a REST API.",
    },
    image: divastore,
    url: "https://www.divastore.cl/",
    github: "https://github.com/cavb1205/ecomerce-next",
    tags: ["React", "Next.js", "TailwindCSS", "API REST", "Vercel"],
  },
  {
    title: { es: "Menú Comida Online", en: "Online Food Menu" },
    description: {
      es: "Aplicación web en Astro para mostrar el menú de un restaurante.",
      en: "Web app in Astro to display a restaurant's menu.",
    },
    image: stefyfood,
    url: "https://stefyfood.vercel.app/",
    github: "https://github.com/cavb1205/carta-online",
    tags: ["Astro", "Vercel", "API REST"],
  },
  {
    title: { es: "Riga Proyectos", en: "Riga Proyectos" },
    description: {
      es: "Portafolio web en Astro para empresa de arquitectura y construcción en Bogotá, Colombia.",
      en: "Web portfolio in Astro for an architecture and construction company in Bogotá, Colombia.",
    },
    image: rigaproyectos,
    url: "https://www.rigaproyectos.com/",
    github: "https://github.com/cavb1205/rigaproyectos",
    tags: ["Astro", "Vercel", "API REST"],
  },
  {
    title: { es: "E-commerce VM Store", en: "E-commerce VM Store" },
    description: {
      es: "Tienda de ropa urbana y gorras premium en Ibagué, Colombia.",
      en: "Urban streetwear and premium caps store in Ibagué, Colombia.",
    },
    image: vmstore,
    url: "https://www.vmstore.co/",
    github: "#",
    tags: ["Astro", "Tailwind CSS", "Vercel"],
  },
];

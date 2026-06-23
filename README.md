# Portafolio · Camilo Varón

Portafolio personal de **Camilo Andrés Varón**, desarrollador frontend (React, Next.js, Astro). Sitio estático construido con [Astro](https://astro.build/) y [Tailwind CSS](https://tailwindcss.com/), desplegado en [Vercel](https://vercel.com/).

🔗 **En vivo:** https://www.camilovaron.dev

## 🛠️ Stack

- **Astro 4** — generación de sitio estático
- **Tailwind CSS 3** — estilos
- **Remix Icon** — iconografía
- **@vercel/analytics** — métricas
- **@astrojs/sitemap** — sitemap automático

## 🚀 Estructura

```text
public/            # Imágenes, favicons, robots.txt
src/
├── components/    # Nav, Header, Skills, ProjectCard, Footer
├── layouts/       # Layout.astro (head, SEO, JSON-LD)
└── pages/         # index.astro
```

Para añadir un proyecto, edita el array `projects` en `src/pages/index.astro`.

## 🧞 Comandos

| Comando            | Acción                                       |
| :----------------- | :------------------------------------------- |
| `npm install`      | Instala dependencias                         |
| `npm run dev`      | Servidor local en `localhost:4321`           |
| `npm run build`    | Compila el sitio a `./dist/`                 |
| `npm run preview`  | Previsualiza el build antes de desplegar     |

## 📬 Contacto

- Email: ing.camilo.varon@gmail.com
- LinkedIn: https://www.linkedin.com/in/camilovaron/
- GitHub: https://github.com/cavb1205

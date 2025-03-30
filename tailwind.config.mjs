/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Color principal - Un azul vibrante pero profesional
        primary: '#ffffff', // Color original
        
        // Color secundario - Un violeta suave para acentos
        secondary: '#A78BFA', // Un violeta que complementa bien
        
        // Color terciario - Un cyan para detalles
        accent: '#2DD4BF', // Un cyan-turquesa moderno
        
        // Colores de fondo
        dark: {
          DEFAULT: '#0F172A', // Fondo principal oscuro
          lighter: '#1E293B', // Para elementos elevados
          darker: '#020617', // Para contraste
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
} 
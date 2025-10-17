// ===== JUAN PINTA FOTOGRAFÍA - CONFIGURACIÓN ASTRO =====
// Desarrollado por: Antony Salcedo
// Cliente: Juan Diego Bolaños (Juan Pinta Fotografía)
// Descripción: Configuración del framework Astro para el sitio web

// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://tony-ssr.github.io',
  base: '/Juan-Pinta---Fotograf-a',
  devToolbar: {
    enabled: false
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
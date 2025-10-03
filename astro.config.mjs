import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://kenyo1924.github.io',
  base: '/mi-portafolio',
  integrations: [icon()], 
});

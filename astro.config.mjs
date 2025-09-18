// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	output: 'server',
  	vite: {
    	plugins: [tailwindcss()],
    	resolve: {
      		alias: {
        		"@components": "/src/components",
        		"@layouts": "/src/layouts",
        		"@pages": "/src/pages",
        		"@styles": "/src/styles"
      		},
    	},
  	},
  	i18n: {
    	locales: ["es", "en"],
    	defaultLocale: "es",
  	},
});

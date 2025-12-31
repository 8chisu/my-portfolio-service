import devtoolsJson from 'vite-plugin-devtools-json';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import svelteSVG from 'vite-plugin-svelte-svg';

export default defineConfig({ 
  plugins: [
    tailwindcss(), 
    sveltekit(), 
    devtoolsJson(),
    svelteSVG({
			svgoConfig: {}, // 最適化を有効にする
			requireSuffix: false // .svg の後に ?component を付けなくてOKにする
		})
  ] 
});
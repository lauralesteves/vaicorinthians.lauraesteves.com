import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import type { Plugin } from 'vite';

const siteData = {
  lang: 'pt-BR',
  title: 'Vai Corinthians!',
  url: 'https://vaicorinthians.lauraesteves.com',
  description:
    'O &quot;Vai Corinthians!&quot; é uma brincadeira de Laura Esteves para testar a lealdade dos seus amigos. Mais um site de extrema utilidade pública.',
};

function htmlPlugin(): Plugin {
  return {
    name: 'html-vars',
    transformIndexHtml(html) {
      return html
        .replace(/%LANG%/g, siteData.lang)
        .replace(/%TITLE%/g, siteData.title)
        .replace(/%URL%/g, siteData.url)
        .replace(/%DESCRIPTION%/g, siteData.description);
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), htmlPlugin()],
});

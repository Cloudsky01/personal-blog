import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://astro-nano-demo.vercel.app",
  integrations: [mdx(), sitemap(), tailwind()],
  i18n: {
    defaultLocale: "en", // Set your default language
    locales: ["en", "fr"], // Add all supported languages
    routing: {
      prefixDefaultLocale: false, // true if you want /en/blog, false for /blog for default
    }
  }
});

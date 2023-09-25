import { defineConfig } from "astro/config"
import compress from "astro-compress"
import sitemap from "@astrojs/sitemap"

export default defineConfig({
  site: "https://reupen.uk",
  integrations: [
    sitemap(),
    compress({
      CSS: false,
      HTML: false,
      Image: false,
      JavaScript: false,
      SVG: true,
    }),
  ],
  trailingSlash: "never",
})

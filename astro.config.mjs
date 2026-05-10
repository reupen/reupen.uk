import sitemap from "@astrojs/sitemap"
import compress from "astro-compress"
import icon from "astro-icon"
import { defineConfig } from "astro/config"

export default defineConfig({
  site: "https://reupen.uk",
  integrations: [
    icon(),
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

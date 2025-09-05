// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import catppuccin from "@catppuccin/starlight";
import rehypeMermaid from "rehype-mermaid";
import plantuml from "astro-plantuml";

// https://astro.build/config
export default defineConfig({
  integrations: [
    plantuml({
      addWrapperClasses: true,
    }),
    starlight({
      title: "API Documentation",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/WanderleeDev/Docs-template",
        },
      ],
      locales: {
        root: { label: "English", lang: "en" },
        es: { label: "Español", lang: "es" },
      },
      plugins: [catppuccin()],
      customCss: ["./src/styles/global.css"],
    }),
  ],
  markdown: {
    syntaxHighlight: {
      excludeLangs: ["mermaid"],
    },
    rehypePlugins: [
      [
        rehypeMermaid,
        { strategy: "img-svg", dark: true, colorScheme: "forest" },
      ],
    ],
  },
});

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
      titleDelimiter: "+",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      // sidebar: [
      //   {
      //     label: "Guides",
      //     items: [
      //       // Each item here is one entry in the navigation menu.
      //       { label: "Example Guide", slug: "guides/example" },
      //     ],
      //   },
      //   {
      //     label: "Reference",
      //     autogenerate: { directory: "reference" },
      //   },
      // ],
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

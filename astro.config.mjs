// @ts-check
import { defineConfig } from "astro/config";

import node from "@astrojs/node";
import netlify from "@astrojs/netlify";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

let adapter;

if (process.argv[3] == "--target=node") adapter = node({ mode: "standalone" });
else adapter = netlify();

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  output: "static",

  env: {
    schema: {
      // TAL: envField.string({ context: "server", access: "public" }),
    },
  },

  adapter,
});

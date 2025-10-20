// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField } from "astro/config";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

import node from "@astrojs/node";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://astro.build/config
export default defineConfig({
  output: "server",

  env: {
    schema: {
      SHOW_BUY_BUTTON: envField.boolean({
        default: true,
        context: "server",
        access: "public",
      }),
      SCORE_API_ENDPOINT: envField.string({
        context: "server",
        access: "public",
      }),
    },
  },

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
      },
    },
  },

  adapter: node({
    mode: "standalone",
  }),
});
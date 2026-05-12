import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://ethan-y-lin.github.io",
  vite: {
    plugins: [tailwindcss()],
  },
});
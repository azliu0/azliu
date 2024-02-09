import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ...mdsvexConfig.extensions],
  kit: {
    adapter: adapter(),
  },
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about pre processors
  preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],
  onwarn: (warning, handler) => {
    if (warning.code === "a11y-missing-content") return;
    handler(warning);
  },
};

export default config;

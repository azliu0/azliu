import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ...mdsvexConfig.extensions],

  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about pre processors
  preprocess: [preprocess(), mdsvex(mdsvexConfig)],

  kit: {
    adapter: adapter(),
    // Add this part to your existing config
    prerender: {
      // Define the handleHttpError function
      handleHttpError: ({ status, path, referrer, referenceType }) => {
        console.error(
          `Error when prerendering ${path}: ${status} (referred by ${referrer}, ${referenceType})`
        );
        // Implement custom logic here based on the error
      },
    },
  },
};

export default config;

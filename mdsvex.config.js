import { defineMDSveXConfig as defineConfig } from "mdsvex";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeKatex from "rehype-katex-svelte";

const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],

  remarkPlugins: [remarkMath, remarkGfm],
  rehypePlugins: [rehypeKatex, rehypeRaw],
});

export default config;

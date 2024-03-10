import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async ({ url }: any) => {
  return { pathname: url.pathname };
};

export const prerender = true;

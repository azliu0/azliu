import type { LayoutLoad } from './$types';

export const prerender = true;

export const load : LayoutLoad = async ({ url } : any) => {
  return { pathname: url.pathname };
};
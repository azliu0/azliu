import { error } from '@sveltejs/kit';

export async function load({ params } : any) {
  try {
    const log = await import(`../../../md/${params.slug}.md`);
    return {
      content: log.default,
      meta: log.metadata,
      slug: params.slug,
    }
  } catch (e) {
    throw error(404, 'Log not found')
  }
}
import { error } from '@sveltejs/kit';

export async function load({ params } : any) {
  try {
    const post = await import(`../../../logs/${params.slug}.md`);
    return {
      content: post.default,
      meta: post.metadata,
      slug: params.slug,
    }
  } catch (e) {
    throw error(404, 'Post not found')
  }
}
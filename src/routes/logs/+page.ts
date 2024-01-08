import type { Post } from '$lib/types';

export async function load({ fetch } : any) {
  const response = await fetch('api/posts');
  const posts: Array<Post>  = await response.json();
  return { posts };
}
import { json } from "@sveltejs/kit"
import type { Post } from "$lib/types"

const getDate = (date: string) : Date => {
  const [year, month, day] = date.split('-');
  return new Date(+year, +month - 1, +day);
}

const getPosts = async () => {
  let posts : Array<Post> = [];

  const paths = import.meta.glob('/src/logs/*.md', { eager: true });

  for (const path in paths) {
    const file = paths[path];
    const slug = path.split('/').at(-1)?.replace('.md', '');

    if (file && typeof file === 'object' && 'metadata' in file && slug) {
      const metadata = file.metadata as Omit<Post, 'slug'>;
      const post = { ...metadata, slug } satisfies Post;
      post.published && posts.push(post);
    }
  }

  // sort posts in descending order by date
  posts = posts.sort((a, b) => 
    getDate(b.date).getTime() - getDate(a.date).getTime()
  );

  return posts;
}

export const GET = async () => {
  const posts = await getPosts();

  return json(posts);
}
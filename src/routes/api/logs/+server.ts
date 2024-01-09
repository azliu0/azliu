import { json } from "@sveltejs/kit"
import type { Log } from "$lib/types"

const getDate = (date: string) : Date => {
  const [year, month, day] = date.split('-');
  return new Date(+year, +month - 1, +day);
}

const getLogs = async () => {
  let logs : Array<Log> = [];

  const paths = import.meta.glob('/src/md/*.md', { eager: true });

  for (const path in paths) {
    const file = paths[path];
    const slug = path.split('/').at(-1)?.replace('.md', '');

    if (file && typeof file === 'object' && 'metadata' in file && slug) {
      const metadata = file.metadata as Omit<Log, 'slug'>;
      const log = { ...metadata, slug } satisfies Log;
      log.published && logs.push(log);
    }
  }

  // sort posts in descending order by date
  logs = logs.sort((a, b) => 
    getDate(b.date).getTime() - getDate(a.date).getTime()
  );

  return logs;
}

export const GET = async () => {
  const logs = await getLogs();

  return json(logs);
}
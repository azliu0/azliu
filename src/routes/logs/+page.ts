import type { Log } from '$lib/types';

export async function load({ fetch } : any) {
  const response = await fetch('api/logs');
  const logs: Array<Log>  = await response.json();
  return { logs };
}
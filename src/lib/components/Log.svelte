<script lang="ts">
  import type { Log } from "$lib/types";
  export let log: Log;
  let screenWidth;
</script>

<svelte:window bind:innerWidth={screenWidth} />
<a
  href={`logs/${log.slug}`}
  class="w-full p-4 pl-4 hover:bg-slate-50 transition-all"
>
  <div class="flex justify-between">
    <div class="text-xl">
      <span class="text-brightred">#</span>
      {log.title}
    </div>
    <div class="text-slate-600 text-base">
      {screenWidth < 640 ? log.date.split("-")[0] : log.date}
    </div>
  </div>
  <div class="mt-[6px] text-base text-slate-700">{log.subtitle}</div>
</a>

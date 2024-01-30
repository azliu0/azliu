<script lang="ts">
  import type { Log } from "$lib/types";
  export let log: Log;
</script>

<div class="mb-8">
  <span class="text-xs text-slate-700">{log.date}</span>
  <span class="text-xl text-brightred">#</span>
  <span>
    <a
      href={`logs/${log.slug}`}
      class="text-xl hover:text-brightred transition-colors duration-75"
      >{log.title}</a
    >
  </span>
  <div class="mt-2 text-md text-slate-700">{log.subtitle}</div>
</div>

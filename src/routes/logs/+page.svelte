<script lang="ts">
  import Log from "$lib/components/Log.svelte";
  export let data;
</script>

<div class="flex flex-col gap-1 mt-4 ml-[-16px]">
  {#each data.logs as log}
    <Log {log} />
  {/each}
</div>

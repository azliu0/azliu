<script lang="ts">
  import Log from "$lib/components/Log.svelte";
  export let data;
</script>

{#each data.logs as log}
  <Log {log} />
{/each}

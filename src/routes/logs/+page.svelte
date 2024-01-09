<script lang="ts">
  export let data;
</script>

{#each data.logs as log}
  <div class="post">
    <span class="post-date">{log.date}</span>
    <span class="post-pound">#</span>
    <span class="post-title">
      <a href={`logs/${log.slug}`}>{log.title}</a>
    </span>
    <div class="post-subtitle">{log.subtitle}</div>
  </div>
{/each}

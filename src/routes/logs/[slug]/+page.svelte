<script lang="ts">
  export let data;
</script>

<div class="post-page-container">
  <div class="post-page-title-container">
    <div class="post-page-title">
      {#each data.meta.title.split(" ") as word}
        <span class="span-first-letter">{word[0]}</span>
        <span>{word.slice(1)} </span>
      {/each}
    </div>
    <div class="post-page-date">
      {data.meta.date} · {data.meta.time}
    </div>
  </div>
  <div class="post-page-content-container">
    <svelte:component this={data.content} />
  </div>
</div>

<!-- <hr />
<a href={`/rawlogs/${data.slug}.md`} class="markdown">markdown</a> -->

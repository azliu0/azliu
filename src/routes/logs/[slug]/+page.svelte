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

<hr />
<div class="footer">
  <a href={`/md/${data.slug}.md`} class="markdown hover:text-brightred"
    >Read Markdown</a
  >
</div>
<div class="footer">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <span
    role="button"
    tabindex="0"
    class="markdown hover:text-brightred"
    on:click={() => window.scroll({ top: 0, left: 0, behavior: "smooth" })}
  >
    Scroll to Top
  </span>
</div>
<div class="bot-div"></div>

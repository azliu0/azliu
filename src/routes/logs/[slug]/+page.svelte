<script lang="ts">
  export let data;
</script>

<div class="mb-4">
  <hr />
  <div class="text-3xl mt-6">{data.meta.title}</div>
  <div class="text-2xl text-gray-400">{data.meta.subtitle}</div>
  <div class="mt-2 text-sm italic text-gray-400 [word-spacing:-0.1rem]">
    {data.meta.date} · {data.meta.time}
  </div>
</div>
<div class="post-page-content-container text-base overflow-x-auto">
  <svelte:component this={data.content} />
</div>

<br />
<div class="mb-[-0.75rem]">
  <a href={`/md/${data.slug}.md`} class="markdown hover:text-brightred"
    >Read Markdown</a
  >
</div>
<div class="mb-[-0.5rem]">
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
<div class="mb-8"></div>

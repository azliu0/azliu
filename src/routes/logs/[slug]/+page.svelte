<script lang="ts">
  export let data;
</script>

<div>
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
<hr />

<div class="mb-8"></div>

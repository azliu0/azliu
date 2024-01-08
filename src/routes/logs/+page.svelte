<script lang="ts">
  export let data;
</script>

{#each data.posts as post}
  <div class="post">
    <span class="post-date">{post.date}</span>
    <span class="post-pound">#</span>
    <span class="post-title">
      <a href={`logs/${post.slug}`}>{post.title}</a>
    </span>
    <div class="post-subtitle">{post.subtitle}</div>
  </div>
{/each}

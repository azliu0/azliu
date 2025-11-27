<script lang="ts">
  import type { Project } from "$lib/types";
  import { onMount } from "svelte";

  export let project: Project;

  onMount(() => {
    if (window.location.hash) {
      const el = document.getElementById(window.location.hash.slice(1));
      if (el) el.scrollIntoView();
    }
  });
</script>

<a
  href={project.link}
  target={project.link.includes("azliu.cc") ? "" : "_blank"}
  class="w-full p-4 rounded-md z-[100] hover:bg-warmgreyhover transition-all"
>
  <div
    class="text-xl font-bold mb-4"
    id={project.title.toLowerCase().replace(/ /g, "-")}
  >
    <button
      class="text-green-400 hover:text-green-600 mr-1 transition-colors"
      on:click={(e) => {
        const url = new URL(window.location.href);
        url.hash = project.title.toLowerCase().replace(/ /g, "-");
        navigator.clipboard.writeText(url.toString());
        e.preventDefault();
      }}
      >#
    </button>{project.title}
    <span class="text-xs text-slate-700">{project.date}</span>
    <div class="flex mt-1 gap-2 flex-wrap">
      {#each project.techs as tech}
        <span
          class="text-xs text-slate-700 border-[1px] border-slate-200 [border-radius:3px] p-[3px] bg-slate-200"
          >{tech}</span
        >
      {/each}
    </div>
  </div>
  <div class="mt-6 text-base">{project.desc}</div>
  <div class="flex mt-6 gap-2">
    {#each project.links as link, idx}
      <a
        href={link.href}
        target={link.href.includes("azliu.cc") ? "" : "_blank"}
        class="text-sm text-green-500 hover:text-green-700">{link.title}</a
      >
      {#if idx < project.links.length - 1}
        <span class="text-sm mx-[-4px] text-green-500">·</span>
      {/if}
    {/each}
  </div>
</a>

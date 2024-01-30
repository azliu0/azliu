<script lang="ts">
  import type { Project } from "$lib/types";

  export let project: Project;
</script>

<a
  href={project.link}
  target="_blank"
  class="border-[1px] border-slate-300 w-full p-4 rounded-md opacity-70 transition-opacity hover:opacity-100 hover:bg-slate-50"
>
  <div class="text-xl font-bold mb-4">
    <span class="text-green-400"># </span>{project.title}
    <span class="text-xs text-slate-700">{project.date}</span>
    <div class="flex mt-1 gap-2 flex-wrap">
      {#each project.techs as tech}
        <span
          class="text-xs text-slate-700 border-[1px] rounded-md p-[3px] bg-slate-200"
          >{tech}</span
        >
      {/each}
    </div>
  </div>
  <div class="text-sm mt-6">{project.desc}</div>
  <div class="flex mt-6 gap-2">
    {#each project.links as link, idx}
      <a
        href={link.href}
        target="_blank"
        class="text-xs text-green-500 hover:text-green-700">{link.title}</a
      >
      {#if idx < project.links.length - 1}
        <span class="text-xs mx-[-4px] text-green-500">·</span>
      {/if}
    {/each}
  </div>
</a>

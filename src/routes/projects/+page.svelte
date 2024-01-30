<script lang="ts">
  import Project from "$lib/components/Project.svelte";
  import type { Project as ProjectType } from "$lib/types";
  const projects: Array<ProjectType> = [
    {
      title: "image-to-image-translation",
      desc: "stable diffusion implementation from scratch and web visualizer",
    },
    {
      title: "pigeon",
      desc: "rag-powered end-to-end email client",
    },
  ];
</script>

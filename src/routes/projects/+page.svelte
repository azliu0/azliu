<script lang="ts">
  import Project from "$lib/components/Project.svelte";
  import type { Project as ProjectType } from "$lib/types";

  const projects: Array<ProjectType> = [
    {
      title: "image-to-image-translation",
      desc: "stable diffusion implementation from scratch in PyTorch, including VAE, transformer, and diffusion modules. the website is a web visualizer for the model, which is deployed on a serverless inference server via modelbit",
      date: "Jan 2024",
      link: "https://image.azliu.cc",
      links: [
        { title: "website", href: "https://image.azliu.cc" },
        {
          title: "code",
          href: "https://github.com/azliu0/image-to-image-translation",
        },
      ],
      techs: ["pytorch", "react", "flask", "mantine", "modelbit"],
    },
    {
      title: "pigeon",
      desc: "rag-powered end-to-end email client, built to optimize help email workflows. uses redis vector database to embed documents and aws to receive/send emails. built with the hackMIT dev team",
      date: "Jan 2024",
      link: "https://pigeon.hackmit.org",
      links: [
        { title: "website", href: "https://pigeon.hackmit.org" },
        {
          title: "code",
          href: "https://github.com/techx/pigeon",
        },
      ],
      techs: ["redis", "react", "flask", "postgres", "mantine", "aws"],
    },
    {
      title: "diffusion-image-style",
      desc: "for 6.790 [6.867] final project, I explored style classification capabilities in deep cnns and diffusion classifiers. analyzed findings with linear probes and visualized with PCA",
      date: "Dec 2023",
      link: "https://azliu.cc/assets/pdf/6_790_final_paper.pdf",
      links: [
        {
          title: "paper",
          href: "https://azliu.cc/assets/pdf/6_790_final_paper.pdf",
        },
        {
          title: "code",
          href: "https://github.com/azliu0/diffusion-image-style",
        },
      ],
      techs: ["pytorch"],
    },
    {
      title: "mazed",
      desc: "live multiplayer maze tag game integrated with a learning interface including user/teacher views. top 6 in web lab 2023",
      date: "Jan 2023",
      link: "https://github.com/azliu0/mazed",
      links: [
        {
          title: "code",
          href: "https://github.com/azliu0/mazed",
        },
        { title: "winners", href: "https://weblab.mit.edu/winners/" },
      ],
      techs: ["react", "mongodb", "node", "express", "tailwind"],
    },
    {
      title: "processor",
      desc: "for 6.191 [6.004] design project, I optimized a processor by implementing heuristics such as data prefetching, branch target buffer, simd instructions, kogge-stone addition, pipelined CLA multiplication, and more. achieved top 5 performance in the class out of ~200 students",
      date: "May 2023",
      link: "",
      links: [],
      techs: ["minispec"],
    },
    {
      title: "stellar spectra analysis @ MIT Kavli Institute",
      desc: "devised a Monte Carlo pipeline for extracting radial velocity and stellar temperature data given raw spectra of M-dwarfs. these stars were being studied specifically for exoplanet habitability, and this pipeline was used in the linked paper to analyze a newly discovered star-exoplanet system!",
      date: "Dec 2022",
      link: "https://arxiv.org/abs/2307.05368",
      links: [{ title: "paper", href: "https://arxiv.org/abs/2307.05368" }],
      techs: ["pandas", "jupyter"],
    },
    {
      title: "AmarBot",
      desc: "for 6.106 [6.172] final project, my team (4 members) optimized a bot in playing leiserchess, a variant of chess, using heuristics such as young-siblings wait, bitboards, and caching optimizations. achieved top 5 performance in the class out of 35 teams",
      date: "Dec 2023",
      link: "https://azliu.cc/assets/pdf/6_106_project_4_final_writeup.pdf",
      links: [
        {
          title: "writeup",
          href: "https://azliu.cc/assets/pdf/6_106_project_4_final_writeup.pdf",
        },
      ],
      techs: ["C/C++", "cilk"],
    },
    {
      title: "optimizing ismorphic subgraph counting @ MIT CSAIL",
      desc: "devised and implemented new ways to count subgraph isomorphisms in large network graphs, e.g., triangles in Facebook. specifically focused on optimizing matrix multiplication for small subgraphs (<=K4)",
      date: "June 2023",
      link: "",
      links: [],
      techs: ["C/C++", "cilk"],
    },
    {
      title: "algebraic graph theory",
      desc: "studied open problems in algebraic graph theory, specifically focusing on the behavior of the DP-color function and the list-color function (both related to chromatic polynomials) on specific families of graphs. relevant paper results linked",
      date: "May 2022",
      link: "https://arxiv.org/abs/2207.04831",
      links: [
        {
          title: "paper 1",
          href: "https://arxiv.org/abs/2207.04831",
        },
        {
          title: "paper 2",
          href: "https://arxiv.org/abs/2012.12897",
        },
      ],
      techs: ["algebra", "graphs"],
    },
  ];

  projects.sort((a, b) => {
    const dateA = new Date(
      a.date.replace(/(\w+) (\d{4})/, "$1 01, $2")
    ).getTime();
    const dateB = new Date(
      b.date.replace(/(\w+) (\d{4})/, "$1 01, $2")
    ).getTime();

    return dateB - dateA;
  });
</script>

<div class="flex flex-col gap-6 mt-4">
  <div>assorted projects in software / research / etc (:</div>
  {#each projects as project}
    <Project {project} />
  {/each}
</div>

<div class="mb-[7.5rem]" />

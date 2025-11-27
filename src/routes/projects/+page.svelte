<script lang="ts">
  import Project from "$lib/components/Project.svelte";
  import type { Project as ProjectType } from "$lib/types";

  const projects: Array<ProjectType> = [
    {
      title: "rust compiler",
      desc: "for 6.110 [6.033] final project, I built a compiler for Decaf, a C-style toy programming language, built in Rust. includes Chaitin-Briggs register allocation, static single-assignment IR, global copy propagation, dead code elimination, common subexpression elimination, constant folding, algebra optimizations, loop hoisting, loop strength reduction, and more.",
      date: "May 2025",
      link: "",
      links: [],
      techs: ["rust", "compiler design", "optimization"],
    },
    {
      title: "plume",
      desc: "HackMIT's judging and application platform. with the HackMIT dev team, I helped rewrite the application from scratch using more modern frameworks, better database design, and new functionality.",
      date: "Sep 2024",
      link: "https://plume.hackmit.org",
      links: [{ title: "website", href: "https://plume.hackmit.org" }],
      techs: ["react", "flask", "postgres", "aws"],
    },
    {
      title: "oh-hell scorekeeper",
      desc: "a scorekeeper for the card game Oh Hell",
      date: "Aug 2024",
      link: "https://oh.azliu.cc",
      links: [{ title: "website", href: "https://oh-hell.azliu.cc" }],
      techs: ["claude"],
    },
    {
      title: "twister",
      desc: "for the HackMIT puzzle challenge 2024, I built a canary-based binary exploit based on the mersenne twister prng",
      date: "July 2024",
      link: "https://twister.hackmit.org",
      links: [
        { title: "website", href: "https://twister.hackmit.org" },
        {
          title: "code",
          href: "https://github.com/azliu0/twister",
        },
      ],
      techs: ["prng", "binexp"],
    },
    {
      title: "zyzx",
      desc: "natural language terminal shell built in Zig and using fine-tuned Mixtral 8x7b. in crude testing, our custom model outperformed GPT3.5 in natural language to bash translation. built with @tam-albert and @richen for treehacks 2024",
      date: "Feb 2024",
      link: "https://zyzx.azliu.cc",
      links: [
        { title: "website", href: "https://zyzx.azliu.cc" },
        {
          title: "code",
          href: "https://github.com/tam-albert/zyzx",
        },
      ],
      techs: ["zig", "pytorch"],
    },
    {
      title: "image-to-image-translation",
      desc: "stable diffusion implementation in PyTorch, including VAE, transformer, and diffusion modules. the website is a web visualizer for the model, deployed on serverless infrastructure via Modal Labs",
      date: "Jan 2024",
      link: "https://image.azliu.cc",
      links: [
        { title: "website", href: "https://image.azliu.cc" },
        {
          title: "code",
          href: "https://github.com/azliu0/image-to-image-translation",
        },
      ],
      techs: ["pytorch", "modal", "flask", "mantine"],
    },
    {
      title: "pigeon",
      desc: "rag-powered end-to-end email client, built to optimize help email workflows. uses redis vector database to embed documents and aws to receive/send emails. built with the HackMIT dev team",
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
      desc: "live multiplayer maze tag game",
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
      desc: "for 6.191 [6.004] design project, I optimized a processor by implementing heuristics such as data prefetching, branch target buffer, simd instructions, kogge-stone addition, pipelined CLA multiplication, and more",
      date: "May 2023",
      link: "",
      links: [],
      techs: ["minispec"],
    },
    {
      title: "stellar spectra analysis @ MIT Kavli Institute",
      desc: "devised a Monte Carlo pipeline for extracting radial velocity and stellar temperature data given raw spectra of M-dwarfs. these stars were being studied specifically for exoplanet habitability, and this pipeline was used in the linked paper to analyze a newly discovered star-exoplanet system",
      date: "Dec 2022",
      link: "https://arxiv.org/abs/2307.05368",
      links: [{ title: "paper", href: "https://arxiv.org/abs/2307.05368" }],
      techs: ["pandas", "jupyter"],
    },
    {
      title: "AmarBot",
      desc: "for 6.106 [6.172] final project, my team (4 members) optimized a bot in playing leiserchess, a variant of chess, using heuristics such as young-siblings wait, bitboards, and caching optimizations",
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
      title: "optimizing subgraph counting @ MIT CSAIL",
      desc: "devised and implemented new ways to count subgraph isomorphisms in large network graphs, e.g., triangles in Facebook. specifically focused on optimizing matrix multiplication for small subgraphs (<=K4)",
      date: "Jun 2023",
      link: "",
      links: [],
      techs: ["C/C++", "cilk"],
    },
    {
      title: "upper bounds on the list color function",
      desc: "made progress on an open problem in algebraic graph theory related to the long-run behavior of the list color function, a function that generalizes the classic chromatic polynomial",
      date: "Nov 2022",
      link: "https://arxiv.org/pdf/2207.04831.pdf",
      links: [
        {
          title: "paper",
          href: "https://arxiv.org/pdf/2207.04831.pdf",
        },
      ],
      techs: ["algebra", "graph theory"],
    },
    {
      title: "polynomial reps of the DP color function",
      desc: "proved that the long-run behavior of the DP color function is polynomial for generalized theta graphs, a function that generalizes list coloring, which generalizes the classical graph coloring problem",
      date: "Sep 2020",
      link: "https://arxiv.org/pdf/2012.12897.pdf",
      links: [
        {
          title: "paper",
          href: "https://arxiv.org/pdf/2012.12897.pdf",
        },
      ],
      techs: ["algebra", "graph theory"],
    },
    {
      title: "_andrew.sty",
      desc: "personal latex style file for note taking and homework",
      date: "Oct 2022",
      link: "https://github.com/azliu0/_andrew.sty",
      links: [
        {
          title: "code",
          href: "https://github.com/azliu0/_andrew.sty",
        },
        {
          title: "demo",
          href: "https://azliu.cc/coursework",
        },
      ],
      techs: ["latex"],
    },
  ];

  // sort projects by descending date
  projects.sort((a, b) => {
    const dateA = new Date(
      a.date.replace(/(\w+) (\d{4})/, "$1 01, $2"),
    ).getTime();
    const dateB = new Date(
      b.date.replace(/(\w+) (\d{4})/, "$1 01, $2"),
    ).getTime();

    return dateB - dateA;
  });
</script>

<div class="flex flex-col gap-4 mt-4 ml-[-16px]">
  {#each projects as project}
    <Project {project} />
  {/each}
</div>

<div class="mb-[7.5rem]" />

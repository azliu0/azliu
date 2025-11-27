<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import type { Link } from "$lib/types";
  const links: Array<Link> = [
    {
      href: "mailto:azliu@mit.edu",
      src: "/assets/images/logos/mail.svg",
      alt: "mail",
    },
    {
      href: "https://github.com/azliu0",
      src: "/assets/images/logos/githublight.svg",
      alt: "github",
    },
    {
      href: "https://x.com/azliu0",
      src: "/assets/images/logos/x.svg",
      alt: "x",
    },
    {
      href: "https://www.linkedin.com/in/andrew-z-liu",
      src: "/assets/images/logos/linkedinlight.svg",
      alt: "linkedin",
    },
  ];
</script>

<div class="space-y-6">
  <p>
    Hello! I'm Andrew, a senior at MIT studying CS and Math. I'm interested in
    the intersection of machine learning and systems.
  </p>
  <p>
    In the past, I've worked on fast multimodal inference at
    <a
      class="font-medium text-slate-600 hover:text-black transition-colors no-underline"
      href="https://www.nvidia.com/en-us/"
      target="_blank"
      rel="noopener noreferrer">NVIDIA</a
    >, quantitative research at
    <a
      class="font-medium text-slate-600 hover:text-black transition-colors no-underline"
      href="https://www.citadelsecurities.com/"
      target="_blank"
      rel="noopener noreferrer">Citadel Securities</a
    >, inference and architectures at
    <a
      class="font-medium text-slate-600 hover:text-black transition-colors no-underline"
      href="https://www.liquid.ai/"
      target="_blank"
      rel="noopener noreferrer">Liquid AI</a
    >, containerization infra at
    <a
      class="font-medium text-slate-600 hover:text-black transition-colors no-underline"
      href="https://modal.com/"
      target="_blank"
      rel="noopener noreferrer">Modal</a
    >, and startups at
    <a
      class="font-medium text-slate-600 hover:text-black transition-colors no-underline"
      href="https://www.ycombinator.com/"
      target="_blank"
      rel="noopener noreferrer">YCombinator</a
    >.
  </p>
  <p>
    During my undergrad, I've also enjoyed organizing
    <a
      class="font-medium text-slate-600 hover:text-black transition-colors no-underline"
      href="https://hackmit.org/"
      target="_blank"
      rel="noopener noreferrer">HackMIT</a
    >, a student-run hackathon at MIT.
  </p>
</div>

<div class="flex gap-[6px] mt-10">
  {#each links as link}
    <a
      href={link.href}
      target="_blank"
      class="opacity-80 hover:opacity-100 transition-opacity"
    >
      <Button src={link.src} alt={link.alt} />
    </a>
  {/each}
</div>

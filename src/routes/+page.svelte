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
      href: "https://www.linkedin.com/in/andrew-z-liu",
      src: "/assets/images/logos/linkedinlight.svg",
      alt: "linkedin",
    },
  ];
</script>

<div class="space-y-6">
  <p>Hello! I'm Andrew, an undergrad at MIT studying CS and Math.</p>
</div>

<div class="flex gap-[6px] mt-10">
  {#each links as link}
    <a href={link.href} target="_blank">
      <Button src={link.src} alt={link.alt} />
    </a>
  {/each}
</div>

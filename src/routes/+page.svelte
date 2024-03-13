<!-- import buton component -->
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
  <p>
    Hello! I'm Andrew, an undergraduate studying Computer Science (course 6) and
    Mathematics (course 18) at MIT.
  </p>

  <!-- <p>
    I like machine learning, particularly generative models like diffusion
    models and large language models. I am specifically interested in
    researching and better understanding intelligence, and am currently working
    at the Improbable AI Lab at MIT supervised by <a
      class="text-blue-700 hover:bg-blue-100"
      href="https://people.csail.mit.edu/pulkitag/"
      target="_blank"
      rel="noreferrer">Pulkit Agrawal</a
    >.
  </p>

  <p>
    I am also interested in building software and user interfaces. I'm co-dev
    head at
    <a
      class="text-blue-700 hover:bg-blue-100"
      href="https://hackmit.org/"
      target="_blank"
      rel="noreferrer">HackMIT</a
    >
    and incoming co-president at MIT
    <a
      class="text-blue-700 hover:bg-blue-100"
      href="https://weblab.mit.edu/"
      target="_blank"
      rel="noreferrer">web.lab</a
    >.
  </p>

  <p>
    In the past, I've had some experience researching performance engineering at
    <a
      class="text-blue-700 hover:bg-blue-100"
      href="http://csg.csail.mit.edu/"
      target="_blank"
      rel="noreferrer">CSAIL</a
    >, astrophysics at
    <a
      class="text-blue-700 hover:bg-blue-100"
      href="https://space.mit.edu/"
      target="_blank"
      rel="noreferrer">MIT Kavli</a
    >, and
    <a
      class="text-blue-700 hover:bg-blue-100"
      href="https://arxiv.org/pdf/2207.04831.pdf"
      target="_blank"
      rel="noreferrer">combinatorics</a
    >. I've also competed in competitions like the
    <a
      class="text-blue-700 hover:bg-blue-100"
      href="https://usaaao.org/2022/08/23/15th-ioaa-has-ended/"
      target="_blank"
      rel="noreferrer">IOAA</a
    >, worked on trading systems at
    <a
      class="text-blue-700 hover:bg-blue-100"
      href="https://www.belvederetrading.com/"
      target="_blank"
      rel="noreferrer">Belvedere</a
    >, and am incoming quant research at
    <a
      class="text-blue-700 hover:bg-blue-100"
      href="https://www.citadelsecurities.com/"
      target="_blank"
      rel="noreferrer">CitSec</a
    >.
  </p>

  <p>
    In my free time, I enjoy <a
      class="text-blue-700 hover:bg-blue-100"
      href="/coursework">classes</a
    >, working on
    <a class="text-blue-700 hover:bg-blue-100" href="/projects">projects</a>,
    sometimes
    <a class="text-blue-700 hover:bg-blue-100" href="/logs">writing</a>, and
    <a class="text-blue-700 hover:bg-blue-100" href="/cubing">cubing</a>.
  </p> -->
</div>

<div class="flex gap-[6px] mt-10">
  {#each links as link}
    <a href={link.href} target="_blank">
      <Button src={link.src} alt={link.alt} />
    </a>
  {/each}
</div>

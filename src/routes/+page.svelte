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

<p>
  Hello! I'm Andrew, an undergraduate studying Computer Science and Mathematics
  at MIT, graduating in May 2025 or later.
</p>

<p>
  I like machine learning, particularly generative models like diffusion models
  and large language models. I am specifically interested in researching and
  better understanding intelligence, and am currently working at the Improbable
  AI Lab at MIT supervised by <a
    class="underline"
    href="https://people.csail.mit.edu/pulkitag/"
    target="_blank"
    rel="noreferrer">Pulkit Agrawal</a
  >.
</p>

<p>
  I am also interested in building software and user interfaces. I'm a dev head
  at
  <a
    class="underline"
    href="https://hackmit.org/"
    target="_blank"
    rel="noreferrer">HackMIT</a
  >
  and incoming co-president at MIT
  <a
    class="underline"
    href="https://weblab.mit.edu/"
    target="_blank"
    rel="noreferrer">web.lab</a
  >.
</p>

<p>
  I have many other scattered interests. I have past research experience in
  performance engineering at
  <a
    class="underline"
    href="http://csg.csail.mit.edu/"
    target="_blank"
    rel="noreferrer">CSAIL</a
  >, astrophysics at
  <a
    class="underline"
    href="https://space.mit.edu/"
    target="_blank"
    rel="noreferrer">MIT Kavli</a
  >, and
  <a
    class="underline"
    href="https://arxiv.org/pdf/2207.04831.pdf"
    target="_blank"
    rel="noreferrer">combinatorics</a
  >. I've also competed in competitions like the
  <a
    class="underline"
    href="https://usaaao.org/2022/08/23/15th-ioaa-has-ended/"
    target="_blank"
    rel="noreferrer">IOAA</a
  >, worked on trading systems at
  <a
    class="underline"
    href="https://www.belvederetrading.com/"
    target="_blank"
    rel="noreferrer">Belvedere</a
  >, and am incoming quant research at
  <a
    class="underline"
    href="https://www.citadelsecurities.com/"
    target="_blank"
    rel="noreferrer">CitSec</a
  >.
</p>

<p>
  In my free time, I enjoy my <a class="underline" href="/coursework">classes</a
  >, working on <a class="underline" href="/projects">projects</a>, and
  sometimes <a class="underline" href="/logs">writing</a>. Some of my
  non-academic interests include poker, playing the violin, and
  <a class="underline" href="/cubing">cubing</a>.
</p>

<br />
<div class="flex gap-[6px]">
  {#each links as link}
    <a href={link.href} target="_blank">
      <Button src={link.src} alt={link.alt} />
    </a>
  {/each}
</div>

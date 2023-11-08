<script>
  import "../app.css";

  import { fly } from "svelte/transition";

  import Header from "$lib/components/Header.svelte";

  export let data;
</script>

<svelte:head>
  <!-- Google tag (gtag.js) - Google Analytics -->
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-XN7F4CTMD0"
  ></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-XN7F4CTMD0");
  </script>
</svelte:head>

<Header />

{#key data.pathname}
  <main
    in:fly={{ x: -10, duration: 200, delay: 200 }}
    out:fly={{ y: 5, duration: 200 }}
  >
    <slot />
  </main>
{/key}

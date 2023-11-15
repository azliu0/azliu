<script lang="ts">
  import "../app.css";

  import { fly } from "svelte/transition";

  import Header from "$lib/components/Header.svelte";
  import Seo from "$lib/components/Seo.svelte";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  export let data;
  let validRoutes: (string | null)[] = ["/", "/coursework", "/logs"];

  onMount(() => {
    // check that route exists
    let path: string | null = $page.data?.pathname;
    if (!validRoutes.includes(path)) {
      if (path === "/coursework.html") return goto("/coursework");
      else if (path === "/logs.html") return goto("/logs");
      else return goto("/");
    }
  });
</script>

<Seo />

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

<script lang="ts">
  import "../app.css";

  import { fly } from "svelte/transition";

  import Header from "$lib/components/Header.svelte";
  import Seo from "$lib/components/Seo.svelte";

  export let data;
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
    <div class="flex justify-center">
      <div class="w-[732px] p-0 max-md:mt-[-4rem]">
        <div class="w-full px-6 text-lg">
          <slot />
        </div>
      </div>
    </div>
  </main>
{/key}

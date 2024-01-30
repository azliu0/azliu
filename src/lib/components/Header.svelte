<script lang="ts">
  import { page } from "$app/stores";

  const pages = [
    { name: "home", href: "/" },
    { name: "coursework", href: "/coursework" },
    { name: "logs", href: "/logs" },
  ];

  let pageTitle: string | null = null;
  $: {
    const link = pages.find(
      ({ href }) =>
        href === $page.url.pathname ||
        (href.length > 1 && $page.url.pathname.startsWith(href))
    );
    if (link) {
      pageTitle = link.name;
    } else {
      pageTitle = null;
    }
  }
</script>

<header class="header-wrapper">
  <div class="content">
    <div class="header">
      <div>
        {#if pageTitle === "coursework"}
          <div class="text-2xl">
            <a href="/coursework">Coursework</a>
          </div>
        {:else if pageTitle === "logs"}
          <div class="text-2xl"><a href="/logs">Logs</a></div>
        {:else}
          <div class="text-4xl"><a href="/">Andrew Liu.</a></div>
        {/if}
      </div>
      <div>
        <div class="text-lg page-title">
          {#each pages as page (page)}
            {#if page.name === pageTitle}
              <a class="headbtn selected" href={page.href}>{page.name}</a>
            {:else}
              <a class="headbtn" href={page.href}>{page.name}</a>
            {/if}
          {/each}
        </div>
      </div>
    </div>
  </div>
</header>

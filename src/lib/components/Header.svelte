<script lang="ts">
  import { page } from "$app/stores";

  const pages = [
    { name: "home", href: "/" },
    { name: "coursework", href: "/coursework" },
    { name: "projects", href: "/projects" },
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

<header class="flex justify-center">
  <div class="w-[732px] px-6 max-md:mt-[-4rem] max-md:mb-[4rem]">
    <div
      class="mt-[7.5rem] mb-[2rem] flex justify-between max-md:flex-col-reverse"
    >
      <div>
        {#if pageTitle === "projects"}
          <div class="text-3xl">
            <a href="/projects">Projects</a>
          </div>
        {:else if pageTitle === "coursework"}
          <div class="text-3xl">
            <a href="/coursework">Coursework</a>
          </div>
        {:else if pageTitle === "logs"}
          <div class="text-3xl"><a href="/logs">Logs</a></div>
        {:else}
          <div class="text-4xl">
            <a href="/"
              >Andrew Liu<span class="text-gray-500 text-[2.75rem] pl-[0.2rem]"
                >.</span
              ></a
            >
          </div>
        {/if}
      </div>
      <div>
        <div class="text-lg flex justify-end max-md:mb-[2.75rem]">
          {#each pages as page (page)}
            {#if page.name === pageTitle}
              <a
                class="my-0 mx-[0.2rem] py-[0.2rem] px-[0.5rem] text-center text-lg text-black hover:cursor-pointer"
                href={page.href}>{page.name}</a
              >
            {:else}
              <a
                class="my-0 mx-[0.2rem] py-[0.2rem] px-[0.5rem] text-center text-lg text-gray-500 hover:cursor-pointer hover:text-black"
                href={page.href}>{page.name}</a
              >
            {/if}
          {/each}
        </div>
      </div>
    </div>
  </div>
</header>

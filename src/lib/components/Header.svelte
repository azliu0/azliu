<script lang="ts">
  import { page } from "$app/stores";

  const pages = [
    { name: "coursework", href: "/coursework" },
    { name: "projects", href: "/projects" },
    { name: "logs", href: "/logs" },
  ];

  const capitalize = (str: string): string => {
    if (!str) {
      return "";
    }
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  let pageTitle: string | null = null;
  $: {
    const link = pages.find(
      ({ href }) =>
        href === $page.url.pathname ||
        (href.length > 1 && $page.url.pathname.startsWith(href)),
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
        <div class="text-4xl">
          <a href="/">Andrew Liu</a>
        </div>
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

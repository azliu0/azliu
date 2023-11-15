<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  onMount(() => {
    let path: string | null = $page.params.path;
    if (path === "coursework.html") return goto("/coursework");
    else if (path === "logs.html") return goto("/logs");
    else return goto("/");
  });
</script>

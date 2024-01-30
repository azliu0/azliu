<script lang="ts">
  export let src: string;
  export let alt: string;
</script>

<button
  class="flex justify-center items-center border-solid border-[1px] border-slate-300 rounded-md h-[40px] w-[40px] opacity-50 transition-opacity hover:opacity-100 hover:bg-slate-50"
  ><img {src} width="20px" height="20px" {alt} /></button
>

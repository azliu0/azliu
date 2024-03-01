<script lang="ts">
  export let title = "Andrew Liu";
  export let description =
    "Hello! I'm Andrew, an undergraduate studying Computer Science (course 6) and Mathematics (course 18) at MIT.";
  export let url = "https://www.azliu.cc";
  export let imageUrl = "https://www.azliu.cc/assets/favicons/favicon.ico";
  export let siteName = "Andrew Liu";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content={url} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={imageUrl} />
  <meta property="og:site_name" content={siteName} />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content={url} />
  <meta property="twitter:title" content={title} />
  <meta property="twitter:description" content={description} />
  <meta property="twitter:image" content={imageUrl} />
  <meta property="twitter:creator" content="@azliu0" />

  <!-- Canonical URL -->
  <link rel="canonical" href={url} />

  <!-- Viewport for Responsive Design -->
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <!-- Specifying Page Language -->
  <meta http-equiv="Content-Language" content="en" />

  <!-- Schema.org for Google -->
  <script type="application/ld+json">
    {
      "@context": "http://schema.org",
      "@type": "Person",
      "name": "Andrew Liu",
      "url": "https://www.azliu.cc",
      "image": "https://www.azliu.cc/assets/favicons/favicon.ico",
      "alumniOf": "MIT"
    }
  </script>
</svelte:head>

<script lang="ts">
  import Giscus from "@giscus/svelte";
  import type { PageServerData } from "./$types";
  export let data: PageServerData;
  let keywords = "";

  if (data?.labels?.nodes == null) {
    keywords = data?.title;
  }
  console.log(data.labels?.nodes.length);
  data?.labels?.nodes.forEach((e: any, index: number) => {
    if (index == data.labels?.nodes.length - 1) {
      keywords += e.name.toLowerCase();
    } else {
      keywords += e.name.toLowerCase() + ",";
    }
  });
  const metin: string = data?.body;
  const regex: RegExp = /!\[og_image\]\((.*?)\)/g;
  let og_image = regex.exec(metin)
</script>

<svelte:head>
  <title>Uğur Korkmaz - {data.title}</title>
  <meta name="keywords" content="{keywords}" />
  <meta property="og:title" content="{data.title}" />
  <meta property="og:description" content="{data?.title} - {keywords}" />

  {#if og_image}
  <meta property="og:image" content={og_image[1]} />
  {/if}
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.2.0/github-markdown.min.css"
    integrity="sha512-Ya9H+OPj8NgcQk34nCrbehaA0atbzGdZCI2uCbqVRELgnlrh8vQ2INMnkadVMSniC54HChLIh5htabVuKJww8g=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
</svelte:head>
<div class="markdown-body  p-4 md:p-8 rounded-lg">
  {@html data.bodyHTML}
  <hr />
  <Giscus
    id="comments"
    category="TR"
    repo="ugurkorkmaz/blog"
    repoID="R_kgDOJDIiKA"
    categoryId="DIC_kwDOF1L2fDIC_kwDOJDIiKM4CUmpxM4B-hVS"
    mapping="specific"
    term={data?.title}
    reactionsEnabled="1"
    emitMetadata="0"
    inputPosition="top"
    theme="preferred_color_scheme"
    lang="tr"
  />
</div>

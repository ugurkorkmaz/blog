<script lang="ts">
  import type { PageServerData } from "./$types";
  export let data: PageServerData;
  console.log(data);
  let keywords = "";

  if (data?.labels?.nodes == null) {
    keywords = data?.title;
  }
  console.log(data.labels?.nodes.length)
  data?.labels?.nodes.forEach((e: any, index: number) => {
    if (index == (data.labels?.nodes.length - 1)) {
      keywords += e.name.toLowerCase();
    } else {
      keywords += e.name.toLowerCase() + ",";
    }
  });
</script>

<svelte:head>
  <title>Uğur Korkmaz - {data.title}</title>
  <meta name="keywords" content={keywords} />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.2.0/github-markdown.min.css"
    integrity="sha512-Ya9H+OPj8NgcQk34nCrbehaA0atbzGdZCI2uCbqVRELgnlrh8vQ2INMnkadVMSniC54HChLIh5htabVuKJww8g=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
</svelte:head>
<div class="markdown-body  p-4 md:p-8">
  {@html data.bodyHTML}
</div>

<style>
</style>

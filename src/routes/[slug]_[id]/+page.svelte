<script lang="ts">
  import type { PageServerData } from "./$types";
  export let data: PageServerData;
</script>

<svelte:head>
  <title>Uğur Korkmaz</title>
  <meta name="description" content="{data.title}" />
  <meta
    name="keywords"
    content="golang,php,javascript,typescript,graphql,symfony,gqlgen,entgo,docker,tailwindcss,html,css,js"
  />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.2.0/github-markdown.min.css" integrity="sha512-Ya9H+OPj8NgcQk34nCrbehaA0atbzGdZCI2uCbqVRELgnlrh8vQ2INMnkadVMSniC54HChLIh5htabVuKJww8g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</svelte:head>
<div class="markdown-body p-8">
  {@html data.bodyHTML}
</div>

<style>

</style>

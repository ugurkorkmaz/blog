<script lang="ts">
    import Blog from "$lib/component/Blog.svelte";
    import slug from "slug";
    import type { PageServerData } from "./$types";
    export let data: PageServerData;
</script>
<svelte:head>
    <title>Uğur Korkmaz</title>
    <meta name="description" content="Uğur Korkmaz's personal website" />
    <meta name="keywords" content="golang,php,javascript,typescript,graphql,symfony,gqlgen,entgo,docker,tailwindcss,html,css,js" />
</svelte:head>
<div class="w-full grid md:grid-cols-2 grid-cols-1 gap-4">
    {#each data.posts as item }
        {#if item.node.category.slug != "unpublished"}
        <Blog 
            date={item.node.createdAt}  
            title={item.node.title} 
            post={item.node.bodyText}
            url="/{slug(item.node.title)}_{item.node.number}"
        />
        {/if}
    {/each}
</div>
<script lang="ts">
    import { enhance, type SubmitFunction } from "$app/forms";
    import Blog from "$lib/component/Blog.svelte";
    import Theme from "$lib/component/Theme.svelte";
    import slug from "slug";
    import type { PageServerData } from "./$types";

    

    const updateTheme: SubmitFunction = ({ data,form }) => {
        const theme = data.get("theme") as string;
        if (data.get("theme")) {
            document.documentElement.setAttribute('data-theme', theme)
        }
        
    }
    export let data: PageServerData;
</script>
<svelte:head>
    <title>Uğur Korkmaz</title>
    <meta name="description" content="Uğur Korkmaz's personal website" />
    <meta name="keywords" content="golang,php,javascript,typescript,graphql,symfony,gqlgen,entgo,docker,tailwindcss,html,css,js" />
</svelte:head>
<div class="w-full flex justify-center">
    <div class="w-full md:w-8/12 flex justify-between p-4">
        <h1 class="inline-flex font-semibold justify-center items-center text-xl">
            Uğur Korkmaz
        </h1>
        <div class="flex justify-between">
            <form action="?/theme" method="post" use:enhance|preventDefault={updateTheme}>
                <Theme active={data.theme} />
            </form>
        </div>
    </div>
</div>
<div class="w-full flex justify-center mt-1 p-1 md:p-4">
    <div class="w-full md:w-8/12 flex flex-col md:p-4">
        <p class="text-sm font-bold">
            Experienced Full Stack Software Developer with expertise in PHP, Symfony, Golang, Gqlgen, GraphQL, Docker,
            Tailwindcss, Svelte, and Sveltekit. Focus on using GraphQL for high-performance APIs and Docker for
            efficient application testing/deployment. Skilled in building fast and interactive web applications with
            Svelte/Sveltekit. Solutions-oriented approach prioritizes client needs. Emphasizes clean, readable code for
            streamlined team collaboration. Contact through LinkedIn.
        </p>
        <div class="mt-1 w-full flex justify-start mt-2">
            <a class="" href="mailto:job@ugurkorkmaz.net">
                <svg xmlns="http://www.w3.org/2000/svg" aria-label="Email" role="img" class="w-6 h-6"
                    viewBox="0 0 512 512">
                    <rect width="512" height="512" rx="15%" fill="teal" />
                    <rect width="356" height="256" x="78" y="128" fill="#fff" rx="8%" />
                    <path fill="none" stroke="teal" stroke-width="20"
                        d="M434 128L269 292c-7 8-19 8-26 0L78 128m0 256l129-128m227 128L305 256" />
                </svg>
            </a>
            <a class="ml-2" href="https://linkedin.com/in/korkmazugur" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" aria-label="LinkedIn" role="img" viewBox="0 0 512 512"
                    class="w-6 h-6" fill="#fff">
                    <rect width="512" height="512" rx="15%" fill="#0077b5" />
                    <circle cx="142" cy="138" r="37" />
                    <path stroke="#fff" stroke-width="66" d="M244 194v198M142 194v198" />
                    <path d="M276 282c0-20 13-40 36-40 24 0 33 18 33 45v105h66V279c0-61-32-89-76-89-34 0-51 19-59 32" />
                </svg>
            </a>
            <a class="ml-2" href="https://twitter.com/ugurkorkmaz" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" aria-label="Twitter" role="img" class="w-6 h-6"
                    viewBox="0 0 512 512">
                    <rect width="512" height="512" rx="15%" fill="#1da1f2" />
                    <path fill="#fff"
                        d="M437 152a72 72 0 01-40 12a72 72 0 0032-40a72 72 0 01-45 17a72 72 0 00-122 65a200 200 0 01-145-74a72 72 0 0022 94a72 72 0 01-32-7a72 72 0 0056 69a72 72 0 01-32 1a72 72 0 0067 50a200 200 0 01-105 29a200 200 0 00309-179a200 200 0 0035-37" />
                </svg>
            </a>
            <a class="ml-2" href="https://github.com/ugurkorkmaz" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" aria-label="GitHub" role="img" viewBox="0 0 512 512"
                    class="w-6 h-6">
                    <rect width="512" height="512" rx="15%" fill="#181717" />
                    <path fill="#fff"
                        d="M335 499c14 0 12 17 12 17H165s-2-17 12-17c13 0 16-6 16-12l-1-44c-71 16-86-34-86-34-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 39 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-67 0 0 21-7 70 26 42-12 86-12 128 0 49-33 70-26 70-26 14 35 6 61 3 67 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48l-1 70c0 6 3 12 16 12z" />
                </svg>
            </a>
        </div>
        <span class="w-full inline-flex font-semibold text-lg mt-4 mb-4">Recent Blog Posts</span>
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
    </div>
</div>
<script lang="ts">
  const wpm = 225;

  export let title: string;
  export let date: string;
  export let post: string;
  export let url: string;
  let articleReadTime = Math.ceil(post.trim().split(/\s+/).length / wpm);

  function truncate(words: string, maxlength: number) {
    return `${words.slice(0, maxlength)} …`;
  }
</script>

<div class="w-full h-auto flex flex-col p-3 shadow-lg rounded hover:bg-primary-focus hover:text-primary-content">
<a href={url}>
  <h1 class="text-lg font-semibold">{title}</h1>

  <div class="w-full inline-flex justify-start gap-3 mt-2">
    <span class="font-extrabold text-sm">{new Date(date).toLocaleDateString()}</span>
    <span class="font-extrabold text-sm">{articleReadTime} min read</span>
  </div>

  <h2 class="text-sm font-bold mt-2">
    {truncate(post, 255)}
  </h2>
</a>
</div>

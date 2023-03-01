<script lang="ts">
  import Icon from "./Icon.svelte";
  export let active: string
  const themes = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"]
</script>


<div class="dropdown dropdown-end">
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <label tabindex="0" class="btn m-1">
    <Icon name="layers" type="filled" />
  </label>
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <div
    class="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px max-h-96 h-[70vh] w-52 overflow-y-auto shadow-2xl mt-16"  tabindex="0">
    <div class="grid grid-cols-1 gap-3 p-3" tabindex="0" data-focustheme="true">
      {#each themes as item }
      <button type="submit" value={item} name="theme" class="outline-base-content overflow-hidden rounded-lg text-left"
        data-set-theme="{item}">
        <div data-theme="{item}" class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
          <div class="grid grid-cols-5 grid-rows-3">
            <div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
              {#if active == item}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="w-3 h-3"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path></svg>
              {/if}
              <div class="flex-grow text-sm font-bold">{item}</div>
              <div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
                <div class="bg-primary w-2 rounded"></div>
                <div class="bg-secondary w-2 rounded"></div>
                <div class="bg-accent w-2 rounded"></div>
                <div class="bg-neutral w-2 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </button>
      {/each}
    </div>
  </div>
</div>
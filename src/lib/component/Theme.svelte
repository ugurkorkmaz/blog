<script lang="ts">
  import Icon from "./Icon.svelte";
</script>


<div class="dropdown dropdown-end">
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
    <label tabindex="0" class="btn m-1"><Icon name="layers" type="filled" /></label>
    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
    <div class="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px max-h-96 h-[70vh] w-52 overflow-y-auto shadow-2xl mt-16">
      <div class="grid grid-cols-1 gap-3 p-3" tabindex="0">
        <button class="outline-base-content overflow-hidden rounded-lg text-left" type="submit" name="theme" value="cupcake">cupcake</button>
        <button class="outline-base-content overflow-hidden rounded-lg text-left" type="submit" name="theme" value="bumblebee">bumblebee</button>
        <button class="outline-base-content overflow-hidden rounded-lg text-left" type="submit" name="theme" value="emerald">emerald</button>
        <button class="outline-base-content overflow-hidden rounded-lg text-left" type="submit" name="theme" value="corporate">corporate</button>
        <button class="outline-base-content overflow-hidden rounded-lg text-left" type="submit" name="theme" value="synthwave">synthwave</button>
        <button class="outline-base-content overflow-hidden rounded-lg text-left" type="submit" name="theme" value="retro">retro</button>
        <button class="outline-base-content overflow-hidden rounded-lg text-left" type="submit" name="theme" value="cyberpunk">cyberpunk</button>
        <button class="outline-base-content overflow-hidden rounded-lg text-left" type="submit" name="theme" value="valentine">valentine</button>
        <button class="outline-base-content overflow-hidden rounded-lg text-left" type="submit" name="theme" value="halloween">halloween</button>
        <button class="outline-base-content overflow-hidden rounded-lg text-left" type="submit" name="theme" value="garden">garden</button>
        <button class="outline-base-content overflow-hidden rounded-lg text-left" type="submit" name="theme" value="forest">forest</button>
        <button class="outline-base-content overflow-hidden rounded-lg text-left" type="submit" name="theme" value="aqua">aqua</button>
        <button class="outline-base-content overflow-hidden rounded-lg text-left" type="submit" name="theme" value="lofi">lofi</button>
        <button class="outline-base-content overflow-hidden rounded-lg text-left" type="submit" name="theme" value="pastel">pastel</button>
        <button class="outline-base-content overflow-hidden rounded-lg text-left" type="submit" name="theme" value="fantasy">fantasy</button>
        <button class="outline-base-content overflow-hidden rounded-lg text-left" type="submit" name="theme" value="wireframe">wireframe</button>
        <button class="outline-base-content overflow-hidden rounded-lg text-left" type="submit" name="theme" value="black">black</button>
        <button class="outline-base-content overflow-hidden rounded-lg text-left" type="submit" name="theme" value="luxury">luxury</button>
        <button class="outline-base-content overflow-hidden rounded-lg text-left" type="submit" name="theme" value="dracula">dracula</button>
        <button class="outline-base-content overflow-hidden rounded-lg text-left" type="submit" name="theme" value="cmyk">cmyk</button>
        <button class="outline-base-content overflow-hidden rounded-lg text-left" type="submit" name="theme" value="autumn">autumn</button>
        <button class="outline-base-content overflow-hidden rounded-lg text-left" type="submit" name="theme" value="business">business</button>
        <button class="outline-base-content overflow-hidden rounded-lg text-left" type="submit" name="theme" value="acid">acid</button>
        <button class="outline-base-content overflow-hidden rounded-lg text-left" type="submit" name="theme" value="lemonade">lemonade</button>
        <button class="outline-base-content overflow-hidden rounded-lg text-left" type="submit" name="theme" value="night">night</button>
        <button class="outline-base-content overflow-hidden rounded-lg text-left" type="submit" name="theme" value="coffee">coffee</button>
        <button class="outline-base-content overflow-hidden rounded-lg text-left" type="submit" name="theme" value="winter">winter</button>
      </div>
    </div>
</div>
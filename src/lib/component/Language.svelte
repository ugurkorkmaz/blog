<script lang="ts">
  import Icon from "./Icon.svelte";
</script>

<div class="dropdown dropdown-end">
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label tabindex="0" class="btn m-1">
    <Icon name="translate" type="filled" />
  </label>
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li>
      <button type="submit" value="tr" name="language" > 🇹🇷 TR</button>
    </li>
    <li>
      <button type="submit" value="en" name="language"> 🇺🇸 EN</button>
    </li>
  </ul>
</div>
<script lang="ts">
  let className: string = "";
  let iconName: string = "";
  let iconType: "filled" | "outlined" | "round" | "sharp" | "two-tone" =
    "outlined";
  export { className as class, iconName as name, iconType as type };
  let meterial: string = "";
  switch (iconType) {
    case "filled":
      meterial = "material-icons";
      break;
    case "outlined":
      meterial = "material-icons-outlined";
      break;
    case "round":
      meterial = "material-icons-round";
      break;
    case "sharp":
      meterial = "material-icons-sharp";
      break;
    case "two-tone":
      meterial = "material-icons-two-tone";
      break;
    default:
      throw new Error("Icon type not found");
      break;
  }
</script>

<i translate="no" class="{meterial} {className} select-none">{iconName}</i>

<style global>
  @font-face {
    font-family: "Material Icons";
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/materialicons/v139/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2)
      format("woff2");
  }
  .select-none {
    user-select: none;
  }
  .material-icons {
    font-family: "Material Icons";
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    font-feature-settings: "liga";
    -webkit-font-smoothing: antialiased;
  }
  .material-icons-outlined {
    font-family: "Material Icons Outlined";
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    font-feature-settings: "liga";
    -webkit-font-smoothing: antialiased;
  }
  .material-icons-round {
    font-family: "Material Icons Round";
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    font-feature-settings: "liga";
    -webkit-font-smoothing: antialiased;
  }
  .material-icons-sharp {
    font-family: "Material Icons Sharp";
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    font-feature-settings: "liga";
    -webkit-font-smoothing: antialiased;
  }
  .material-icons-two-tone {
    font-family: "Material Icons Two Tone";
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    font-feature-settings: "liga";
    -webkit-font-smoothing: antialiased;
  }
</style>

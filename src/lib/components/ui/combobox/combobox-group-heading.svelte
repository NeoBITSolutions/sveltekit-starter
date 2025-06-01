<script lang="ts">
  import { cn } from "$lib/utils";
  import { Combobox as ComboboxPrimitive } from "bits-ui";

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: ComboboxPrimitive.GroupHeadingProps = $props();
</script>

<ComboboxPrimitive.GroupHeading
  bind:ref
  data-slot="combobox-group-heading"
  class={cn("py-1.5 pr-2 pl-8 text-sm font-semibold", className)}
  {...restProps} />

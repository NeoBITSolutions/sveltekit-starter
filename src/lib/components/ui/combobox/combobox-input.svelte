<script lang="ts">
  import { cn } from "$lib/utils";
  import { Combobox as ComboboxPrimitive } from "bits-ui";

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: ComboboxPrimitive.InputProps = $props();
</script>

<ComboboxPrimitive.Input
  data-slot="combobox-input"
  class={cn(
    "border-input bg-background selection:bg-primary dark:bg-input/30 selection:text-primary-foreground ring-offset-background placeholder:text-muted-foreground flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
    "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
    className
  )}
  bind:ref
  {...restProps} />

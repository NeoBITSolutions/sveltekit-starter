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
  class={cn(
    "flex h-11 w-full rounded-md bg-transparent py-3 text-base outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
    className
  )}
  bind:ref
  {...restProps} />

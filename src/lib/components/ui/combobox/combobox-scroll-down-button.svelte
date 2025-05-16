<script lang="ts">
  import { cn } from "$lib/utils";
  import { ChevronDown } from "@lucide/svelte";
  import { Combobox as ComboboxPrimitive, type WithoutChildrenOrChild } from "bits-ui";

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: WithoutChildrenOrChild<ComboboxPrimitive.ScrollDownButtonProps> = $props();
</script>

<ComboboxPrimitive.ScrollDownButton
  bind:ref
  class={cn("flex cursor-default items-center justify-center py-1", className)}
  {...restProps}>
  <ChevronDown class="size-4" />
</ComboboxPrimitive.ScrollDownButton>

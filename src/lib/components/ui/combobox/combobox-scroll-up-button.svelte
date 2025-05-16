<script lang="ts">
  import { cn } from "$lib/utils";
  import { ChevronUp } from "@lucide/svelte";
  import { Combobox as ComboboxPrimitive, type WithoutChildrenOrChild } from "bits-ui";

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: WithoutChildrenOrChild<ComboboxPrimitive.ScrollUpButtonProps> = $props();
</script>

<ComboboxPrimitive.ScrollUpButton
  bind:ref
  class={cn("flex cursor-default items-center justify-center py-1", className)}
  {...restProps}>
  <ChevronUp class="size-4" />
</ComboboxPrimitive.ScrollUpButton>

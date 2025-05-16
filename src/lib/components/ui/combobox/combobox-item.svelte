<script lang="ts">
  import { cn } from "$lib/utils";
  import { Check } from "@lucide/svelte";
  import { Combobox as ComboboxPrimitive, type WithoutChild } from "bits-ui";

  let {
    ref = $bindable(null),
    class: className,
    value,
    label,
    children: childrenProp,
    ...restProps
  }: WithoutChild<ComboboxPrimitive.ItemProps> = $props();
</script>

<ComboboxPrimitive.Item
  bind:ref
  {value}
  class={cn(
    "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50",
    className
  )}
  {...restProps}>
  {#snippet children({ selected, highlighted })}
    <span class="absolute left-2 flex size-3.5 items-center justify-center">
      {#if selected}
        <Check class="size-4" />
      {/if}
    </span>
    {#if childrenProp}
      {@render childrenProp({ selected, highlighted })}
    {:else}
      {label || value}
    {/if}
  {/snippet}
</ComboboxPrimitive.Item>

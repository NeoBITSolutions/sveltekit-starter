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
  data-slot="combobox-item"
  {value}
  class={cn(
    "data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
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

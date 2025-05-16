<script lang="ts">
  import { cn } from "$lib/utils";
  import { ChevronDown, ChevronUp } from "@lucide/svelte";
  import { Combobox as ComboboxPrimitive, type WithoutChild } from "bits-ui";
  import { useCombobox } from "./context.svelte";

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithoutChild<ComboboxPrimitive.TriggerProps> = $props();
  const combobox = useCombobox();
</script>

<ComboboxPrimitive.Trigger
  bind:ref
  class={cn(
    "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[placeholder]:text-muted-foreground [&>span]:line-clamp-1",
    className
  )}
  {...restProps}>
  {@render children?.()}
  {#if combobox.open}
    <ChevronUp class="size-4 opacity-50" />
  {:else}
    <ChevronDown class="size-4 opacity-50" />
  {/if}
</ComboboxPrimitive.Trigger>

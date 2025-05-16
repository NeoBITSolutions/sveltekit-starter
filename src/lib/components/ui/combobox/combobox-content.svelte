<script lang="ts">
  import { Combobox } from "$lib/components/ui";
  import { cn } from "$lib/utils";
  import { Loader } from "@lucide/svelte";
  import { Combobox as ComboboxPrimitive, type WithoutChild } from "bits-ui";

  let {
    ref = $bindable(null),
    class: className,
    sideOffset = 4,
    portalProps,
    children,
    loading,
    empty,
    ...restProps
  }: WithoutChild<ComboboxPrimitive.ContentProps> & {
    portalProps?: ComboboxPrimitive.PortalProps;
    loading: boolean;
    empty: boolean;
  } = $props();
</script>

<ComboboxPrimitive.Portal {...portalProps}>
  <ComboboxPrimitive.Content
    bind:ref
    {sideOffset}
    class={cn(
      "relative z-50 max-h-96 w-[var(--bits-combobox-anchor-width)] min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...restProps}>
    <Combobox.ScrollUpButton />
    <ComboboxPrimitive.Viewport
      class={cn(
        "h-[var(--bits-select-anchor-height)] w-full min-w-[var(--bits-select-anchor-width)] p-1"
      )}>
      {#if loading}
        <span class="flex w-full items-center gap-2 py-1.5 pl-8 pr-2 text-sm outline-none"
          ><Loader class="h-4 w-4 animate-spin"></Loader> loading...</span>
      {:else if empty}
        <span class="w-full py-1.5 pl-8 pr-2 text-sm outline-none">No results found</span>
      {:else}
        {@render children?.()}
      {/if}
    </ComboboxPrimitive.Viewport>
    <Combobox.ScrollDownButton />
  </ComboboxPrimitive.Content>
</ComboboxPrimitive.Portal>

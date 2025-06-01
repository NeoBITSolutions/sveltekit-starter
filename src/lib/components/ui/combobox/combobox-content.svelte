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
    data-slot="combobox-content"
    class={cn(
      "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--bits-select-content-available-height) min-w-[8rem] origin-(--bits-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    )}
    {...restProps}>
    <Combobox.ScrollUpButton />
    <ComboboxPrimitive.Viewport
      class={cn(
        "h-(--bits-select-anchor-height) w-full min-w-(--bits-select-anchor-width) scroll-my-1 p-1"
      )}>
      {#if loading}
        <span class="flex w-full items-center gap-2 py-1.5 pr-2 pl-8 text-sm outline-none"
          ><Loader class="h-4 w-4 animate-spin"></Loader> loading...</span>
      {:else if empty}
        <span class="w-full py-1.5 pr-2 pl-8 text-sm outline-none">No results found</span>
      {:else}
        {@render children?.()}
      {/if}
    </ComboboxPrimitive.Viewport>
    <Combobox.ScrollDownButton />
  </ComboboxPrimitive.Content>
</ComboboxPrimitive.Portal>

<script lang="ts">
  import { buttonVariants } from "$lib/components/ui";
  import { cn } from "$lib/utils";
  import { ChevronLeft } from "@lucide/svelte";
  import { Pagination as PaginationPrimitive } from "bits-ui";

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: PaginationPrimitive.PrevButtonProps = $props();
</script>

{#snippet Fallback()}
  <ChevronLeft class="size-4" />
  <span>Previous</span>
{/snippet}

<PaginationPrimitive.PrevButton
  bind:ref
  class={cn(
    buttonVariants({
      variant: "ghost",
      class: "gap-1 pl-2.5",
    }),
    className
  )}
  children={children || Fallback}
  {...restProps} />

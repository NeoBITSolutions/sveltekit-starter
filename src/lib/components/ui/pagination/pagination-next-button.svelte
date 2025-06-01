<script lang="ts">
  import { buttonVariants } from "$lib/components/ui";
  import { cn } from "$lib/utils";
  import { ChevronRight } from "@lucide/svelte";
  import { Pagination as PaginationPrimitive } from "bits-ui";

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: PaginationPrimitive.NextButtonProps = $props();
</script>

{#snippet Fallback()}
  <span>Next</span>
  <ChevronRight class="size-4" />
{/snippet}

<PaginationPrimitive.NextButton
  bind:ref
  aria-label="Go to next page"
  class={cn(
    buttonVariants({
      size: "default",
      variant: "ghost",
      class: "gap-1 px-2.5 sm:pr-2.5",
    }),
    className
  )}
  children={children || Fallback}
  {...restProps} />

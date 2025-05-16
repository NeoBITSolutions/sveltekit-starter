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
  class={cn(
    buttonVariants({
      variant: "ghost",
      class: "gap-1 pr-2.5",
    }),
    className
  )}
  children={children || Fallback}
  {...restProps} />

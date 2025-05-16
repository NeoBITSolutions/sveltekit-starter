<script lang="ts">
  import { type ButtonProps, buttonVariants } from "$lib/components/ui";
  import { cn } from "$lib/utils";
  import { Pagination as PaginationPrimitive } from "bits-ui";

  let {
    ref = $bindable(null),
    class: className,
    size = "icon",
    isActive = false,
    page,
    children,
    ...restProps
  }: PaginationPrimitive.PageProps &
    ButtonProps & {
      isActive: boolean;
    } = $props();
</script>

{#snippet Fallback()}
  {page.value}
{/snippet}

<PaginationPrimitive.Page
  bind:ref
  {page}
  class={cn(
    buttonVariants({
      variant: isActive ? "outline" : "ghost",
      size,
    }),
    className
  )}
  children={children || Fallback}
  {...restProps} />

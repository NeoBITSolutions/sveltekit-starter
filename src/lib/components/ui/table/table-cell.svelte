<script lang="ts">
  import { cn } from "$lib/utils";
  import type { WithElementRef } from "bits-ui";
  import type { HTMLTdAttributes } from "svelte/elements";

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLTdAttributes> = $props();
</script>

<td
  bind:this={ref}
  class={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
  {...restProps}>
  {@render children?.()}
</td>

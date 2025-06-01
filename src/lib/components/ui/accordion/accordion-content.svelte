<script lang="ts">
  import { cn, type WithoutChild } from "$lib/utils";
  import { Accordion as AccordionPrimitive } from "bits-ui";

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithoutChild<AccordionPrimitive.ContentProps> = $props();
</script>

<AccordionPrimitive.Content
  bind:ref
  data-slot="accordion-content"
  class={cn(
    "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm duration-400",
    className
  )}
  {...restProps}>
  <div class="pt-0 pb-4">
    {@render children?.()}
  </div>
</AccordionPrimitive.Content>

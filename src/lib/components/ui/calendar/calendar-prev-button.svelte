<script lang="ts">
  import { buttonVariants } from "$lib/components/ui";
  import { cn } from "$lib/utils";
  import { ChevronLeft } from "@lucide/svelte";
  import { Calendar as CalendarPrimitive } from "bits-ui";

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: CalendarPrimitive.PrevButtonProps = $props();
</script>

{#snippet Fallback()}
  <ChevronLeft class="size-4" />
{/snippet}

<CalendarPrimitive.PrevButton
  bind:ref
  class={cn(
    buttonVariants({ variant: "outline" }),
    "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
    className
  )}
  children={children || Fallback}
  {...restProps} />

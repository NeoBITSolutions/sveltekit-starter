<script lang="ts">
  import { cn } from "$lib/utils";
  import { Calendar as CalendarPrimitive } from "bits-ui";

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: CalendarPrimitive.HeadCellProps = $props();
</script>

<CalendarPrimitive.HeadCell
  bind:ref
  class={cn("text-muted-foreground w-8 rounded-md text-[0.8rem] font-normal", className)}
  {...restProps} />

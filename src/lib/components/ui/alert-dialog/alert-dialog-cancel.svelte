<script lang="ts">
  import { buttonVariants } from "$lib/components/ui";
  import { cn } from "$lib/utils";
  import { AlertDialog as AlertDialogPrimitive } from "bits-ui";

  let {
    ref = $bindable(null),
    type = "button",
    class: className,
    ...restProps
  }: AlertDialogPrimitive.CancelProps = $props();
</script>

<AlertDialogPrimitive.Cancel
  bind:ref
  class={cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className)}
  {type}
  {...restProps} />

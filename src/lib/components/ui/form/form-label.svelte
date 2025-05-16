<script lang="ts">
  import { Label } from "$lib/components/ui";
  import { cn } from "$lib/utils";
  import type { WithoutChild } from "bits-ui";
  import * as FormPrimitive from "formsnap";

  let {
    ref = $bindable(null),
    children,
    class: className,
    ...restProps
  }: WithoutChild<FormPrimitive.LabelProps> = $props();
</script>

<FormPrimitive.Label {...restProps} bind:ref>
  {#snippet child({ props })}
    <Label {...props} class={cn("data-[fs-error]:text-danger", className)}>
      {@render children?.()}
    </Label>
  {/snippet}
</FormPrimitive.Label>

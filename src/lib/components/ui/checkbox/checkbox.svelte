<script lang="ts">
  import { cn, type WithoutChildrenOrChild } from "$lib/utils";
  import { Check, Minus } from "@lucide/svelte";
  import { Checkbox as CheckboxPrimitive } from "bits-ui";

  let {
    ref = $bindable(null),
    checked = $bindable(false),
    indeterminate = $bindable(false),
    class: className,
    ...restProps
  }: WithoutChildrenOrChild<CheckboxPrimitive.RootProps> = $props();
</script>

<CheckboxPrimitive.Root
  bind:ref
  data-slot="checkbox"
  class={cn(
    "border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-danger/20 dark:aria-invalid:ring-danger/40 aria-invalid:border-danger peer flex size-4 shrink-0 items-center justify-center rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
    className
  )}
  bind:checked
  bind:indeterminate
  {...restProps}>
  {#snippet children({ checked, indeterminate })}
    <div data-slot="checkbox-indicator" class="text-current transition-none">
      {#if checked}
        <Check class="size-3.5" />
      {:else if indeterminate}
        <Minus class="size-3.5" />
      {/if}
    </div>
  {/snippet}
</CheckboxPrimitive.Root>

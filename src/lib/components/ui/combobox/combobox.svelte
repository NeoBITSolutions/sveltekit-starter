<script lang="ts">
  import { Combobox as ComboboxPrimitive } from "bits-ui";

  let {
    value = $bindable(),
    open = $bindable(false),
    ...restProps
  }: ComboboxPrimitive.RootProps = $props();
</script>

<ComboboxPrimitive.Root bind:open bind:value={value as never} {...restProps}>
</ComboboxPrimitive.Root>

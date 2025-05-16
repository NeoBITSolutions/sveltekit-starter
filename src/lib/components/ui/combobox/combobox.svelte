<script lang="ts">
  import { Combobox as ComboboxPrimitive } from "bits-ui";
  import { setCombobox } from "./context.svelte";

  let {
    value = $bindable(),
    open = $bindable(false),
    ...restProps
  }: ComboboxPrimitive.RootProps = $props();

  setCombobox({
    open: () => open,
  });
</script>

<ComboboxPrimitive.Root bind:open bind:value={value as never} {...restProps}>
</ComboboxPrimitive.Root>

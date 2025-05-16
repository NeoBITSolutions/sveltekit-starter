<script lang="ts">
  import { Label, Select } from "$lib/components/ui";
  import { PageSizes } from "$lib/enums";
  import { recordToSelectArray } from "$lib/utils";

  let {
    size = $bindable(PageSizes[50]),
    onSizeChange,
  }: { size: number; onSizeChange: (value: number) => void } = $props();
  const sizes = recordToSelectArray(PageSizes);
  const triggerContent = $derived(sizes.find((f) => f.value === size)?.label);
</script>

<div class="flex items-center gap-2">
  <Label class="w-min" for="perPage">Items per page</Label>
  <Select.Root
    type="single"
    name="perPage"
    onValueChange={(value) => {
      size = Number(value) || PageSizes[50];
      onSizeChange(size);
    }}>
    <Select.Trigger>
      {triggerContent}
    </Select.Trigger>
    <Select.Content>
      {#each sizes as { value, label } (value)}
        <Select.Item value={value.toString()} {label}></Select.Item>
      {/each}
    </Select.Content>
  </Select.Root>
</div>

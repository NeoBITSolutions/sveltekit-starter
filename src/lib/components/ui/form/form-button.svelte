<script lang="ts">
  import { Button, type ButtonProps } from "$lib/components/ui";

  let { ref = $bindable(null), ...restProps }: ButtonProps = $props();
</script>

<Button bind:ref type="submit" {...restProps} />

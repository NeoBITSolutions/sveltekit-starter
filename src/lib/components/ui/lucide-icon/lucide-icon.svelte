<script lang="ts">
  import * as icons from "@lucide/svelte";
  import { type IconProps } from "@lucide/svelte";
  import type { WithElementRef } from "bits-ui";

  type LucideIconProps = WithElementRef<IconProps>;

  let { name, class: className, ref = $bindable(null), ...restProps }: LucideIconProps = $props();
  name = name ?? "";
  const Icon: typeof icons.Icon = (icons as any)[name];
  const Fallback = (icons as any)["TriangleAlert"];
</script>

{#if Icon}
  <Icon class={className} {...restProps} />
{:else}
  <Fallback class={className} {...restProps} />
{/if}

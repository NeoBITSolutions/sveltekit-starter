<script lang="ts" module>
  import type { WithElementRef } from "bits-ui";
  import type { HTMLAnchorAttributes } from "svelte/elements";
  import { type VariantProps, tv } from "tailwind-variants";

  export const linkVariants = tv({
    base: "group relative inline-flex items-center",
    variants: {
      variant: {
        default: "text-primary",
        secondary: "text-secondary",
        accent: "text-accent",
        danger: "text-danger",
        success: "text-success",
        warning: "text-warning",
        background: "text-background",
        foreground: "text-foreground",
      },
      size: {
        default: "text-base",
        sm: "text-sm",
        lg: "text-lg font-semibold",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  });

  type Variant = VariantProps<typeof linkVariants>["variant"];
  type Size = VariantProps<typeof linkVariants>["size"];

  export type LinkProps = WithElementRef<HTMLAnchorAttributes> & {
    variant?: Variant;
    size?: Size;
  };
</script>

<script lang="ts">
  import { cn } from "$lib/utils";

  let {
    class: className,
    variant = "default",
    size = "default",
    ref = $bindable(null),
    href = undefined,
    children,
    ...restProps
  }: LinkProps = $props();

  const bgVariant = {
    default: "bg-primary",
    secondary: "bg-secondary",
    accent: "bg-accent",
    danger: "bg-danger",
    success: "bg-success",
    warning: "bg-warning",
    background: "bg-background",
    foreground: "bg-foreground",
  };
</script>

<a bind:this={ref} class={cn(linkVariants({ variant, size }), className)} {href} {...restProps}>
  {@render children?.()}
  <span
    class="absolute -bottom-1 left-0 right-0 h-[2px] w-full scale-0 transition-transform duration-400 group-hover:scale-100 {bgVariant[
      variant === undefined ? 'default' : variant
    ]}"></span>
</a>

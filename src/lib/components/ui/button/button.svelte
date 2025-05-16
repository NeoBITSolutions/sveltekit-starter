<script lang="ts" module>
  import type { WithElementRef } from "bits-ui";
  import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";
  import { type VariantProps, tv } from "tailwind-variants";

  export const buttonVariants = tv({
    base: "ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors duration-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        accent: "bg-accent text-accent-foreground hover:bg-accent/80",
        danger: "bg-danger text-danger-foreground hover:bg-danger/80",
        success: "bg-success text-success-foreground hover:bg-success/80",
        warning: "bg-warning text-warning-foreground hover:bg-warning/80",
        outline: "border-input bg-background hover:bg-primary hover:text-primary-foreground border",
        "outline-secondary":
          "border-input bg-background hover:bg-secondary hover:text-secondary-foreground border",
        "outline-accent":
          "border-input bg-background hover:bg-accent hover:text-accent-foreground border",
        "outline-danger":
          "border-input bg-background hover:bg-danger hover:text-danger-foreground border",
        "outline-success":
          "border-input bg-background hover:bg-success hover:text-success-foreground border",
        "outline-warning":
          "border-input bg-background hover:bg-warning hover:text-warning-foreground border",
        ghost: "hover:bg-primary hover:text-primary-foreground",
        "ghost-secondary": "hover:bg-secondary hover:text-secondary-foreground",
        "ghost-accent": "hover:bg-accent hover:text-accent-foreground",
        "ghost-danger": "hover:bg-danger hover:text-danger-foreground",
        "ghost-success": "hover:bg-success hover:text-success-foreground",
        "ghost-warning": "hover:bg-warning hover:text-warning-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        "link-secondary": "text-secondary underline-offset-4 hover:underline",
        "link-accent": "text-accent underline-offset-4 hover:underline",
        "link-danger": "text-danger underline-offset-4 hover:underline",
        "link-success": "text-success underline-offset-4 hover:underline",
        "link-warning": "text-warning underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  });

  export type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];
  export type ButtonSize = VariantProps<typeof buttonVariants>["size"];

  export type ButtonProps = WithElementRef<HTMLButtonAttributes> &
    WithElementRef<HTMLAnchorAttributes> & {
      variant?: ButtonVariant;
      size?: ButtonSize;
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
    type = "button",
    children,
    ...restProps
  }: ButtonProps = $props();
</script>

{#if href}
  <a bind:this={ref} class={cn(buttonVariants({ variant, size }), className)} {href} {...restProps}>
    {@render children?.()}
  </a>
{:else}
  <button
    bind:this={ref}
    class={cn(buttonVariants({ variant, size }), className)}
    {type}
    {...restProps}>
    {@render children?.()}
  </button>
{/if}

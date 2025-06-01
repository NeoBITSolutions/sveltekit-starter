<script lang="ts" module>
  import { cn, type WithElementRef } from "$lib/utils";
  import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";
  import { tv, type VariantProps } from "tailwind-variants";

  export const buttonVariants = tv({
    base: "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-danger/20 dark:aria-invalid:ring-danger/40 aria-invalid:border-danger inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium outline-none transition-all duration-400 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/80",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        accent: "bg-accent text-accent-foreground shadow-xs hover:bg-accent/80",
        danger: "bg-danger text-danger-foreground shadow-xs hover:bg-danger/80",
        success: "bg-success text-success-foreground shadow-xs hover:bg-success/80",
        warning: "bg-warning text-warning-foreground shadow-xs hover:bg-warning/80",
        outline:
          "bg-background shadow-xs border hover:bg-primary hover:text-primary-foreground dark:border-input",
        "outline-secondary":
          "bg-background shadow-xs border hover:bg-secondary hover:text-secondary-foreground dark:border-input",
        "outline-accent":
          "bg-background shadow-xs border hover:bg-accent hover:text-accent-foreground dark:border-input",
        "outline-danger":
          "bg-background shadow-xs border hover:bg-danger hover:text-danger-foreground dark:border-input",
        "outline-success":
          "bg-background shadow-xs border hover:bg-success hover:text-success-foreground dark:border-input",
        "outline-warning":
          "bg-background shadow-xs border hover:bg-warning hover:text-warning-foreground dark:border-input",
        ghost: "hover:bg-primary hover:text-primary-foreground hover:bg-primary/80",
        "ghost-secondary":
          "hover:bg-secondary hover:text-secondary-foreground hover:bg-secondary/80",
        "ghost-accent": "hover:bg-accent hover:text-accent-foreground hover:bg-accent/80",
        "ghost-danger": "hover:bg-danger hover:text-danger-foreground hover:bg-danger/80",
        "ghost-success": "hover:bg-success hover:text-success-foreground hover:bg-success/80",
        "ghost-warning": "hover:bg-warning hover:text-warning-foreground hover:bg-warning/80",
        link: "text-primary underline-offset-4 hover:underline",
        "link-secondary": "text-secondary underline-offset-4 hover:underline",
        "link-accent": "text-accent underline-offset-4 hover:underline",
        "link-danger": "text-danger underline-offset-4 hover:underline",
        "link-success": "text-success underline-offset-4 hover:underline",
        "link-warning": "text-warning underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
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
  let {
    class: className,
    variant = "default",
    size = "default",
    ref = $bindable(null),
    href = undefined,
    type = "button",
    disabled,
    children,
    ...restProps
  }: ButtonProps = $props();
</script>

{#if href}
  <a
    bind:this={ref}
    data-slot="button"
    class={cn(buttonVariants({ variant, size }), className)}
    href={disabled ? undefined : href}
    aria-disabled={disabled}
    role={disabled ? "link" : undefined}
    tabindex={disabled ? -1 : undefined}
    {...restProps}>
    {@render children?.()}
  </a>
{:else}
  <button
    bind:this={ref}
    data-slot="button"
    class={cn(buttonVariants({ variant, size }), className)}
    {type}
    {disabled}
    {...restProps}>
    {@render children?.()}
  </button>
{/if}

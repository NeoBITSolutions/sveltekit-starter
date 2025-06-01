<script lang="ts">
  import { Button, Form, Link } from "$lib/components/ui";
  import { APP_NAME } from "$lib/utils";
  import { Moon, SquareMenu, Sun } from "@lucide/svelte";
  import { toggleMode } from "mode-watcher";

  const { isAuthenticated }: { isAuthenticated: boolean } = $props();
</script>

{#snippet links()}
  <Link variant="accent" href="/">Home</Link>
  <Link variant="accent" href="/about">About</Link>
  <Link variant="accent" href="/faq">FAQ</Link>
  <Link variant="accent" href="/contact">Contact</Link>
{/snippet}

{#snippet actions()}
  {#if isAuthenticated}
    <form method="POST" action="/sign-out">
      <Form.Button variant="accent">Sign Out</Form.Button>
    </form>
    <Button variant="secondary" href="/dashboard">Go to Dashboard</Button>
  {:else}
    <Button variant="accent" href="/sign-in">Sign In</Button>
    <Button variant="secondary" href="/sign-up">Sign Up</Button>
  {/if}
{/snippet}

{#snippet themeButton()}
  <Button onclick={toggleMode} variant="outline-accent" size="icon">
    <Sun
      class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    <Moon
      class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    <span class="sr-only">Toggle theme</span>
  </Button>
{/snippet}

<nav class="bg-primary py-6">
  <div class="container flex items-center justify-between gap-4">
    <a class="text-accent" href="/">
      {APP_NAME}
    </a>

    <div class="hidden gap-8 md:flex">
      <div class="flex gap-4">
        {@render links()}
      </div>

      <div class="flex gap-4">{@render actions()}</div>

      {@render themeButton()}
    </div>

    <Button class="md:hidden" variant="outline" size="icon">
      <span class="sr-only">Menu</span>
      <SquareMenu />
    </Button>
  </div>
</nav>

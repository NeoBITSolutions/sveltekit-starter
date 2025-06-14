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
      class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
    <Moon
      class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
    <span class="sr-only">Toggle theme</span>
  </Button>
{/snippet}

<nav class="bg-primary py-6">
  <div class="container flex items-center justify-between gap-4">
    <a class="flex items-center gap-4 bg-slate-50/30 px-2" href="/">
      <img class="max-h-10 lg:max-h-20" src="/logo.svg" alt="logo" />
      <span class="text-accent text-3xl font-semibold md:text-2xl lg:text-4xl">{APP_NAME}</span>
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

<script lang="ts">
  import { PublicFooter, PublicNavbar } from "$lib/components/layout";
  import { publicPagesState } from "$lib/state";
  import { APP_NAME } from "$lib/utils";

  const { children } = $props();
</script>

<svelte:head>
  <title>{publicPagesState.title ? publicPagesState.title + " |" : ""} {APP_NAME}</title>
</svelte:head>

<div
  class="grid min-h-screen {publicPagesState.header
    ? 'grid-rows-[auto_auto_1fr_auto]'
    : 'grid-rows-[auto_1fr_auto]'}">
  <PublicNavbar isAuthenticated={false} />
  {#if publicPagesState.header}
    <header class="container grid min-h-[90vh] items-center gap-8 md:grid-cols-2">
      {@render publicPagesState.header()}
    </header>
  {/if}
  <main class="container mt-20 grid gap-20 md:gap-28 lg:gap-36">
    {@render children()}
  </main>
  <PublicFooter />
</div>

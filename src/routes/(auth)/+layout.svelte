<script lang="ts">
  import { publicPagesState } from "$lib/state";
  import { APP_NAME } from "$lib/utils";

  const { children } = $props();
</script>

<svelte:head>
  <title>{publicPagesState.title ? publicPagesState.title + " |" : ""} {APP_NAME}</title>
</svelte:head>

<main class="grid h-screen md:grid-cols-2">
  <section
    class="from-primary via-primary to-accent flex items-center justify-center bg-gradient-to-br px-[4vw]">
    <div class="bg-background/30 grid gap-4 rounded-md p-4 backdrop-blur-sm">
      <h2>Get started now</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius fugit unde consequuntur quam,
        nostrum ipsa asperiores expedita perferendis vitae in!
      </p>
    </div>
  </section>

  <section class="flex flex-col justify-center gap-8 px-[4vw]">
    <h1 class="text-primary">{publicPagesState.title}</h1>
    {@render children()}
  </section>
</main>

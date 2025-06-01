<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/state";
  import { Button, Input } from "$lib/components/ui";
  import { Funnel, Search } from "@lucide/svelte";
  import type { Snippet } from "svelte";

  const {
    query = true,
    filters = true,
    filterColumns = 2,
    searchParams,
    children,
  }: {
    query?: boolean;
    filters?: boolean;
    filterColumns?: number;
    searchParams: string[];
    children: Snippet;
  } = $props();

  let showFilters = $state(searchParams.some((param) => page.url.searchParams.has(param)));
  let filtersCount = $derived(
    searchParams.filter((param) => page.url.searchParams.has(param)).length
  );
</script>

<div class="flex gap-4" class:justify-end={!query}>
  {#if query}
    <form class="flex w-full gap-2">
      <Input
        name="query"
        type="search"
        placeholder="Search..."
        value={page.url.searchParams.get("query") || ""} />
      <Button variant="outline" size="icon" type="submit"><Search /></Button>
    </form>
  {/if}
  {#if filters}
    <Button
      size="icon"
      variant="outline"
      class="relative {showFilters ? 'bg-primary text-primary-foreground' : ''}"
      onclick={() => (showFilters = !showFilters)}>
      <Funnel />
      <span class="absolute -right-1 -top-1 rounded-full bg-danger px-1 text-danger-foreground"
        >{filtersCount}</span>
    </Button>
    {#if filtersCount > 0}
      <Button
        onclick={() => {
          const url = new URL(page.url);
          searchParams.forEach((param) => {
            url.searchParams.delete(param);
          });
          goto(url.toString());
        }}>Reset filters</Button>
    {/if}
  {/if}
</div>

{#if showFilters}
  <div
    class="grid gap-4 md:grid-cols-2"
    class:md:grid-cols-2={filterColumns === 2}
    class:md:grid-cols-3={filterColumns === 3}
    class:md:grid-cols-4={filterColumns === 4}>
    {@render children()}
  </div>
{/if}

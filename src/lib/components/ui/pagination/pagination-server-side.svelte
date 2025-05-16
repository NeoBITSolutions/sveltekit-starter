<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/state";
  import { Pagination } from "$lib/components/ui";
  import { PageSizes, PaginationSearchParams } from "$lib/enums";

  const { totalCount }: { totalCount: number } = $props();

  let size = $derived(
    Number(page.url.searchParams.get(PaginationSearchParams.size)) || PageSizes[50]
  );
</script>

{#if totalCount > size}
  <Pagination.Root
    count={totalCount}
    perPage={size}
    page={Number(page.url.searchParams.get(PaginationSearchParams.page)) || 1}
    onPageChange={(_page) => {
      const url = new URL(page.url);
      url.searchParams.set(PaginationSearchParams.page, _page.toString());
      url.searchParams.set("size", size.toString());
      goto(url.toString());
    }}>
    {#snippet children({ pages, currentPage })}
      <Pagination.SizeSelect
        {size}
        onSizeChange={(_size) => {
          const url = new URL(page.url);
          url.searchParams.set(
            PaginationSearchParams.page,
            totalCount <= _size ? "1" : currentPage.toString()
          );
          url.searchParams.set(PaginationSearchParams.size, _size.toString());
          goto(url.toString());
        }} />
      <Pagination.Content>
        <Pagination.Item>
          <Pagination.PrevButton />
        </Pagination.Item>
        {#each pages as page (page.key)}
          {#if page.type === "ellipsis"}
            <Pagination.Item>
              <Pagination.Ellipsis />
            </Pagination.Item>
          {:else}
            <Pagination.Item>
              <Pagination.Link {page} isActive={currentPage === page.value} />
            </Pagination.Item>
          {/if}
        {/each}
        <Pagination.Item>
          <Pagination.NextButton />
        </Pagination.Item>
      </Pagination.Content>
    {/snippet}
  </Pagination.Root>
{/if}

import type { Snippet } from "svelte";

class PublicPagesState {
  title = $state("");
  header?: Snippet = $state(undefined);
}
export const publicPagesState = new PublicPagesState();

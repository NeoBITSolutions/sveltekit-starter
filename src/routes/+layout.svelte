<script lang="ts">
  import { Toaster } from "$lib/components/ui";
  import { ModeWatcher } from "mode-watcher";
  import "../app.css";

  let { children } = $props();
</script>

{@render children()}

<Toaster />
<ModeWatcher />

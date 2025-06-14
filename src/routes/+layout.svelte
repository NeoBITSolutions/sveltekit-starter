<script lang="ts">
  import { dev } from "$app/environment";
  import { Toaster } from "$lib/components/ui";
  import { pwaState } from "$lib/state";
  import { ModeWatcher } from "mode-watcher";
  import { onMount } from "svelte";
  import "../app.css";

  let { children } = $props();
  onMount(() => {
    if (dev) {
      // TODO: fix service worker registration in dev mode (404)
      navigator.serviceWorker
        .register("/service-worker.js", {
          type: "module",
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error);
        });
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      pwaState.deferredInstallPrompt = e;
    };
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  });
</script>

{@render children()}

<Toaster />
<ModeWatcher />

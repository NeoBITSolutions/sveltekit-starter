import { goto } from "$app/navigation";

class PWAState {
  deferredInstallPrompt: BeforeInstallPromptEvent | null = $state(null);

  installPWA = async () => {
    if (!this.deferredInstallPrompt) {
      await goto("/dashboard");
      return;
    }

    try {
      await this.deferredInstallPrompt.prompt();
      await this.deferredInstallPrompt.userChoice;
    } catch (error) {
      console.error("Error during PWA installation:", error);
      return;
    } finally {
      this.deferredInstallPrompt = null;
    }
  };
}
export const pwaState = new PWAState();

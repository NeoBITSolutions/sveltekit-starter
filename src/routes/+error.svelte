<script lang="ts">
  import { page } from "$app/state";

  let message = $state(page.error?.message ?? "");
  switch (page.status) {
    case 400:
      message =
        "Double-check the form you submitted and try again. If the error persists, please contact support!";
      break;

    case 401:
      message = "You need to sign in first!";
      break;

    case 403:
      message = "You don't have access to this resource!";
      break;

    case 404:
      message = "The resource you are trying to access was not found!";
      break;

    default:
      const supportMessage = "Please try again later or contact support!";
      message = (() => {
        return message ? message + ". " + supportMessage : supportMessage;
      })();
      break;
  }
</script>

<main class="flex min-h-screen flex-col items-center justify-center md:flex-row">
  <div class="order-2 px-4 pt-6 md:order-1 md:pt-0">
    <h1 class="pb-4 text-primary">Oops, something went wrong...</h1>
    <p class="text-2xl">{message}</p>
  </div>
  <img class="order-1 w-full max-w-4xl md:order-2 md:pr-4" src="/warning.svg" alt="warning" />
</main>

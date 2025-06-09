import { toast } from "svelte-sonner";

export const handleError = (
  message = "An error occurred during this process. Please try again or contact support!"
) => {
  toast.error(message, { duration: 7000 });
};

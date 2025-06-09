import { NODE_ENV } from "$env/static/private";

export const getAppUrl = () => {
  switch (NODE_ENV) {
    case "development":
      return "http://localhost:5173";

    case "production":
      return "https://sveltekit-starter.neobit.workers.dev/";

    default:
      throw new Error("Unknown environment");
  }
};

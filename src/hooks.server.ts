import { error } from "@sveltejs/kit";
import { drizzle } from "drizzle-orm/d1";

export const handle = async ({ event, resolve }) => {
  const { locals, platform } = event;
  if (!platform) {
    error(500, "Platform not found");
  }

  locals.db = drizzle(platform.env.DB);

  return resolve(event);
};

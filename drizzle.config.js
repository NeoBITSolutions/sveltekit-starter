import { defineConfig } from "drizzle-kit";

const config = defineConfig({
  schema: "./src/lib/server/db/schema/*",
  out: "./src/lib/server/db/migrations",
  verbose: true,
  strict: true,
  dialect: "sqlite",
  dbCredentials: { url: process.env.NODE_ENV !== "prod" ? process.env.DATABASE_URL : "" },
});

export default config;

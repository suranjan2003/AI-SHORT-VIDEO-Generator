/** @type {import("drizzle-kit").Config} */
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials: {
    url: "postgresql://asvgDB_owner:bWYTEkN10uVf@ep-damp-star-a5o28aas.us-east-2.aws.neon.tech/asvgDB?sslmode=require",
  },
});


import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import * as schema from "./schema.ts";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";

const sqlite = new Database("sqlite.db");

const db = drizzle(sqlite, {
  schema,
});

migrate(db, { migrationsFolder: "./src/drizzle/migrations" });

// const result = await db.select().from(users);

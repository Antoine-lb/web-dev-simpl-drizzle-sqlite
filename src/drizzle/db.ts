import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
// import { UsersTable } from "./schema";
import * as schema from "./schema.ts";

const sqlite = new Database("sqlite.db");
export const db = drizzle(sqlite, { schema, logger: true });

// const result = await db.select().from(UsersTable);

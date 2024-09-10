import { db } from "./drizzle/db";
import { UsersTable } from "./drizzle/schema";

async function main() {
  await db.insert(UsersTable).values({ id: "antoine" });
  const res = db.select().from(UsersTable).all();
  console.log("res", res);
}

main();

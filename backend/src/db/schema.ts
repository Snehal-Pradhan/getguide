import {
  pgTable,
  uuid,
  varchar,
  boolean,
  timestamp,
} from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: uuid("id")
    .defaultRandom()
    .primaryKey(),

  clerkId: varchar("clerk_id", { length: 255 })
    .notNull()
    .unique(),

  email: varchar("email", { length: 255 })
    .notNull()
    .unique(),

  name: varchar("name", { length: 255 }),

  isOnboarded: boolean("is_onboarded")
    .notNull()
    .default(false),

  createdAt: timestamp("created_at")
    .defaultNow()
    .notNull(),

  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull(),
});

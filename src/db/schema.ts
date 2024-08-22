import {
  serial,
  varchar,
  timestamp,
  integer,
  pgTable,
  text,
} from 'drizzle-orm/pg-core';

export const userTable = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 55 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  registeredOn: timestamp('registered_on').defaultNow(),
});

export const postTable = pgTable('posts', {
  id: serial('id').primaryKey(),
  content: text('content'),
  title: varchar('title', { length: 255 }).notNull(),
  createdOn: timestamp('created_on').defaultNow(),
  updatedOn: timestamp('updated_on')
    .notNull()
    .$onUpdate(() => new Date()),
  userId: integer('user_id').references(() => userTable.id, {
    onDelete: 'cascade',
  }),
});

export type InsertUser = typeof userTable.$inferInsert;
export type SelectUser = typeof userTable.$inferSelect;
export type InsertPost = typeof postTable.$inferInsert;
export type SelectPost = typeof postTable.$inferSelect;

import {
  serial,
  varchar,
  timestamp,
  pgTable,
  text,
  uuid
} from 'drizzle-orm/pg-core';

export const userTable = pgTable('users', {
  id: uuid('id').primaryKey(),
  name: varchar('name', { length: 55 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  registeredOn: timestamp('registered_on').defaultNow(),
});

export const postTable = pgTable('posts', {
  id: serial('id').primaryKey(),
  content: text('content').notNull(),
  title: varchar('title', { length: 255 }).notNull(),
  createdOn: timestamp('created_on').defaultNow(),
  updatedOn: timestamp('updated_on')
    .notNull()
    .$onUpdate(() => new Date()),
  userId: uuid('user_id').references(() => userTable.id, {
    onDelete: 'cascade',
  }).notNull(),
});


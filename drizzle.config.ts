import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

config({ path: '.env.local' });
export default defineConfig({
  schema: './src/db/schema.ts',
  out: './supabase/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    // database: process.env.DATABASE!,
    // host:process.env.HOST!,
    // port: 5432,
    // password: process.env.PASSWORD!,
    // user: process.env.USER!,

  },
});

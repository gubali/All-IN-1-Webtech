require('dotenv/config');
import { defineConfig } from 'drizzle-kit';
dotenv.config();
export default defineConfig({
    out: './drizzle',
    schema: './drizzle/schema.js',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL,
    },
});

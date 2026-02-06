const { pgTable, integer, varchar, uuid, text } = require("drizzle-orm/pg-core");
const authorTable = pgTable('authors', {
    id: uuid().primaryKey().defaultRandom(),
    firstName: varchar({ length: 100 }).notNull(),
    lastName: text(),
    email: varchar({ length: 255 }).notNull().unique()
});
module.exports = authorTable;
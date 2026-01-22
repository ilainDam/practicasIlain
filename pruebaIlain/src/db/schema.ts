import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
export const personas = sqliteTable('personas', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    nombre: text('nombre').notNull(),
    edad: integer('edad'),
});
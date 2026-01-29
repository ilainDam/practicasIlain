import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const personas = sqliteTable('personas', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    nombre: text('nombre').notNull(),
    edad: integer('edad'),
});

export const partidas = sqliteTable('partidas', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    nickUsuario: text('nickUsuario').notNull(),
    numeroSecreto: integer('numeroSecreto').notNull(),
    intentos: text('intentos').notNull(), // JSON array de numeros probados
    fechaPartida: text('fechaPartida').notNull(), // ISO string
});
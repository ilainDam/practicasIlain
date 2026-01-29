CREATE TABLE `partidas` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`nickUsuario` text NOT NULL,
	`numeroSecreto` integer NOT NULL,
	`intentos` text NOT NULL,
	`fechaPartida` text NOT NULL
);

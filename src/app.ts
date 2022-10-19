import express, { Application } from "express";

import { Sequelize } from "sequelize";
const sequelize = new Sequelize(
	`postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@localhost:5432/AEchallenge`
);

const main = async (): Promise<void> => {
	const port = process.env.PORT;
	const app: Application = express();

	try {
		await sequelize.authenticate();
		console.log("Connected to PostgreSQL database!");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
		return;
	}
	app.get("/", (_, res) => {
		res.send("Hello World!");
	});

	app.listen(port, () => console.log(`🚀 Server is running on port ${port}!`));
};

main();

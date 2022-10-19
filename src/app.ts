import express, { Application } from "express";

import { Sequelize } from "sequelize-typescript";

const main = async (): Promise<void> => {
	const port = process.env.PORT;
	const app: Application = express();

	const sequelize = new Sequelize({
		database: "AEchallenge",
		dialect: "postgres",
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		models: [__dirname + "/models"],
		repositoryMode: true,
		pool: {
			min: 0,
			max: 5,
			idle: 10000,
		},
	});
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

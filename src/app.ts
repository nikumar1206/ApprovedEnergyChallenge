import { MikroORM } from "@mikro-orm/core";
import "reflect-metadata"; // required for run-time type reflection
import express, { Application } from "express";
import mikroOrmConfig from "./mikro-orm.config";

const main = async (): Promise<void> => {
	const port = process.env.PORT;
	const app: Application = express();

	const orm = await MikroORM.init(mikroOrmConfig);

	// await orm.getMigrator().up(); // run migrations
	app.get("/", (_, res) => {
		res.send("Hello World!");
	});

	app.listen(port, () => console.log(`🚀 Server is running on port ${port}!`));
};

main();

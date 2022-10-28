import "reflect-metadata"; // required for run-time type reflection
import bodyParser from "body-parser";
import cors from "cors";
import express, { Application } from "express";
import customerRouter from "./routes/api/customerRoutes";
import productRouter from "./routes/api/productRoutes";
import orderRouter from "./routes/api/orderRoutes";
import setupDB from "./setupDB";

const main = async (): Promise<void> => {
	const port = 5001;
	const app: Application = express();

	app.use(cors());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());

	await setupDB();

	app.use("/api/customers", customerRouter);
	app.use("/api/products", productRouter);
	app.use("/api/orders", orderRouter);

	app.listen(port, () => console.log(`🚀 Server is running on port ${port}!`));

	if (process.execArgv.length === 0) {
		process.exit(0);
	}
};

main();

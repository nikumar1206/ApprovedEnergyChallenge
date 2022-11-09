import "reflect-metadata"; // required for run-time type reflection
import bodyParser from "body-parser";
import express, { Application } from "express";
import customerRouter from "./routes/api/customerRoutes";
import productRouter from "./routes/api/productRoutes";
import orderRouter from "./routes/api/orderRoutes";
import setupDB from "./setupDB";
import path from "path";

const main = async (): Promise<void> => {
	const port = process.env.PORT;

	const app: Application = express();

	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());

	await setupDB();

	app.use("/api/customers", customerRouter);
	app.use("/api/products", productRouter);
	app.use("/api/orders", orderRouter);

	app.listen(port, () => console.log(`🚀 Server is running on port ${port}!`));

	if (process.env.NODE_ENV === "production") {
		app.use(express.static("web/dist"));
		app.get("/", (_, res) => {
			res.sendFile(path.resolve(__dirname, "index.html"));
		});
	}
};

main();

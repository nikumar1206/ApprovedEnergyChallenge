import "reflect-metadata"; // required for run-time type reflection
import { EntityManager, EntityRepository, MikroORM } from "@mikro-orm/core";
import bodyParser from "body-parser";
import express, { Application } from "express";
import mikroOrmConfig from "./mikro-orm.config";
import customerRouter from "./routes/api/customerRoutes";
import Customer from "./models/Customer";
import Product from "./models/Product";
import Order from "./models/Order";
import productRouter from "./routes/api/productRoutes";
import orderRouter from "./routes/api/orderRoutes";

export const DI = {} as {
	orm: MikroORM;
	em: EntityManager;
	customerRepository: EntityRepository<Customer>;
	productRepository: EntityRepository<Product>;
	orderRepository: EntityRepository<Order>;
}; // allows us to export our entity manager so it can be used in our routes

const main = async (): Promise<void> => {
	const port = process.env.PORT;
	const app: Application = express();
	app.use(bodyParser.urlencoded({ extended: false }));

	DI.orm = await MikroORM.init(mikroOrmConfig);
	DI.em = DI.orm.em.fork();
	DI.customerRepository = DI.em.getRepository(Customer);
	DI.productRepository = DI.em.getRepository(Product);
	DI.orderRepository = DI.em.getRepository(Order);

	const generator = DI.orm.getSchemaGenerator();
	await generator.updateSchema();
	DI.orm.getMigrator().up(); // run migrations

	app.get("/", (_, res) => {
		res.send("Hello World!");
	});

	app.use("/api/customers", customerRouter);
	app.use("/api/products", productRouter);
	app.use("/api/orders", orderRouter);
	app.listen(port, () => console.log(`🚀 Server is running on port ${port}!`));
};

main();
export default DI;

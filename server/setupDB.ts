import { MikroORM } from "@mikro-orm/core";
import { DatabaseInterface } from "./constants";
import mikroOrmConfig from "./mikro-orm.config";
import Customer from "./models/Customer";
import Order from "./models/Order";
import Product from "./models/Product";

export const DI = {} as DatabaseInterface;
export const setupDB = async () => {
	DI.orm = await MikroORM.init(mikroOrmConfig);
	DI.em = DI.orm.em.fork();
	DI.customerRepository = DI.em.getRepository(Customer);
	DI.productRepository = DI.em.getRepository(Product);
	DI.orderRepository = DI.em.getRepository(Order);

	const generator = DI.orm.getSchemaGenerator();
	await generator.updateSchema();
	DI.orm.getMigrator().up(); // run migrations
};

export default setupDB;

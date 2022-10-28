import { EntityManager, EntityRepository, MikroORM } from "@mikro-orm/core";
import Customer from "./models/Customer";
import Order from "./models/Order";
import Product from "./models/Product";

export const __prod__ = process.env.NODE_ENV === "production";

export interface DatabaseInterface {
	orm: MikroORM;
	em: EntityManager;
	customerRepository: EntityRepository<Customer>;
	productRepository: EntityRepository<Product>;
	orderRepository: EntityRepository<Order>;
}

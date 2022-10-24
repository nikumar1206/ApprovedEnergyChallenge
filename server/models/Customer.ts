import {
	Collection,
	Entity,
	OneToMany,
	Property,
	Unique,
} from "@mikro-orm/core";
import { BaseEntity } from "./Base";
import Order from "./Order";
import Product from "./Product";

@Entity()
export default class Customer extends BaseEntity {
	@Property()
	name!: string;

	@Property()
	@Unique()
	email!: string;

	@Property()
	address!: string;

	@Property()
	@Unique()
	phone!: string;

	@OneToMany(() => Product, (product) => product.buyer)
	ownedProducts = new Collection<Product>(this);

	@OneToMany(() => Order, (order) => order.buyer)
	allOrders = new Collection<Order>(this);
}

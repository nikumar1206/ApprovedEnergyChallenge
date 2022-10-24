import {
	Collection,
	Entity,
	OneToMany,
	OptionalProps,
	PrimaryKey,
	Property,
	Unique,
} from "@mikro-orm/core";
import Order from "./Order";
import Product from "./Product";

@Entity()
export default class Customer {
	[OptionalProps]?: "createdAt" | "updatedAt";
	@PrimaryKey()
	id!: number;

	@Property()
	createdAt: Date = new Date();

	@Property({ onUpdate: () => new Date() })
	updatedAt: Date = new Date();

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

	@OneToMany(() => Order, (order) => order.customer)
	allOrders = new Collection<Order>(this);
}

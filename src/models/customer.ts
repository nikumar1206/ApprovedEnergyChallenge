import {
	Entity,
	OneToMany,
	PrimaryKey,
	Property,
	Unique,
} from "@mikro-orm/core";
import Order from "./order";
import Product from "./product";

@Entity()
export default class Customer {
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
	ownedProducts!: Product[];

	@OneToMany(() => Order, (order) => order.customers)
	allOrders!: Order[];
}

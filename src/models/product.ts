import { ManyToOne, OneToOne, PrimaryKey, Property } from "@mikro-orm/core";
import Customer from "./customer";
import Order from "./order";

export default class Product {
	@PrimaryKey()
	id!: number;

	@Property()
	createdAt: Date = new Date();

	@Property({ onUpdate: () => new Date() })
	updatedAt: Date = new Date();

	@Property()
	name!: string;

	@Property()
	type!: string;

	@Property()
	price!: number;

	@Property()
	expiration!: Date;

	@ManyToOne(() => Customer)
	buyer!: Customer;

	@OneToOne(() => Order)
	order!: Order;
}

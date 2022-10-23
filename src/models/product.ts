import {
	Entity,
	ManyToOne,
	OneToOne,
	OptionalProps,
	PrimaryKey,
	Property,
	Unique,
} from "@mikro-orm/core";
import Customer from "./Customer";
import Order from "./Order";

@Entity()
export default class Product {
	[OptionalProps]?: "createdAt" | "updatedAt";
	@PrimaryKey()
	id!: number;

	@Property()
	createdAt: Date = new Date();

	@Property({ onUpdate: () => new Date() })
	updatedAt: Date = new Date();

	@Unique()
	@Property()
	name!: string;

	@Property()
	type!: string;

	@Property()
	price!: number;

	@Property()
	expiration!: Date;

	@ManyToOne(() => Customer, { nullable: true })
	buyer?: Customer;

	@OneToOne(() => Order, (order) => order.product, { nullable: true })
	order?: Order;
}

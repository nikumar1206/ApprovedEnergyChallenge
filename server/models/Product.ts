import {
	Collection,
	Entity,
	OneToMany,
	Property,
	Unique,
} from "@mikro-orm/core";
import { BaseEntity } from "./Base";
import Order from "./Order";

@Entity()
export default class Product extends BaseEntity {
	@Unique()
	@Property()
	name!: string;

	@Property()
	type!: string;

	@Property()
	price!: number;

	@Property()
	expiration!: Date;

	@OneToMany(() => Order, (order) => order.product, {
		orphanRemoval: true,
	})
	allOrders = Collection<Order>;
}

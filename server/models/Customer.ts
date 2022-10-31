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

	@OneToMany(() => Order, (order) => order.buyer, {
		orphanRemoval: true,
	})
	allOrders = Collection<Order>;
}

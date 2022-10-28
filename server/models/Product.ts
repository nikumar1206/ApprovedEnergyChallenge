import {
	Entity,
	ManyToOne,
	OneToMany,
	Property,
	Unique,
} from "@mikro-orm/core";
import { BaseEntity } from "./Base";
import Customer from "./Customer";
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

	@ManyToOne(() => Customer, { nullable: true })
	buyer?: Customer;

	@OneToMany(() => Order, (order) => order.product, {
		nullable: true,
		orphanRemoval: true,
	})
	order?: Order;
}

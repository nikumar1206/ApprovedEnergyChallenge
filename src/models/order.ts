import Customer from "./customer";
import Product from "./product";

import {
	Entity,
	ManyToOne,
	OneToOne,
	PrimaryKey,
	Property,
} from "@mikro-orm/core";

@Entity()
export default class Order {
	@PrimaryKey()
	id!: number;

	@Property()
	createdAt: Date = new Date();

	@Property({ onUpdate: () => new Date() })
	updatedAt: Date = new Date();

	@Property()
	quantity!: number;

	@Property()
	purchaseDate!: Date;

	@ManyToOne(() => Customer)
	customers!: Customer;

	@OneToOne(() => Product, (product) => product.order)
	product!: Product;
}

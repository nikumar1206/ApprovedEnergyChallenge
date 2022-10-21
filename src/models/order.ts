import {
	Entity,
	ManyToOne,
	OneToOne,
	OptionalProps,
	PrimaryKey,
	Property,
} from "@mikro-orm/core";
import Customer from "./Customer";
import Product from "./Product";

@Entity()
export default class Order {
	[OptionalProps]?: "createdAt" | "updatedAt";

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

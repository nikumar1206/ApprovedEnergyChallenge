import { Cascade, Entity, ManyToOne, Property } from "@mikro-orm/core";
import { BaseEntity } from "./Base";
import Customer from "./Customer";
import Product from "./Product";

@Entity()
export default class Order extends BaseEntity {
	@Property()
	quantity!: number;

	@Property()
	purchaseDate!: Date;

	@ManyToOne(() => Customer, { cascade: [Cascade.ALL] })
	buyer!: Customer;

	@ManyToOne(() => Product, { cascade: [Cascade.ALL] })
	product!: Product;
}

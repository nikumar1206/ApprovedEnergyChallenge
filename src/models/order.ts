import {
	Table,
	Column,
	Model,
	BelongsTo,
	ForeignKey,
} from "sequelize-typescript";
import Customer from "./customer";
import Product from "./product";

@Table
class Order extends Model {
	timestamps: true;

	@Column
	quantity: Number;

	@Column
	purchaseDate: Date;

	@ForeignKey(() => Customer)
	@Column
	customerId: number;

	@ForeignKey(() => Product)
	@Column
	productId: number;

	@BelongsTo(() => Customer)
	customer: Customer;

	@BelongsTo(() => Product)
	product: Product;
}
export default Order;

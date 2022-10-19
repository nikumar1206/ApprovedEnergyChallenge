import {
	Table,
	Column,
	Model,
	BelongsTo,
	ForeignKey,
	Length,
	Unique,
	Is,
} from "sequelize-typescript";
import Customer from "./customer";

@Table
class Product extends Model {
	timestamps: true;

	@Length({ msg: "Name must be longer than 3 characters", min: 3 })
	@Unique
	@Column
	name: string;

	@Column
	type: string;

	@Column
	price: number;

	@Is("DateValidation", (expDate) => {
		if (expDate < Date.now()) {
			throw new Error("Expiration date cannot be before the current date");
		}
	})
	@Column
	expiration: Date;

	@ForeignKey(() => Customer)
	@Column
	customerId: number;

	@BelongsTo(() => Customer)
	purchasers: Customer[];
}

export default Product;

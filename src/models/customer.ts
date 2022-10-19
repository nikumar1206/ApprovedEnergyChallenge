import {
	Table,
	Column,
	Model,
	HasMany,
	Length,
	Unique,
} from "sequelize-typescript";
import Product from "./product";

@Table
class Customer extends Model {
	timestamps: true;

	@Length({ msg: "Name must be longer than 3 characters", min: 3 })
	@Column
	name: string;

	@Length({ msg: "Address must be longer than 5 characters", min: 5 })
	@Column
	address: string;

	@Length({ msg: "Address must be longer than 5 characters", min: 5 })
	@Unique
	@Column
	email: string;

	@Length({
		msg: "Phone must be longer than 8 characters and less than 15.",
		min: 8,
		max: 15,
	})
	@Column
	phone: string;

	@HasMany(() => Product)
	products: Product[];
}

export default Customer;

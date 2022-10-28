import { OptionalProps, PrimaryKey, Property } from "@mikro-orm/core";

export abstract class BaseEntity {
	[OptionalProps]: "updatedAt" | "createdAt";

	@PrimaryKey()
	id!: number;

	@Property()
	createdAt: Date = new Date();

	@Property({ onUpdate: () => new Date() })
	updatedAt: Date = new Date();
}

import path from "path";
import { MikroORM, ReflectMetadataProvider } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import Customer from "./models/Customer";
import Order from "./models/Order";
import Product from "./models/Product";
import { BaseEntity } from "./models/Base";

export default {
	migrations: {
		path: path.join(__dirname, "migrations"),
		pathTs: path.join(path.resolve(), "src", "migrations"),
		glob: "!(*.d).{js,ts}", // matches migration files (all .js and .ts files, but not .d.ts)
	},
	seeder: {
		path: path.join(__dirname, "seeders"),
		pathTs: path.join(path.resolve(), "src", "seeders"),
		glob: "!(*.d).{js,ts}",
	},
	metadataProvider: ReflectMetadataProvider,
	entities: [BaseEntity, Product, Customer, Order],
	dbName: "ApprovedEnergyChallenge543",
	type: "postgresql",
	debug: true,
	snapshot: false,
} as Parameters<typeof MikroORM.init>[0];

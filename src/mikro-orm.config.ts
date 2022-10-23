import path from "path";
import { MikroORM, ReflectMetadataProvider } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import Customer from "./models/Customer";
import Order from "./models/Order";
import Product from "./models/Product";

export default {
	migrations: {
		path: path.join(__dirname, "migrations"),
		pathTs: path.join(path.resolve(), "src", "migrations"),
		glob: "!(*.d).{js,ts}", // matches migration files (all .js and .ts files, but not .d.ts)
	},
	metadataProvider: ReflectMetadataProvider,
	entities: [Product, Customer, Order],
	dbName: "ApprovedEnergyChallenge",
	type: "postgresql",
	debug: true,
	snapshot: false,
} as Parameters<typeof MikroORM.init>[0];

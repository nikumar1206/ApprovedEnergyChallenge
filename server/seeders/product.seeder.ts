import { Dictionary, EntityManager } from "@mikro-orm/core";
import { Seeder } from "@mikro-orm/seeder";
import Product from "../models/Product";

export class ProductSeeder extends Seeder {
	async run(em: EntityManager, context: Dictionary): Promise<void> {
		// will get persisted automatically
		context.product1 = em.create(Product, {
			name: "Apple Airpods",
			type: "technology",
			price: 300,
			expiration: new Date("03/20/2022"),
		});

		context.product2 = em.create(Product, {
			name: "Apple iPhone",
			type: "technology",
			price: 1000,
			expiration: new Date("10/20/2022"),
		});

		context.product3 = em.create(Product, {
			name: "Cheetos",
			type: "Snack",
			price: 2.99,
			expiration: new Date("03/20/2022"),
		});
		context.product4 = em.create(Product, {
			name: "Doritos",
			type: "Snack",
			price: 2.99,
			expiration: new Date("12/20/2022"),
		});
	}
}

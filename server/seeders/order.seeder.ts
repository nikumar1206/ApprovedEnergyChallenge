import { Dictionary, EntityManager } from "@mikro-orm/core";
import { Seeder } from "@mikro-orm/seeder";
import Order from "../models/Order";

export class OrderSeeder extends Seeder {
	async run(em: EntityManager, context: Dictionary): Promise<void> {
		// will get persisted automatically
		context.order1 = em.create(Order, {
			purchaseDate: new Date(),
			quantity: 5,
			buyer: context.customer2,
			product: context.product1,
		});
		context.product1.buyer = context.customer2;

		context.order1 = em.create(Order, {
			purchaseDate: new Date(),
			quantity: 5,
			buyer: context.customer3,
			product: context.product2,
		});
		context.product2.buyer = context.customer3;

		context.order1 = em.create(Order, {
			purchaseDate: new Date(),
			quantity: 5,
			buyer: context.customer1,
			product: context.product3,
		});
		context.product3.buyer = context.customer1;

		context.order4 = em.create(Order, {
			purchaseDate: new Date(),
			quantity: 5,
			buyer: context.customer1,
			product: context.product4,
		});
		context.product4.buyer = context.customer1;
	}
}

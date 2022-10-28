import { Dictionary, EntityManager } from "@mikro-orm/core";
import { Seeder } from "@mikro-orm/seeder";
import Customer from "../models/Customer";

export class CustomerSeeder extends Seeder {
	async run(em: EntityManager, context: Dictionary): Promise<void> {
		// will get persisted automatically
		context.customer1 = em.create(Customer, {
			name: "John Snow",
			email: "snow@wall.st",
			address: "123 Main Street",
			phone: "123-456-7890",
		});

		context.customer2 = em.create(Customer, {
			name: "Demo User",
			email: "demo@user.com",
			address: "125 Royal Street",
			phone: "555-555-5555",
		});

		context.customer3 = em.create(Customer, {
			name: "John Smith",
			email: "smith@john.com",
			address: "1210 Cheesecake Factory",
			phone: "098-765-4321",
		});
	}
}

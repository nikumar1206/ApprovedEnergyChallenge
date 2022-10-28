import { EntityManager } from "@mikro-orm/core";
import { Seeder } from "@mikro-orm/seeder";
import { CustomerSeeder } from "./customer.seeder";
import { OrderSeeder } from "./order.seeder";
import { ProductSeeder } from "./product.seeder";

export class DatabaseSeeder extends Seeder {
	run(em: EntityManager): Promise<void> {
		return this.call(em, [CustomerSeeder, ProductSeeder, OrderSeeder]);
	}
}

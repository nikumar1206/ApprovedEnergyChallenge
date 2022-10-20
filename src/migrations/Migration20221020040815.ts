import { Migration } from '@mikro-orm/migrations';

export class Migration20221020040815 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "customer" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" varchar(255) not null, "email" varchar(255) not null, "address" varchar(255) not null, "phone" varchar(255) not null);');
    this.addSql('alter table "customer" add constraint "customer_email_unique" unique ("email");');
    this.addSql('alter table "customer" add constraint "customer_phone_unique" unique ("phone");');

    this.addSql('create table "order" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "quantity" int not null, "purchase_date" timestamptz(0) not null, "customers_id" int not null);');

    this.addSql('alter table "order" add constraint "order_customers_id_foreign" foreign key ("customers_id") references "customer" ("id") on update cascade;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "order" drop constraint "order_customers_id_foreign";');

    this.addSql('drop table if exists "customer" cascade;');

    this.addSql('drop table if exists "order" cascade;');
  }

}

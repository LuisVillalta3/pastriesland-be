import { MigrationInterface, QueryRunner } from 'typeorm';

export class OrdersAndAddressesMigration1749171179664
  implements MigrationInterface
{
  name = 'OrdersAndAddressesMigration1749171179664';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."orders_paymentmethod_enum" AS ENUM('cash', 'card')`,
    );
    await queryRunner.query(
      `ALTER TABLE "orders" ADD "paymentMethod" "public"."orders_paymentmethod_enum" NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "paymentMethod"`);
    await queryRunner.query(`DROP TYPE "public"."orders_paymentmethod_enum"`);
  }
}

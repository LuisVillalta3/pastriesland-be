import { MigrationInterface, QueryRunner } from 'typeorm';

export class OrdersAndAddressesMigration1749170839776
  implements MigrationInterface
{
  name = 'OrdersAndAddressesMigration1749170839776';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "orders" ADD "address" text`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "address"`);
  }
}

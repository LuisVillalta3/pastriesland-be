import { MigrationInterface, QueryRunner } from 'typeorm';

export class ProductsUpdateMigration1748994667132
  implements MigrationInterface
{
  name = 'ProductsUpdateMigration1748994667132';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "products" ADD "isOutstanding" boolean NOT NULL DEFAULT false`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "products" DROP COLUMN "isOutstanding"`,
    );
  }
}

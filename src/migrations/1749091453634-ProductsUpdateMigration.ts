import { MigrationInterface, QueryRunner } from "typeorm";

export class ProductsUpdateMigration1749091453634 implements MigrationInterface {
    name = 'ProductsUpdateMigration1749091453634'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ADD "addons" character varying DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "products" ADD "flavors" character varying DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "products" ADD "design" character varying DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "design"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "flavors"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "addons"`);
    }

}

import { MigrationInterface, QueryRunner } from 'typeorm';

export class ImagesMigration1748738935555 implements MigrationInterface {
  name = 'ImagesMigration1748738935555';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "images" ("id" SERIAL NOT NULL, "path" character varying NOT NULL, "imageableType" character varying NOT NULL, "imageableId" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_1fe148074c6a1a91b63cb9ee3c9" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "images"`);
  }
}

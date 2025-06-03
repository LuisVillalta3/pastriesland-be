import { MigrationInterface, QueryRunner } from 'typeorm';

export class ContactsMigration1748972831652 implements MigrationInterface {
  name = 'ContactsMigration1748972831652';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "contacts" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "whatsapp" character varying NOT NULL, "message" text, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "contacts"`);
  }
}

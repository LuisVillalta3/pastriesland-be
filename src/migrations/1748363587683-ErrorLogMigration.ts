import { MigrationInterface, QueryRunner } from 'typeorm';

export class ErrorLogMigration1748363587683 implements MigrationInterface {
  name = 'ErrorLogMigration1748363587683';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "error_log" ("id" SERIAL NOT NULL, "message" character varying NOT NULL, "stack" text NOT NULL, "payload" text, "url" character varying NOT NULL, "context" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0284e7aa7afe77ea1ce1621c252" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "error_log"`);
  }
}

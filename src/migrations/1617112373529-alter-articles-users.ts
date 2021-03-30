import {MigrationInterface, QueryRunner} from "typeorm";

export class alterArticlesUsers1617112373529 implements MigrationInterface {
    name = 'alterArticlesUsers1617112373529'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "articles" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "articles" DROP COLUMN "rating"`);
        await queryRunner.query(`ALTER TABLE "articles" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "articles" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "articles" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "articles" DROP COLUMN "posted_user_id"`);
        await queryRunner.query(`ALTER TABLE "articles" ADD "url" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "articles" ADD "user_id" integer`);
        await queryRunner.query(`ALTER TABLE "articles" ADD CONSTRAINT "FK_87bb15395540ae06337a486a77a" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "articles" DROP CONSTRAINT "FK_87bb15395540ae06337a486a77a"`);
        await queryRunner.query(`ALTER TABLE "articles" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "articles" DROP COLUMN "url"`);
        await queryRunner.query(`ALTER TABLE "articles" ADD "posted_user_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "articles" ADD "updated_at" TIMESTAMP(0) NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "articles" ADD "created_at" TIMESTAMP(0) NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "articles" ADD "description" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "articles" ADD "rating" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "articles" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "updated_at" TIMESTAMP(0) NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" ADD "created_at" TIMESTAMP(0) NOT NULL DEFAULT now()`);
    }

}

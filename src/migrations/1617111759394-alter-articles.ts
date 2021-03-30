import {MigrationInterface, QueryRunner} from "typeorm";

export class alterArticles1617111759394 implements MigrationInterface {
    name = 'alterArticles1617111759394'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "articles" RENAME COLUMN "posted_by" TO "posted_user_id"`);
        await queryRunner.query(`ALTER TABLE "articles" DROP COLUMN "posted_user_id"`);
        await queryRunner.query(`ALTER TABLE "articles" ADD "posted_user_id" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "articles" DROP COLUMN "posted_user_id"`);
        await queryRunner.query(`ALTER TABLE "articles" ADD "posted_user_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "articles" RENAME COLUMN "posted_user_id" TO "posted_by"`);
    }

}

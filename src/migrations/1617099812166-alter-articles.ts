import {MigrationInterface, QueryRunner} from "typeorm";

export class alterArticles1617099812166 implements MigrationInterface {
    name = 'alterArticles1617099812166'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "articles" ADD "created_at" TIMESTAMP(0) NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "articles" ADD "updated_at" TIMESTAMP(0) NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "articles" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "articles" DROP COLUMN "created_at"`);
    }

}

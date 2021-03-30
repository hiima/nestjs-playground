import {MigrationInterface, QueryRunner} from "typeorm";

export class createArticles1617099409224 implements MigrationInterface {
    name = 'createArticles1617099409224'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "articles" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "rating" integer NOT NULL DEFAULT '0', "description" character varying NOT NULL, "posted_by" character varying NOT NULL, CONSTRAINT "PK_0a6e2c450d83e0b6052c2793334" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "articles"`);
    }

}

import {MigrationInterface, QueryRunner} from "typeorm";

export class alterUsers1617106135299 implements MigrationInterface {
    name = 'alterUsers1617106135299'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "posted_by"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "posted_by" character varying NOT NULL`);
    }

}

import {MigrationInterface, QueryRunner} from "typeorm";

export class addnewaccountcolum1617006288258 implements MigrationInterface {
    name = 'addnewaccountcolum1617006288258'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "newAccount" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "newAccount"`);
    }

}

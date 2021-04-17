import {MigrationInterface, QueryRunner} from "typeorm";

export class addPhoneNumberUser1615251578983 implements MigrationInterface {
    name = 'addPhoneNumberUser1615251578983'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "phone" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_8e1f623798118e629b46a9e6299" UNIQUE ("phone")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_8e1f623798118e629b46a9e6299"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "phone"`);
    }

}

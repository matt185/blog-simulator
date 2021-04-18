import {MigrationInterface, QueryRunner} from "typeorm";

export class modifyRelationship1618716139902 implements MigrationInterface {
    name = 'modifyRelationship1618716139902'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "FK_9e91e6a24261b66f53971d3f96b"`);
        await queryRunner.query(`ALTER TABLE "post" ADD "creator" integer`);
        await queryRunner.query(`ALTER TABLE "post" ADD CONSTRAINT "FK_9b8106eb7b42044451ada950c98" FOREIGN KEY ("creator") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "FK_9b8106eb7b42044451ada950c98"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "creator"`);
        await queryRunner.query(`ALTER TABLE "post" ADD CONSTRAINT "FK_9e91e6a24261b66f53971d3f96b" FOREIGN KEY ("creatorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}

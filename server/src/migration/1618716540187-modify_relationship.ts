import {MigrationInterface, QueryRunner} from "typeorm";

export class modifyRelationship1618716540187 implements MigrationInterface {
    name = 'modifyRelationship1618716540187'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "FK_9b8106eb7b42044451ada950c98"`);
        await queryRunner.query(`ALTER TABLE "post" RENAME COLUMN "creator" TO "creator_id"`);
        await queryRunner.query(`ALTER TABLE "post" ADD CONSTRAINT "FK_cdb7a69f6107ba4227908d6ed55" FOREIGN KEY ("creator_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "FK_cdb7a69f6107ba4227908d6ed55"`);
        await queryRunner.query(`ALTER TABLE "post" RENAME COLUMN "creator_id" TO "creator"`);
        await queryRunner.query(`ALTER TABLE "post" ADD CONSTRAINT "FK_9b8106eb7b42044451ada950c98" FOREIGN KEY ("creator") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}

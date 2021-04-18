import {MigrationInterface, QueryRunner} from "typeorm";

export class fixRelatioship1618729399145 implements MigrationInterface {
    name = 'fixRelatioship1618729399145'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "FK_cdb7a69f6107ba4227908d6ed55"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "creator_id"`);
        await queryRunner.query(`ALTER TABLE "post" ADD CONSTRAINT "FK_9e91e6a24261b66f53971d3f96b" FOREIGN KEY ("creatorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "FK_9e91e6a24261b66f53971d3f96b"`);
        await queryRunner.query(`ALTER TABLE "post" ADD "creator_id" integer`);
        await queryRunner.query(`ALTER TABLE "post" ADD CONSTRAINT "FK_cdb7a69f6107ba4227908d6ed55" FOREIGN KEY ("creator_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}

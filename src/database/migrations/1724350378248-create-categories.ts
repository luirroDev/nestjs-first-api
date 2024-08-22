import { MigrationInterface, QueryRunner } from 'typeorm';

export class createCategories1724350378248 implements MigrationInterface {
  name = 'createCategories1724350378248';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "product_categories_category" ("productId" integer NOT NULL, "categoryId" integer NOT NULL, CONSTRAINT "PK_17f2a361443184000ee8d79f240" PRIMARY KEY ("productId", "categoryId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_342d06dd0583aafc156e076379" ON "product_categories_category" ("productId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_15520e638eb4c46c4fb2c61c4b" ON "product_categories_category" ("categoryId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "category" ADD "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP`,
    );
    await queryRunner.query(
      `ALTER TABLE "category" ADD "update_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP`,
    );
    await queryRunner.query(`COMMENT ON COLUMN "category"."name" IS NULL`);
    await queryRunner.query(
      `ALTER TABLE "category" ADD CONSTRAINT "UQ_23c05c292c439d77b0de816b500" UNIQUE ("name")`,
    );
    await queryRunner.query(`COMMENT ON COLUMN "product"."created_at" IS NULL`);
    await queryRunner.query(`COMMENT ON COLUMN "product"."update_at" IS NULL`);
    await queryRunner.query(`COMMENT ON COLUMN "brand"."created_at" IS NULL`);
    await queryRunner.query(`COMMENT ON COLUMN "brand"."update_at" IS NULL`);
    await queryRunner.query(`COMMENT ON COLUMN "user"."created_at" IS NULL`);
    await queryRunner.query(`COMMENT ON COLUMN "user"."update_at" IS NULL`);
    await queryRunner.query(
      `COMMENT ON COLUMN "customer"."created_at" IS NULL`,
    );
    await queryRunner.query(`COMMENT ON COLUMN "customer"."update_at" IS NULL`);
    await queryRunner.query(
      `ALTER TABLE "product_categories_category" ADD CONSTRAINT "FK_342d06dd0583aafc156e0763790" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "product_categories_category" ADD CONSTRAINT "FK_15520e638eb4c46c4fb2c61c4b4" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "product_categories_category" DROP CONSTRAINT "FK_15520e638eb4c46c4fb2c61c4b4"`,
    );
    await queryRunner.query(
      `ALTER TABLE "product_categories_category" DROP CONSTRAINT "FK_342d06dd0583aafc156e0763790"`,
    );
    await queryRunner.query(`COMMENT ON COLUMN "customer"."update_at" IS NULL`);
    await queryRunner.query(
      `COMMENT ON COLUMN "customer"."created_at" IS NULL`,
    );
    await queryRunner.query(`COMMENT ON COLUMN "user"."update_at" IS NULL`);
    await queryRunner.query(`COMMENT ON COLUMN "user"."created_at" IS NULL`);
    await queryRunner.query(`COMMENT ON COLUMN "brand"."update_at" IS NULL`);
    await queryRunner.query(`COMMENT ON COLUMN "brand"."created_at" IS NULL`);
    await queryRunner.query(`COMMENT ON COLUMN "product"."update_at" IS NULL`);
    await queryRunner.query(`COMMENT ON COLUMN "product"."created_at" IS NULL`);
    await queryRunner.query(
      `ALTER TABLE "category" DROP CONSTRAINT "UQ_23c05c292c439d77b0de816b500"`,
    );
    await queryRunner.query(`COMMENT ON COLUMN "category"."name" IS NULL`);
    await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "update_at"`);
    await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "created_at"`);
    await queryRunner.query(`DROP INDEX "IDX_15520e638eb4c46c4fb2c61c4b"`);
    await queryRunner.query(`DROP INDEX "IDX_342d06dd0583aafc156e076379"`);
    await queryRunner.query(`DROP TABLE "product_categories_category"`);
  }
}

import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProduct1644718843206 implements MigrationInterface {
  private productTable = new Table({
    name: 'products',
    columns: [
      {
        name: 'id',
        type: 'uuid',
        isPrimary: true,
      },
      {
        name: 'name',
        type: 'varchar',
      },
      {
        name: 'manufacturer',
        type: 'varchar',
      },
      {
        name: 'quantity',
        type: 'int',
      },
      {
        name: 'value',
        type: 'float',
      },
    ],
  });
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(this.productTable);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable(this.productTable);
  }
}

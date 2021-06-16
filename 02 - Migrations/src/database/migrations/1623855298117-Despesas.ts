import {
  MigrationInterface,
  QueryRunner,
  Table,
} from 'typeorm';
 
export class Despesas1623855298117 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'despesas',
        columns: [
          {
            name: 'cod_despesa',
            type: 'serial',
            isPrimary: true,
            generationStrategy: 'increment',
          },
          {
            name: 'desc_despesa',
            type: 'varchar',
            length: '45',
            isNullable: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('despesas');
  }
}

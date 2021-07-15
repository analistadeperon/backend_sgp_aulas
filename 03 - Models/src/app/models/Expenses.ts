import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';

import Movements from './Movements';

@Entity('despesas')
class Expenses {
    @PrimaryGeneratedColumn('increment')
    cod_despesa: number;

    @Column('character varying', {length: 45})
    desc_despesa: string;

    @OneToMany(() => Movements, moviment => moviment.despesas)
    Movimento: Movements[];
}

export default Expenses;
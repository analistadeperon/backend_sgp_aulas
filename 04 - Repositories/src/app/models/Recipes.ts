import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';

import Movements from './Movements';

@Entity('receitas')
class Recipes {
    @PrimaryGeneratedColumn('increment')
    cod_receita: number;

    @Column('character varying', {length: 45})
    desc_receita: string;

    @OneToMany(() => Movements, moviment => moviment.receitas)
    Movimento: Movements[];
}

export default Recipes;
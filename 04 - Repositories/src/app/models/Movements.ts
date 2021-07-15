import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';

import Recipes from './Recipes';
import Expenses from './Expenses';

@Entity('movimentos')
class Movements {
    @PrimaryGeneratedColumn('increment')
    cod_movimento: number;

    @Column('character varying', {length: 45})
    desc_movimento: string;

    @Column()
    dt_movimento: Date;

    @Column('decimal', {precision: 10, scale: 2})
    valor: number;

    @Column('integer')
    cod_receita: number;    
    
    @Column('integer')
    cod_despesa: number;

    @ManyToOne(() => Recipes, recipe => recipe.Movimento, {
        cascade: true,
        eager: true
    })
    @JoinColumn({name: 'cod_receita'})
    receitas: Recipes;

    @ManyToOne(() => Expenses, expense => expense.Movimento, {
        cascade: true,
        eager: true
    })
    @JoinColumn({name: 'cod_despesa'})
    despesas: Expenses;
}

export default Movements;
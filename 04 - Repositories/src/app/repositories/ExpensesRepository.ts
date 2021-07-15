import {EntityRepository, Repository} from 'typeorm';
import Expenses from '../models/Expenses';

@EntityRepository(Expenses)
class ExpensesRepository extends Repository<Expenses>{
    public async findExpenses (desc_despesa: string): Promise<Expenses | null>{
        const findExpense = await this.findOne({
            where: {desc_despesa}
        });

        return findExpense || null;
    }

    public async findById (cod_despesa: number): Promise<Expenses | null>{
        const findId = await this.findOne({
            where: {cod_despesa}
        });

        return findId || null;
    }
}

export default ExpensesRepository;
import {EntityRepository, Repository} from 'typeorm';
import Movements from '../models/Movements';

@EntityRepository(Movements)
class MovementsRepository extends Repository<Movements>{
    public async findById (cod_movimento: number): Promise<Movements | null>{
        const findId = await this.findOne({
            where: {cod_movimento}
        });

        return findId || null;
    }
}

export default MovementsRepository;
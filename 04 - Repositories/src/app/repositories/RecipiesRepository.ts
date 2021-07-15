import {EntityRepository, Repository} from 'typeorm';
import Recipes from '../models/Recipes';

@EntityRepository(Recipes)
class RecipesRepository extends Repository<Recipes>{
    public async findRecipes (desc_receita: string): Promise<Recipes | null>{
        const findRecipie = await this.findOne({
            where: {desc_receita}
        });

        return findRecipie || null;
    }

    public async findById (cod_receita: number): Promise<Recipes | null>{
        const findId = await this.findOne({
            where: {cod_receita}
        });

        return findId || null;
    }
}

export default RecipesRepository;
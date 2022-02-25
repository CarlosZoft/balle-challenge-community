import { EntityRepository, Repository } from 'typeorm';
import { EnthusiasticEntity } from '../entity/Enthusiastic';

@EntityRepository(EnthusiasticEntity)
export class EnthusiasticRepository extends Repository<EnthusiasticEntity> {}

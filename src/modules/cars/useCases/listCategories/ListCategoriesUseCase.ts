import { Category } from '../../model/Category';
import { ICategoryRepository } from '../../repositories/implementations/ICategoriesRepository';

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoryRepository) {}

  execute(): Category[] {
    return this.categoriesRepository.list();
  }
}

export { ListCategoriesUseCase };

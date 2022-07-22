import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface Irequest {
    name : string;
    description : string;
}

class CreateCategoryUseCase {

    constructor( private categoriesRepository : ICategoriesRepository) {}

    execute( { description , name } : Irequest) : void {

        const categoryAlredyExists = this.categoriesRepository.findByName(name);

        if(categoryAlredyExists) {
            throw new Error("Category alredy exists!")
        }
        
    
        this.categoriesRepository.create( { name , description });
    }
}

export { CreateCategoryUseCase };
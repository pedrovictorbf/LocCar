import { ISpecificationsRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
    name : string ;
    description : string;
}

class CreateSpecificationUseCase {
    constructor( private specificationsRepository : ISpecificationsRepository) {}
    execute( { name , description} : IRequest) : void {
        const specificationAlredyExists = this.specificationsRepository.findByName(name);
        
        if( specificationAlredyExists ) {
            throw new Error("Specification Alredy exists !")
        }

        this.specificationsRepository.create({
            name ,
            description
        });
    }
}

export { CreateSpecificationUseCase };
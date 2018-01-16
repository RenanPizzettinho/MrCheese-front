import AbstractCrudService from "../abstract.crud.service";

export default class ConfiguracaoSevice extends AbstractCrudService {

    constructor($http){
        
        super($http, 'conf-preco');
    
    }

}

ConfiguracaoSevice.$inject = ['$http']
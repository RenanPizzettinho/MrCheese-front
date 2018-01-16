import AbstractCrudService from "../abstract.crud.service";

export default class ClienteService extends AbstractCrudService {

    constructor($http){
    
        super($http, 'cliente');
    
    }

}

ClienteService.$inject = ['$http'];
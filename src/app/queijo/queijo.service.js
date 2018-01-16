import AbstractCrudService from '../abstract.crud.service';
import { WEB_PATH } from '../util/commons';

export default class QueijoService extends AbstractCrudService {

    constructor($http) {

        super($http, 'queijo');

        this.$http = $http;

    }

    byStatus(status) {

        return this.$http.get(`${WEB_PATH}/queijo/status?status=${status}`)
            .then((response) => response.data);

    }

}

QueijoService.$inject = ['$http'];
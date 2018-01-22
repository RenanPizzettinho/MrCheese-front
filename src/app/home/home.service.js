import { WEB_PATH } from "../util/commons";

export default class HomeService {

    constructor($http) {

        this.$http = $http;

    }

    dash() {

        return this.$http.get(`${WEB_PATH}/home/dash`)
            .then((response) => response.data);

    }

    date(dataIni, dataFim) {

        return this.$http.get(`${WEB_PATH}/home/date?inicio=${dataIni}&fim=${dataFim}`)
            .then((response) => response.data);

    }

}

HomeService.$inject = ['$http'];
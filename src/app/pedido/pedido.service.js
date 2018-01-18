import AbstractCrudService from "../abstract.crud.service";
import { WEB_PATH } from "../util/commons";

export default class PedidoService extends AbstractCrudService {

    constructor($http) {

        super($http, 'pedido');

        this.$http = $http;

    }

    byStatus(status) {

        return this.$http.get(`${WEB_PATH}/pedido/status?status=${status}`)
            .then((response) => response.data);

    }

    efetuar(pedido) {

        if (pedido.id) {

            return this.$http.put(`${WEB_PATH}/pedido/efetuar/${pedido.id}`, pedido);

        }
        return this.$http.post(`${WEB_PATH}/pedido/efetuar`, pedido);

    }

    aprovar(pedido) {

        return this.$http.put(`${WEB_PATH}/pedido/${pedido.id}/aprovar`, pedido);

    }

    entregar(pedido) {

        return this.$http.put(`${WEB_PATH}/pedido/${pedido.id}/entregar`, pedido);

    }

    cancelar(pedido) {

        return this.$http.put(`${WEB_PATH}/pedido/${pedido.id}/cancelar`, pedido);

    }

}

PedidoService.$inject = ['$http']
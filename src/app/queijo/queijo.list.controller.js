import * as moment from "moment";
import util from "../util/util";

export default class QueijoListController {

    constructor($state, QueijoService, Notification) {

        this.$state = $state;

        this.queijos = [];
        this.QueijoService = QueijoService;
        this.formatarData = util.formatarData;
        this.Notification = Notification;

        this.onInit();

    }

    onInit() {

        this.disponivel();

    }

    editar(queijo) {

        this.$state.go('queijo.edit', { id: queijo.id });

    }

    excluir(queijo) {

        this.QueijoService.remove(queijo.id)
            .then(() => {
             
                this.Notification.success('Queijo excluido');
                this.getQueijos();
            
            }).catch(() => this.Notification.error('Erro ao excluir'));

    }

    disponivel() {

        this.byStatus('DIPONIVEL_PARA_VENDA');
        this.isDisponivel = true;

    }

    emPedido() {

        this.byStatus('EM_PEDIDO');
        this.isEmPedido = true;

    }

    vendido() {

        this.byStatus('VENDIDO');
        this.isVendido = true;

    }

    entregue() {

        this.byStatus('ENTREGUE');
        this.isEntregue = true;

    }

    byStatus(status) {

        this.desmarcar();

        this.QueijoService.byStatus(status)
            .then((queijos) => this.queijos = queijos);

    }

    desmarcar() {

        this.isDisponivel = false;
        this.isEmPedido = false;
        this.isVendido = false;
        this.isEntregue = false;

    }

}

QueijoListController.$inject = ['$state', 'QueijoService', 'Notification'];
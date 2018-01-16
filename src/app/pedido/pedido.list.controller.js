import util from "../util/util";


export default class PedidoListController {

    constructor($state, PedidoService) {

        this.pedidos = [];
        this.$state = $state;
        this.PedidoService = PedidoService;
        this.formatarData = util.formatarData;

        this.onInit();

    }

    onInit() {

        this.emAberto();

    }

    emAberto() {

        this.byStatus('EM_ABERTO');
        this.isEmAberto = true;

    }

    aprovado() {

        this.byStatus('APROVADO');
        this.isAprovado = true;

    }


    entregue() {

        this.byStatus('ENTREGUE');
        this.isEntregue = true;

    }


    cancelado() {

        this.byStatus('CANCELADO');
        this.isCancelado = true;

    }

    byStatus(status) {

        this.desmarcar();

        this.PedidoService.byStatus(status)
            .then((pedidos) => this.pedidos = pedidos);

    }

    desmarcar() {

        this.isEmAberto = false;
        this.isAprovado = false;
        this.isEntregue = false;
        this.isCancelado = false;

    }

    itemFormat(item) {

        return `R$${item.valor} - ${item.queijo.peso}Kg`;

    }

    valorTotal(pedidos) {

        return pedidos.map(item => item.valor)
            .reduce((x, y) => x + y);

    }

    pesoTotal(pedidos) {

        return pedidos.map(item => item.queijo.peso)
            .reduce((x, y) => x + y);

    }

    aprovar(pedido) {

        this.PedidoService.aprovar(pedido)
            .then(() => this.emAberto());

    }

    entregar(pedido) {

        this.PedidoService.entregar(pedido)
            .then(() => this.aprovado());

    }

    cancelar(pedido) {

        this.PedidoService.cancelar(pedido)
            .then(() => (this.isEmAberto) ? this.emAberto() : this.aprovado());

    }

    editar(pedido) {

        this.$state.go('pedido.edit', { id : pedido.id });

    }

    excluir(pedido) {

        this.PedidoService.remove(pedido.id)
            .then(() => (this.isEmAberto) ? this.emAberto() : this.aprovado());

    }

}

PedidoListController.$inject = ['$state', 'PedidoService'];
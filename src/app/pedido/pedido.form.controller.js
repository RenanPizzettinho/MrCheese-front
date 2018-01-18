import util from '../util/util';

export default class PedidoFormController {

    constructor($stateParams, $state, PedidoService, QueijoService, ConfiguracaoSevice, ClienteService, Notification) {

        this.$state = $state;

        this.pedido = {};
        this.pedido.itens = [];
        this.queijos = [];
        this.clientes = [];

        this.PedidoService = PedidoService;
        this.QueijoService = QueijoService;
        this.ConfiguracaoSevice = ConfiguracaoSevice;
        this.ClienteService = ClienteService;
        this.Notification = Notification;

        if ($stateParams.id) {
            this.PedidoService.findById($stateParams.id)
                .then((pedido) => {

                    this.pedido = pedido;
                    this.pedido.data = new Date(pedido.data);

                });
        }

        this.init();

    }

    init() {

        this.getPreco();
        this.getQueijos();
        this.getClientes();

    }

    getPreco() {

        this.ConfiguracaoSevice.findAll()
            .then((preco) => this.preco = preco);

    }

    getClientes() {

        this.ClienteService.findAll()
            .then((clientes) => this.clientes = clientes)

    }

    getQueijos() {

        this.QueijoService.byStatus('DIPONIVEL_PARA_VENDA')
            .then((queijos) => this.queijos = queijos);

    }

    queijoItemFormat(queijo) {

        if (this.preco == undefined) {
            return `${queijo.peso}Kg (${util.formatarData(queijo.lote)})`
        }

        return `R$${queijo.peso * this.preco.valor} - ${queijo.peso}Kg (${util.formatarData(queijo.lote)})`;

    }

    addItem(queijo) {

        this.pedido.itens.push({ queijo: queijo, valor: queijo.peso * this.preco.valor });
        this.queijos = this.queijos.filter((item) => item.id != queijo.id);

    }

    salvar() {

        this.PedidoService.efetuar(this.pedido)
            .then(() => {

                this.Notification.success('Pedido realizado');
                this.$state.go('pedido.list');

            }).catch(() => this.Notification.error('Erro ao cadastar o pedido'));

    }

    removerItem(remover) {

        this.pedido.itens = this.pedido.itens.filter((item) => item.queijo.id != remover.queijo.id);
        this.queijos.push(remover.queijo);

    }

    valorTotal() {

        if(this.pedido.itens.length == 0) return;

        return this.pedido.itens.map(item => item.valor)
            .reduce((x, y) => x + y);

    }

    pesoTotal() {

        if(this.pedido.itens.length == 0) return;

        return this.pedido.itens.map(item => item.queijo.peso)
            .reduce((x, y) => x + y);

    }

}

PedidoFormController.$inject = ['$stateParams', '$state', 'PedidoService', 'QueijoService', 'ConfiguracaoSevice', 'ClienteService', 'Notification'];

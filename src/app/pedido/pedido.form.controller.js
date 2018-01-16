export default class PedidoFormController {

    constructor($stateParams, $state, PedidoService, QueijoService, ConfiguracaoSevice, ClienteService) {

        this.$state = $state;

        this.pedido = {};
        this.pedido.itens = [];
        this.queijos = [];
        this.queijosSelecionados = [];
        this.clientes = [];

        this.PedidoService = PedidoService;
        this.QueijoService = QueijoService;
        this.ConfiguracaoSevice = ConfiguracaoSevice;
        this.ClienteService = ClienteService;

        if ($stateParams.id) {
            this.PedidoService.findById($stateParams.id)
                .then((pedido) => {
                    this.pedido.cliente = pedido.cliente;
                    this.pedido.data = new Date(pedido.data);
                    this.pedido.itens = pedido.itens;
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
            return `${queijo.peso}Kg (${queijo.lote})`
        }

        return `R$${queijo.peso * this.preco.valor} - ${queijo.peso}Kg (${queijo.lote})`;

    }

    addItem(queijo) {

        this.pedido.itens.push({ queijo: queijo, valor: null });

    }

    salvar() {

        this.PedidoService.efetuar(this.pedido)
            .then(() => this.$state.go('pedido.list'));

    }

}

PedidoFormController.$inject = ['$stateParams', '$state', 'PedidoService', 'QueijoService', 'ConfiguracaoSevice', 'ClienteService'];

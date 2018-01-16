export default class ClienteListController {

    constructor($state, ClienteService) {

        this.$state = $state;
        this.clientes = [];
        this.ClienteService = ClienteService;

        this.onInit();

    }

    onInit() {

        this.getClientes();

    }

    getClientes() {

        this.ClienteService.findAll()
            .then((clientes) => this.clientes = clientes);

    }

    editar(cliente) {

        this.$state.go('cliente.edit', { id: cliente.id });

    }

    excluir(cliente) {

        this.ClienteService.remove(cliente.id)
            .then(() => this.getClientes());

    }

}

ClienteListController.$inject = ['$state', 'ClienteService'];

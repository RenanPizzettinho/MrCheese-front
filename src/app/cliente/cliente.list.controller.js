export default class ClienteListController {

    constructor($state, ClienteService, Notification) {

        this.$state = $state;
        this.clientes = [];
        this.ClienteService = ClienteService;
        this.Notification = Notification;

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
            .then(() => {

                this.getClientes();
                this.Notification.success('Registro removido');

            }).catch(() => {

                this.Notification.error('Erro ao remover o registro');

            });

    }

}

ClienteListController.$inject = ['$state', 'ClienteService', 'Notification'];

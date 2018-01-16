export default class ClienteFormController {

    constructor($stateParams, $state, ClienteService) {

        this.cliente = {};
        this.$state = $state;
        this.ClienteService = ClienteService;

        if ($stateParams.id) {

            this.ClienteService.findById($stateParams.id)
                .then((cliente) => this.cliente = cliente);

        }

    }

    cadastrar() {

        this.ClienteService.save(this.cliente)
            .then(() => this.$state.go('cliente.list'));


    }

}

ClienteFormController.$inject = ['$stateParams', '$state', 'ClienteService']

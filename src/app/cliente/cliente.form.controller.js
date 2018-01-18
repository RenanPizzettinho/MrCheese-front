export default class ClienteFormController {

    constructor($stateParams, $state, ClienteService, Notification) {

        this.cliente = {};
        this.$state = $state;
        this.ClienteService = ClienteService;
        this.Notification = Notification;

        if ($stateParams.id) {

            this.ClienteService.findById($stateParams.id)
                .then((cliente) => this.cliente = cliente);

        }

    }

    cadastrar() {

        this.ClienteService.save(this.cliente)
            .then(() => {
                
                this.Notification.success('Registro criado');
                this.$state.go('cliente.list')
            
            }).catch(() => this.Notification.error('Erro ao criar o registro'));


    }

}

ClienteFormController.$inject = ['$stateParams', '$state', 'ClienteService', 'Notification'];

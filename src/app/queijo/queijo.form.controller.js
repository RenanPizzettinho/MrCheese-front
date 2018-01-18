export default class QueijoFormController {

    constructor($stateParams, $state, QueijoService, Notification) {

        this.queijo = {};
        this.$state = $state;
        this.QueijoService = QueijoService;
        this.Notification = Notification;

        if ($stateParams.id) {

            this.QueijoService.findById($stateParams.id)
                .then((queijo) => {
                    this.queijo = queijo;
                    this.queijo.lote = new Date(this.queijo.lote);
                }).catch(() => this.Notification.error('Erro ao recuperar queijo para edição'));

        }

    }

    salvar() {

        this.QueijoService.save(this.queijo)
            .then(() => {
                
                this.Notification.success('Queijo cadastrado');
                this.$state.go('queijo.list');
            
            })
            .catch(() => this.Notification.error('Erro ao salvar'));;

    }

}

QueijoFormController.$inject = ['$stateParams', '$state', 'QueijoService', 'Notification'];

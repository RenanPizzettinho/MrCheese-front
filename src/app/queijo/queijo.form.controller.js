export default class QueijoFormController {

    constructor($stateParams, $state, QueijoService) {

        this.queijo = {};
        this.$state = $state;
        this.QueijoService = QueijoService;

        if ($stateParams.id) {

            this.QueijoService.findById($stateParams.id)
                .then((queijo) => this.queijo = queijo);

        }

    }

    salvar() {

        this.QueijoService.save(this.queijo)
            .then(() => this.$state.go('queijo.list'));

    }

}

QueijoFormController.$inject = ['$stateParams', '$state', 'QueijoService'];

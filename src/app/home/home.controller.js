export default class HomeController {

    constructor(HomeService) {

        this.dash = {};
        this.filtrado = {};
        this.HomeService = HomeService;

        this.init();

    }

    init() {

        this.getDash();

    }

    getDash() {

        this.HomeService.dash()
            .then((dash) => this.dash = dash);

    }

    filtrar() {
        console.log()

        this.HomeService.date(new Date(this.dataIni).toISOString(), new Date(this.dataFim).toISOString())
            .then((filtrado) => this.filtrado = filtrado);

    }

    percentual(total, indicador) {

        return (100 / total) * indicador;

    }

}

HomeController.$inject = ['HomeService'];
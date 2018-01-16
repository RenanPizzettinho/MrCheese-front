import ConfiguracaoSevice from "./configuracao.service";

export default class ConfigFormController {

    constructor(ConfiguracaoSevice) {

        this.config = {};
        this.ConfiguracaoSevice = ConfiguracaoSevice;

        this.getConfigAtual();

    }

    getConfigAtual() {

        this.ConfiguracaoSevice.findAll()
            .then((config) => this.config = config);

    }

    salvar(){

        this.ConfiguracaoSevice.save(this.config);

    }

}

ConfigFormController.$inject = ['ConfiguracaoSevice']
import ConfiguracaoSevice from "./configuracao.service";

export default class ConfigFormController {

    constructor(ConfiguracaoSevice, Notification) {

        this.config = {};
        this.ConfiguracaoSevice = ConfiguracaoSevice;
        this.Notification = Notification;

        this.getConfigAtual();

    }

    getConfigAtual() {

        this.ConfiguracaoSevice.findAll()
            .then((config) => this.config = config);

    }

    salvar() {

        this.ConfiguracaoSevice.save(this.config)
            .then(() => this.Notification.success('Configuração atualizada'))
            .catch(() => this.Notification.error('Erro ao atualizar'));

    }

}

ConfigFormController.$inject = ['ConfiguracaoSevice', 'Notification'];
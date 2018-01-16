import ConfigFormController from './configuracao.form.controller'
import ConfiguracaoSevice from './configuracao.service';

export const configPrecoConfig = (modulo) => {

  modulo.service('ConfiguracaoSevice', ConfiguracaoSevice);

  return ['$stateProvider', '$urlRouterProvider', stateConfig];

}

const stateConfig = ($stateProvider, $urlRouterProvider) => {
  $stateProvider
    .state('config', {
      template: require('@views/default.html'),
      url: '/config',
      onEnter: ['$state', function ($state) {
        $state.go('config.edit')
      }]
    })
    .state('config.edit', {
      template: require('./configuracao.form.html'),
      controller: ConfigFormController,
      controllerAs: 'vm'
    });
};

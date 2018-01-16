import ClienteListController from './cliente.list.controller'
import ClienteFormController from './cliente.form.controller'
import ClienteService from './cliente.service';

export const clienteConfig = (modulo) => {

  modulo.service('ClienteService', ClienteService);

  return ['$stateProvider', '$urlRouterProvider', stateConfig]

}

const stateConfig = ($stateProvider, $urlRouterProvider) => {

  $stateProvider
    .state('cliente', {
      template: require('@views/default.html'),
      url: '/clientes',
      onEnter: ['$state', function ($state) {
        $state.go('cliente.list')
      }]
    })
    .state('cliente.list', {
      template: require('./cliente.list.html'),
      url: '/list',
      controller: ClienteListController,
      controllerAs: 'vm'
    })
    .state('cliente.new', {
      template: require('./cliente.form.html'),
      url: '/new',
      controller: ClienteFormController,
      controllerAs: 'vm'
    })
    .state('cliente.edit', {
      template: require('./cliente.form.html'),
      url: '/{id}',
      controller: ClienteFormController,
      controllerAs: 'vm'
    });

};
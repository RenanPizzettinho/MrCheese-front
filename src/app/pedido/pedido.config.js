import PedidoListController from './pedido.list.controller'
import PedidoFormController from './pedido.form.controller'
import PedidoService from './pedido.service';

export const pedidoConfig = (modulo) => {

  modulo.service('PedidoService', PedidoService);

  return ['$stateProvider', '$urlRouterProvider', stateConfig];

}

const stateConfig = ($stateProvider, $urlRouterProvider) => {

  $stateProvider
    .state('pedido', {
      template: require('@views/default.html'),
      url: '/pedidos',
      onEnter: ['$state', function ($state) {
        $state.go('pedido.list')
      }]
    })
    .state('pedido.list', {
      template: require('./pedido.list.html'),
      url: '/list',
      controller: PedidoListController,
      controllerAs: 'vm'
    })
    .state('pedido.new', {
      template: require('./pedido.form.html'),
      url: '/new',
      controller: PedidoFormController,
      controllerAs: 'vm'
    })
    .state('pedido.edit', {
      template: require('./pedido.form.html'),
      url: '/{id}',
      controller: PedidoFormController,
      controllerAs: 'vm'
    });

};
import QueijoListController from './queijo.list.controller'
import QueijoFormController from './queijo.form.controller'
import QueijoService from './queijo.service';

export const queijoConfig = (modulo) =>{

  modulo.service('QueijoService', QueijoService);

  return ['$stateProvider', '$urlRouterProvider', stateConfig];

}

const stateConfig = ($stateProvider, $urlRouterProvider) => {

  $stateProvider
    .state('queijo', {
      template: require('@views/default.html'),
      url: '/queijos',
      onEnter: ['$state', function ($state) {
        $state.go('queijo.list')
      }]
    })
    .state('queijo.list', {
      template: require('./queijo.list.html'),
      url: '/list',
      controller: QueijoListController,
      controllerAs: 'vm'
    })
    .state('queijo.new', {
      template: require('./queijo.form.html'),
      url: '/new',
      controller: QueijoFormController,
      controllerAs: 'vm'
    })
    .state('queijo.edit', {
      template: require('./queijo.form.html'),
      url: '/{id}',
      controller: QueijoFormController,
      controllerAs: 'vm'
    });

  };


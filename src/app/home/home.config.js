export const homeConfig = (modulo) => {

    modulo.service();

    return ['$stateProvider', '$urlRouterProvider', stateConfig];

}

const stateConfig = ($stateProvider, $urlRouterProvider) => {

    $stateProvider
        .state('home', {
            template: require('@views/default.html'),
            url: '/home',
            onEnter: ['$state', function ($state) {
                $state.go('home.dash')
            }]
        })
        .state('home.dash', {
            template: require('./home.html'),
            url: '/dash',
            controllerAs: 'vm'
        })

};


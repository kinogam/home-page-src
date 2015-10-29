export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('new-page', {
      url: '/new-page',
      templateUrl: 'app/newPage/new-page.html',
      controller: 'NewPageController',
      controllerAs: 'newPage'
    });

  $urlRouterProvider.otherwise('/');
}

import './routes/main/main.controller';
import './routes/message/message.controller';

export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/routes/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('home.message', {
      url: 'message/',
      templateUrl: 'app/routes/message/message.html',
      controller: 'MessageController',
      controllerAs: 'message'
    });

  $urlRouterProvider.otherwise('/');
}

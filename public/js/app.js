angular.module('remingtonApp', ['ui.router', 'bc.Flickity'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('remington');

  $stateProvider
  .state('remington', {
    url: '/remington',
    templateUrl: './views/remington/remington.html',
    controller: "remingtonCtrl"
  })
  $stateProvider
  .state('rifles', {
    url: '/rifles',
    templateUrl: './views/rifleviews/rifle.html',
    controller: "remingtonCtrl"
  })
  $stateProvider
  .state('modernrifles', {
    url: '/modernrifles',
    templateUrl: './views/modernrifles/modernrifles.html'
  })
  $stateProvider
  .state('model-r-15', {
    url: '/model-r-15',
    templateUrl: './views/rifleviews/themodelr-15.html'
  })
  $stateProvider
  .state('model-R-15-vtr-predator-moe-16-1/2', {
    url: '/model-R-15-vtr-predator-moe-16-1/2',
    templateUrl: './views/gunviews/model-R-15-vtr-predator-moe-16-1/2.html'
  })
})

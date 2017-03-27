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
  .state('shotguns', {
    url: '/shotguns',
    templateUrl: './views/shotgun/shotgun.html',
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
  .state('model-r15-vtr-predator-moe-fixed-stock', {
    url: '/model-r15-vtr-predator-moe-fixed-stock',
    templateUrl: './views/gunviews/model-r15-vtr-predator-moe-fixed-stock.html'
  })
  $stateProvider
  .state('model-r15-vtr-predator-moe-16-1/2', {
    url: '/model-r15-vtr-predator-moe-16-1/2',
    templateUrl: './views/gunviews/model-r15-second.html'
  })
  $stateProvider
  .state('model-r15-vtr-predator-rifle', {
    url: '/model-r15-vtr-predator-rifle',
    templateUrl: './views/gunviews/model-r15-predator-rifle.html'
  })
  $stateProvider
  .state('model-r15-vtr-ss-varmint', {
    url: '/model-r15-vtr-ss-varmint',
    templateUrl: './views/gunviews/model-r15-vtr-ss-varmint.html'
  })
  $stateProvider
  .state('model-r15-vtr-predator-moe-22', {
    url: '/model-r15-vtr-predator-moe-22',
    templateUrl: './views/gunviews/model-r15-vtr-predator-moe-22.html'
  })
  $stateProvider
  .state('bolt-action', {
    url: '/bolt-action',
    templateUrl: './views/bolt-action.html'
  })
  $stateProvider
  .state('autoloading', {
    url: '/autoloading',
    templateUrl: './views/shotgun/autoloading.html'
  })
  $stateProvider
  .state('pumpaction', {
    url: '/pumpaction',
    templateUrl: './views/shotgun/pumpaction.html'
  })
})

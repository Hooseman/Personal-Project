angular.module('remingtonApp').directive('shotgunTemplate', function() {
  return {
    restrict: 'EA',
    templateUrl:"./views/rifleviews/shotgun-template.html",
    controller: "remingtonCtrl"
  }
});

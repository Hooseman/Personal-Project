angular.module('remingtonApp').directive('navBar', function() {
  return {
    restrict: 'E',
    templateUrl:"./navBar.html",
    controller: "remingtonCtrl"
  }
});

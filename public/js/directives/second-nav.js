angular.module('remingtonApp').directive('secondBar', function() {
  return {
    restrict: 'E',
    templateUrl:"./secondnav.html",
    controller: "remingtonCtrl"
  }
});

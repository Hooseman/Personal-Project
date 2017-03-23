angular.module('remingtonApp').directive('footerNav', function() {
  return {
    restrict: 'E',
    templateUrl:"./footerNav.html",
    controller: "remingtonCtrl"
  }
});

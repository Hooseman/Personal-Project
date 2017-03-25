angular.module('remingtonApp').directive('hoverammunition', function() {
  return {
    restrict: 'E',
    templateUrl:"./views/navviews/ammunition-dropdown.html",
    controller: 'remingtonCtrl',
    link: function(scope, element, attrs) {

    }
  }

});

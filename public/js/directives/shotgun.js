angular.module('remingtonApp').directive('hovershotgun', function() {
  return {
    restrict: 'E',
    templateUrl:"./views/navviews/shotgun-dropdown-nav.html",
    controller: 'remingtonCtrl',
    link: function(scope, element, attrs) {

    }
  }

});

angular.module('remingtonApp').directive('ammunitionTemplate', function() {
  return {
    restrict: 'EA',
    templateUrl:"./views/rifleviews/ammunition-template.html",
    controller: "remingtonCtrl"
  }
});

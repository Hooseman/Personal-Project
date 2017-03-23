angular.module('remingtonApp').directive('rifleTemplate', function() {
  return {
    restrict: 'EA',
    templateUrl:"./views/rifleviews/rifle-template.html",
    controller: "remingtonCtrl"
  }
});

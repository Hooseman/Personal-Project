angular.module('remingtonApp').directive('handgunTemplate', function() {
  return {
    restrict: 'EA',
    templateUrl:"./views/rifleviews/handgun-template.html",
    controller: "remingtonCtrl"
  }
});

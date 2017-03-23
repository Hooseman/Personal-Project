angular.module('remingtonApp').directive('hoverhandgun', function() {
  return {
    restrict: 'E',
    templateUrl:"./views/navviews/handgun-dropdown-nav.html",
    controller: 'remingtonCtrl',
    link: function(scope, element, attrs) {

    }
  }

});

'use strict';

angular.module('remingtonApp', ['ui.router', 'bc.Flickity']).config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('remington');

  $stateProvider.state('remington', {
    url: '/remington',
    templateUrl: './views/remington/remington.html',
    controller: "remingtonCtrl"
  });
  $stateProvider.state('rifles', {
    url: '/rifles',
    templateUrl: './views/rifleviews/rifle.html',
    controller: "remingtonCtrl"
  });
  $stateProvider.state('shotguns', {
    url: '/shotguns',
    templateUrl: './views/shotgun/shotgun.html',
    controller: "remingtonCtrl"
  });
  $stateProvider.state('modernrifles', {
    url: '/modernrifles',
    templateUrl: './views/modernrifles/modernrifles.html'
  });
  $stateProvider.state('model-r-15', {
    url: '/model-r-15',
    templateUrl: './views/rifleviews/themodelr-15.html'
  });
  $stateProvider.state('model-r15-vtr-predator-moe-fixed-stock', {
    url: '/model-r15-vtr-predator-moe-fixed-stock',
    templateUrl: './views/gunviews/model-r15-vtr-predator-moe-fixed-stock.html'
  });
  $stateProvider.state('model-r15-vtr-predator-moe-16-1/2', {
    url: '/model-r15-vtr-predator-moe-16-1/2',
    templateUrl: './views/gunviews/model-r15-second.html'
  });
  $stateProvider.state('model-r15-vtr-predator-rifle', {
    url: '/model-r15-vtr-predator-rifle',
    templateUrl: './views/gunviews/model-r15-predator-rifle.html'
  });
  $stateProvider.state('model-r15-vtr-ss-varmint', {
    url: '/model-r15-vtr-ss-varmint',
    templateUrl: './views/gunviews/model-r15-vtr-ss-varmint.html'
  });
  $stateProvider.state('model-r15-vtr-predator-moe-22', {
    url: '/model-r15-vtr-predator-moe-22',
    templateUrl: './views/gunviews/model-r15-vtr-predator-moe-22.html'
  });
  $stateProvider.state('model-700-cdl-sf', {
    url: '/model-700-cdl-sf',
    templateUrl: './views/gunviews/model-700-cdl-sf.html'
  });
  $stateProvider.state('model-700-tactical-chassis', {
    url: '/model-700-tactical-chassis',
    templateUrl: './views/gunviews/model-700-tactical-chassis.html'
  });
  $stateProvider.state('model-700-vtr', {
    url: '/model-700-vtr',
    templateUrl: './views/gunviews/model-700-vtr.html'
  });
  $stateProvider.state('v3-field-sport-mo-blades', {
    url: '/v3-field-sport-mo-blades',
    templateUrl: './views/gunviews/v3-field-sport-mo-blades.html'
  });
  $stateProvider.state('v3-field-sport-mobu-country', {
    url: '/v3-field-sport-mobu-country',
    templateUrl: './views/gunviews/v3-field-sport-mobu-country.html'
  });
  $stateProvider.state('bolt-action', {
    url: '/bolt-action',
    templateUrl: './views/bolt-action.html'
  });
  $stateProvider.state('autoloading', {
    url: '/autoloading',
    templateUrl: './views/shotgun/autoloading.html'
  });
  $stateProvider.state('pumpaction', {
    url: '/pumpaction',
    templateUrl: './views/shotgun/pumpaction.html'
  });
});
'use strict';

angular.module('remingtonApp').controller('remingtonCtrl', function ($scope, mainService) {

    $scope.find = "                SEARCH";
    $scope.showRifle = false;
    $scope.showPassion = false;

    $scope.clickPassion = function () {
        $scope.showPassion = !showPassion;
    };
    $scope.hoverRifle = function () {
        $scope.showRifle = !$scope.showRifle;
        $scope.showShotgun = false;
        $scope.showHandgun = false;
        $scope.showAmmunition = false;
    };

    $scope.leaveRifle = function () {
        $scope.showRifle = !$scope.showRifle;
    };

    $scope.showShotgun = false;

    $scope.hoverShotgun = function () {
        $scope.showShotgun = !$scope.showShotgun;
        $scope.showRifle = false;
        $scope.showHandgun = false;
        $scope.showAmmunition = false;
    };

    $scope.leaveShotgun = function () {
        $scope.showShotgun = !$scope.showShotgun;
    };

    $scope.showHandgun = false;

    $scope.hoverHandgun = function () {
        $scope.showHandgun = !$scope.showHandgun;
        $scope.showRifle = false;
        $scope.showShotgun = false;
        $scope.showAmmunition = false;
    };

    $scope.leaveHandgun = function () {
        $scope.showHandgun = !$scope.showHandgun;
    };

    $scope.showAmmunition = false;

    $scope.hoverAmmunition = function () {
        $scope.showAmmunition = !$scope.showAmmunition;
        $scope.showRifle = false;
        $scope.showShotgun = false;
        $scope.showHandgun = false;
    };

    $scope.leaveAmmunition = function () {
        $scope.showAmmunition = !$scope.showAmmunition;
    };

    $scope.myCustomOptions = {
        cellSelector: '.mySlideClassName',
        initialIndex: 1,
        prevNextButtons: true,
        wrapAround: true
    };
    mainService.getRifles().then(function (response) {
        $scope.rifles = response;
        // console.log($scope.rifles)
    });

    //Rifle//
    $scope.clickRifleTemplate = function (id) {
        var array = $scope.rifles;
        for (var i = 0; i < array.length; i++) {
            if (array[i].id === id) {
                $scope.name = array[i].name;
                $scope.class = array[i].class;
                $scope.desc = array[i].desc;
                $scope.modelNum = array[i].modelNum;
                $scope.dollar = array[i].dollar;
                if (array[i].cents === "") {
                    $scope.cents = "00";
                } else {
                    $scope.cents = array[i].cents;
                }
                $scope.imageurl = array[i].imageurl;
            }
        }
        console.log($scope.rifles);
    };

    mainService.getShotguns().then(function (response) {
        $scope.shotguns = response;
        // console.log($scope.rifles)
    });
    //Shotgun//
    $scope.clickShotgunTemplate = function (id) {
        var array = $scope.shotguns;
        for (var i = 0; i < array.length; i++) {
            if (array[i].id === id) {
                $scope.name = array[i].name;
                $scope.class = array[i].class;
                $scope.desc = array[i].desc;
                $scope.modelNum = array[i].modelNum;
                $scope.dollar = array[i].dollar;
                if (array[i].cents === "") {
                    $scope.cents = "00";
                } else {
                    $scope.cents = array[i].cents;
                }
                $scope.imageurl = array[i].imageurl;
            }
        }
        console.log($scope.shotgun);
    };

    mainService.getHandguns().then(function (response) {
        $scope.handguns = response;
        // console.log($scope.rifles)
    });
    //Handgun//
    $scope.clickHandgunTemplate = function (id) {
        var array = $scope.handguns;
        for (var i = 0; i < array.length; i++) {
            if (array[i].id === id) {
                $scope.name = array[i].name;
                $scope.class = array[i].class;
                $scope.desc = array[i].desc;
                $scope.modelNum = array[i].modelNum;
                $scope.dollar = array[i].dollar;
                if (array[i].cents === "") {
                    $scope.cents = "00";
                } else {
                    $scope.cents = array[i].cents;
                }
                $scope.imageurl = array[i].imageurl;
            }
        }
        console.log($scope.handgun);
    };

    mainService.getAmmunition().then(function (response) {
        $scope.ammunition = response;
        // console.log($scope.rifles)
    });
    //Ammunition//
    $scope.clickAmmunitionTemplate = function (id) {
        var array = $scope.ammunition;
        for (var i = 0; i < array.length; i++) {
            if (array[i].id === id) {
                $scope.name = array[i].name;
                $scope.class = array[i].class;
                $scope.desc = array[i].desc;
                $scope.modelNum = array[i].modelNum;
                $scope.dollar = array[i].dollar;
                if (array[i].cents === "") {
                    $scope.cents = "00";
                } else {
                    $scope.cents = array[i].cents;
                }
                $scope.imageurl = array[i].imageurl;
            }
        }
        console.log($scope.ammunition);
    };

    $scope.clickBoltAction = function () {
        $scope.showBoltAction = true;
        $scope.showMuzzleLoading = false;
        $scope.showModernSporting = false;
        $scope.showPumpAction = false;
        $scope.RimFire = false;
    };
    //
    $scope.clickModernSporting = function () {
        $scope.showModernSporting = !$scope.showModernSporting;
        $scope.showBoltAction = false;
        $scope.showMuzzleLoading = false;
        $scope.showPumpAction = false;
        $scope.RimFire = false;
    };
    //
    $scope.clickMuzzleLoading = function () {
        $scope.showMuzzleLoading = !$scope.showMuzzleLoading;
        $scope.showBoltAction = false;
        $scope.showModernSporting = false;
        $scope.showPumpAction = false;
        $scope.RimFire = false;
    };

    $scope.clickPumpaction = function () {
        $scope.showPumpAction = !$scope.showPumpAction;
        $scope.RimFire = false;
        $scope.showMuzzleLoading = false;
        $scope.showBoltAction = false;
        $scope.showModernSporting = false;
    };

    $scope.clickRimfire = function () {
        $scope.showRimFire = !$scope.showRimFire;
        $scope.showPumpAction = false;
        $scope.showMuzzleLoading = false;
        $scope.showBoltAction = false;
        $scope.showModernSporting = false;
    };

    $scope.clickShotPumpaction = function () {
        $scope.showShotPumpAction = !$scope.showShotPumpAction;
        $scope.AutoLoading = false;
    };

    $scope.clickAutoLoading = function () {
        $scope.showAutoLoading = !$scope.showAutoLoading;
        $scope.showShotPumpAction = false;
    };

    $scope.clickShotShell = function () {
        $scope.showShotShell = !$scope.showShotShell;
        $scope.showComponents = false;
        $scope.showRimfire = false;
        $scope.showHandgun = false;
        $scope.showCenterFireRifle = false;
    };

    $scope.clickCenterFireRifle = function () {
        $scope.showCenterFireRifle = !$scope.showCenterFireRifle;
        $scope.showComponents = false;
        $scope.showRimfire = false;
        $scope.showHandgun = false;
        $scope.showShotShell = false;
    };

    $scope.clickHandgun = function () {
        $scope.showHandgun = !$scope.showHandgun;
        $scope.showComponents = false;
        $scope.showRimfire = false;
        $scope.showCenterFireRifle = false;
        $scope.showShotShell = false;
    };

    $scope.clickRimfire = function () {
        $scope.showRimfire = !$scope.showRimfire;
        $scope.showComponents = false;
        $scope.showHandgun = false;
        $scope.showCenterFireRifle = false;
        $scope.showShotShell = false;
    };

    $scope.clickComponents = function () {
        $scope.showComponents = !$scope.showComponents;
        $scope.showRimfire = false;
        $scope.showHandgun = false;
        $scope.showCenterFireRifle = false;
        $scope.showShotShell = false;
    };
});
'use strict';

angular.module('remingtonApp').directive('ammunitionTemplate', function () {
  return {
    restrict: 'EA',
    templateUrl: "./views/rifleviews/ammunition-template.html",
    controller: "remingtonCtrl"
  };
});
'use strict';

angular.module('remingtonApp').directive('hoverammunition', function () {
  return {
    restrict: 'E',
    templateUrl: "./views/navviews/ammunition-dropdown.html",
    controller: 'remingtonCtrl',
    link: function link(scope, element, attrs) {}
  };
});
'use strict';

angular.module('remingtonApp').directive('footerNav', function () {
  return {
    restrict: 'E',
    templateUrl: "./footerNav.html",
    controller: "remingtonCtrl"
  };
});
'use strict';

angular.module('remingtonApp').directive('handgunTemplate', function () {
  return {
    restrict: 'EA',
    templateUrl: "./views/rifleviews/handgun-template.html",
    controller: "remingtonCtrl"
  };
});
'use strict';

angular.module('remingtonApp').directive('hoverhandgun', function () {
  return {
    restrict: 'E',
    templateUrl: "./views/navviews/handgun-dropdown-nav.html",
    controller: 'remingtonCtrl',
    link: function link(scope, element, attrs) {}
  };
});
'use strict';

angular.module('remingtonApp').directive('navBar', function () {
  return {
    restrict: 'E',
    templateUrl: "./navBar.html",
    controller: "remingtonCtrl"
  };
});
'use strict';

angular.module('remingtonApp').directive('rifleTemplate', function () {
  return {
    restrict: 'EA',
    templateUrl: "./views/rifleviews/rifle-template.html",
    controller: "remingtonCtrl"
  };
});
'use strict';

angular.module('remingtonApp').directive('hoverrifle', function () {
  return {
    restrict: 'E',
    templateUrl: "./views/navviews/dropdown-nav.html",
    controller: 'remingtonCtrl',
    link: function link(scope, element, attrs) {}
  };
});
'use strict';

angular.module('remingtonApp').directive('secondBar', function () {
  return {
    restrict: 'E',
    templateUrl: "./secondnav.html",
    controller: "remingtonCtrl"
  };
});
'use strict';

angular.module('remingtonApp').directive('shotgunTemplate', function () {
  return {
    restrict: 'EA',
    templateUrl: "./views/rifleviews/shotgun-template.html",
    controller: "remingtonCtrl"
  };
});
'use strict';

angular.module('remingtonApp').directive('hovershotgun', function () {
  return {
    restrict: 'E',
    templateUrl: "./views/navviews/shotgun-dropdown-nav.html",
    controller: 'remingtonCtrl',
    link: function link(scope, element, attrs) {}
  };
});
'use strict';

angular.module('remingtonApp').directive('topCarousel', function () {
  return {
    restrict: 'E',
    templateUrl: "./views/remington/topCarousel.html",
    controller: function controller($scope) {
      function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
          slideIndex = 1;
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        setTimeout(showSlides, 6000);
      }

      var slideIndex = 0;
      showSlides(slideIndex);

      function plusSlides(n) {
        showSlides(slideIndex += n);
      }

      function currentSlide(n) {
        showSlides(slideIndex = n);
      }
    }
  };
});
'use strict';

angular.module('remingtonApp').service('mainService', function ($http) {
  this.getRifles = function () {
    return $http.get('/api/rifles').then(function (response) {
      console.log(response.data);
      return response.data;
    });
  };

  this.getShotguns = function () {
    return $http.get('/api/shotguns').then(function (response) {
      // console.log(response.data);
      return response.data;
    });
  };

  this.getHandguns = function () {
    return $http.get('/api/handguns').then(function (response) {
      // console.log(response.data);
      return response.data;
    });
  };

  this.getAmmunition = function () {
    return $http.get('/api/ammunition').then(function (response) {
      // console.log(response.data);
      return response.data;
    });
  };
});
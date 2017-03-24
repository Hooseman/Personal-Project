angular.module('remingtonApp').controller('remingtonCtrl', function($scope,mainService) {

    $scope.find = "                SEARCH";
    $scope.showRifle = false;

    $scope.hoverRifle = function() {
        $scope.showRifle = !$scope.showRifle;
        $scope.showShotgun = false;
        $scope.showHandgun = false;
    }

    $scope.leaveRifle = function() {
        $scope.showRifle = !$scope.showRifle;
    }

    $scope.showShotgun = false;

    $scope.hoverShotgun = function() {
        $scope.showShotgun = !$scope.showShotgun;
        $scope.showRifle = false;
        $scope.showHandgun = false;
    }

    $scope.leaveShotgun = function() {
        $scope.showShotgun = !$scope.showShotgun;
    }

    $scope.showHandgun = false;

    $scope.hoverHandgun = function() {
        $scope.showHandgun = !$scope.showHandgun;
          $scope.showRifle = false;
          $scope.showShotgun = false;
    }

    $scope.leaveHandgun = function() {
        $scope.showHandgun = !$scope.showHandgun;
    }

    $scope.myCustomOptions = {
        cellSelector: '.mySlideClassName',
        initialIndex: 1,
        prevNextButtons: true
    };
mainService.getRifles().then(function(response){
  $scope.rifles=response;
  // console.log($scope.rifles)
})
//rifledefaultvalues//
// $scope.name = $scope.rifles[0].name;
// $scope.class = $scope.rifles[0].class;
// $scope.desc = $scope.rifles[0].desc;
// $scope.modelNum = $scope.rifles[0].modelNum;
// $scope.dollar = $scope.rifles[0].dollar;
// $scope.cents = $scope.rifles[0].cents;
// $scope.imageurl = $scope.rifles[0].imageurl;
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
          if (array[i].cents === ""){
            $scope.cents = "00";
          }else{
            $scope.cents = array[i].cents;
          }
          $scope.imageurl = array[i].imageurl;
        }
      }
console.log($scope.rifles)
    }

    mainService.getShotguns().then(function(response){
      $scope.shotguns=response;
      // console.log($scope.rifles)
    })
        //Shotgun//
        $scope.clickShotgunTemplate = function(id) {
          var array = $scope.shotguns;
          for (var i = 0; i < array.length; i++) {
            if (array[i].id === id) {
              $scope.name = array[i].name;
              $scope.class = array[i].class;
              $scope.desc = array[i].desc;
              $scope.modelNum = array[i].modelNum;
              $scope.dollar = array[i].dollar;
              if (array[i].cents === ""){
                $scope.cents = "00";
              }else{
                $scope.cents = array[i].cents;
              }
              $scope.imageurl = array[i].imageurl;
            }
          }
    console.log($scope.shotgun)
        }

        mainService.getHandguns().then(function(response){
          $scope.handguns=response;
          // console.log($scope.rifles)
        })
            //Handgun//
            $scope.clickHandgunTemplate = function(id){
              var array = $scope.handguns;
              for (var i = 0; i < array.length; i++) {
                if (array[i].id === id) {
                  $scope.name = array[i].name;
                  $scope.class = array[i].class;
                  $scope.desc = array[i].desc;
                  $scope.modelNum = array[i].modelNum;
                  $scope.dollar = array[i].dollar;
                  if (array[i].cents === ""){
                    $scope.cents = "00";
                  }else{
                    $scope.cents = array[i].cents;
                  }
                  $scope.imageurl = array[i].imageurl;
                }
              }
        console.log($scope.handgun)
            }
    // $scope.showBoltAction = true;
    // $scope.showModernSporting = false;
    // $scope.showMuzzleLoading = false;
    // $scope.showPumpAction = false;
    // $scope.RimFire = false;
    //
    // $scope.showModel700 = true;
    // $scope.showModelSeven = false;
    // $scope.showModel783 = false;
    //
    // $scope.clickModel700 = function() {
    //     $scope.showModel700 = true;
    //     $scope.showModelSeven = false;
    //     $scope.showModel783 = false;
    // }
    // $scope.clickModelSeven = function() {
    //     $scope.showModelSeven = !$scope.showModelSeven;
    //     $scope.showModel700 = false;
    //     $scope.showModel783 = false;
    // }
    //
    // $scope.clickModel783 = function() {
    //     $scope.showModel783 = !$scope.showModel783;
    //     $scope.showModelSeven = false;
    //     $scope.showModel700 = false;
    // }
    //
    $scope.clickBoltAction = function() {
        $scope.showBoltAction = true;
        $scope.showMuzzleLoading = false;
        $scope.showModernSporting = false;
        $scope.showPumpAction = false;
        $scope.RimFire = false;
    }
    //
    $scope.clickModernSporting = function() {
        $scope.showModernSporting = !$scope.showModernSporting;
        $scope.showBoltAction = false;
        $scope.showMuzzleLoading = false;
        $scope.showPumpAction = false;
        $scope.RimFire = false;
    }
    //
    $scope.clickMuzzleLoading = function() {
        $scope.showMuzzleLoading = !$scope.showMuzzleLoading;
        $scope.showBoltAction = false;
        $scope.showModernSporting = false;
        $scope.showPumpAction = false;
        $scope.RimFire = false;
    }

    $scope.clickPumpaction = function() {
        $scope.showPumpAction = !$scope.showPumpAction;
        $scope.RimFire = false;
        $scope.showMuzzleLoading = false;
        $scope.showBoltAction = false;
        $scope.showModernSporting = false;
    }

    $scope.clickRimfire = function() {
        $scope.showRimFire = !$scope.showRimFire;
        $scope.showPumpAction = false;
        $scope.showMuzzleLoading = false;
        $scope.showBoltAction = false;
        $scope.showModernSporting = false;
    }

    $scope.clickShotPumpaction = function() {
        $scope.showShotPumpAction = !$scope.showShotPumpAction;
        $scope.AutoLoading = false;

    }

    $scope.clickAutoLoading = function() {
        $scope.showAutoLoading = !$scope.showAutoLoading;
        $scope.showShotPumpAction = false;

    }

    console.log('hi')
    // //Modern rifle//
    // $scope.showModelR15 = true;
    // $scope.showModelR25G11 = false;
    //
    // $scope.clickModelR15 = function() {
    //     $scope.showModelR15 = true;
    //     $scope.showModelR25G11 = false;
    //     $scope.showModel700 = false;
    // }
    // $scope.clickModelR25G11 = function() {
    //     $scope.showModelR25G11 = !$scope.showModelR25G11;
    //     $scope.showModelR15 = false;
    //     $scope.showModel700 = false;
    // }

});

angular.module('remingtonApp').controller('remingtonCtrl', function($scope,mainService) {

    $scope.find = "                SEARCH";
    $scope.showRifle = false;
    $scope.showPassion = false;

    $scope.clickPassion = function() {
      $scope.showPassion = !showPassion;
    }
    $scope.hoverRifle = function() {
        $scope.showRifle = !$scope.showRifle;
        $scope.showShotgun = false;
        $scope.showHandgun = false;
        $scope.showAmmunition = false;
    }

    $scope.leaveRifle = function() {
        $scope.showRifle = !$scope.showRifle;
    }

    $scope.showShotgun = false;

    $scope.hoverShotgun = function() {
        $scope.showShotgun = !$scope.showShotgun;
        $scope.showRifle = false;
        $scope.showHandgun = false;
        $scope.showAmmunition = false;
    }

    $scope.leaveShotgun = function() {
        $scope.showShotgun = !$scope.showShotgun;
    }

    $scope.showHandgun = false;

    $scope.hoverHandgun = function() {
        $scope.showHandgun = !$scope.showHandgun;
          $scope.showRifle = false;
          $scope.showShotgun = false;
          $scope.showAmmunition = false;
    }

    $scope.leaveHandgun = function() {
        $scope.showHandgun = !$scope.showHandgun;
    }

    $scope.showAmmunition = false;

    $scope.hoverAmmunition = function() {
        $scope.showAmmunition = !$scope.showAmmunition;
          $scope.showRifle = false;
          $scope.showShotgun = false;
          $scope.showHandgun = false;
    }

    $scope.leaveAmmunition = function() {
        $scope.showAmmunition = !$scope.showAmmunition;
    }

    $scope.myCustomOptions = {
        cellSelector: '.mySlideClassName',
        initialIndex: 1,
        prevNextButtons: true,
        wrapAround: true
    };
mainService.getRifles().then(function(response){
  $scope.rifles=response;
  // console.log($scope.rifles)
})

    //Rifle//
    $scope.clickRifleTemplate = id => {
      let array = $scope.rifles;
      for (let i = 0; i < array.length; i++) {
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
        $scope.clickShotgunTemplate = id => {
          let array = $scope.shotguns;
          for (let i = 0; i < array.length; i++) {
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
            $scope.clickHandgunTemplate = id => {
              let array = $scope.handguns;
              for (let i = 0; i < array.length; i++) {
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

            mainService.getAmmunition().then(function(response){
              $scope.ammunition=response;
              // console.log($scope.rifles)
            })
                //Ammunition//
                $scope.clickAmmunitionTemplate = id => {
                  let array = $scope.ammunition;
                  for (let i = 0; i < array.length; i++) {
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
            console.log($scope.ammunition)
                }

    $scope.clickBoltAction = () => {
        $scope.showBoltAction = true;
        $scope.showMuzzleLoading = false;
        $scope.showModernSporting = false;
        $scope.showPumpAction = false;
        $scope.RimFire = false;
    }
    //
    $scope.clickModernSporting = () => {
        $scope.showModernSporting = !$scope.showModernSporting;
        $scope.showBoltAction = false;
        $scope.showMuzzleLoading = false;
        $scope.showPumpAction = false;
        $scope.RimFire = false;
    }
    //
    $scope.clickMuzzleLoading = () => {
        $scope.showMuzzleLoading = !$scope.showMuzzleLoading;
        $scope.showBoltAction = false;
        $scope.showModernSporting = false;
        $scope.showPumpAction = false;
        $scope.RimFire = false;
    }

    $scope.clickPumpaction = () => {
        $scope.showPumpAction = !$scope.showPumpAction;
        $scope.RimFire = false;
        $scope.showMuzzleLoading = false;
        $scope.showBoltAction = false;
        $scope.showModernSporting = false;
    }

    $scope.clickRimfire = () => {
        $scope.showRimFire = !$scope.showRimFire;
        $scope.showPumpAction = false;
        $scope.showMuzzleLoading = false;
        $scope.showBoltAction = false;
        $scope.showModernSporting = false;
    }

    $scope.clickShotPumpaction = () => {
        $scope.showShotPumpAction = !$scope.showShotPumpAction;
        $scope.AutoLoading = false;

    }

    $scope.clickAutoLoading = () => {
        $scope.showAutoLoading = !$scope.showAutoLoading;
        $scope.showShotPumpAction = false;

    }

    $scope.clickShotShell = () => {
        $scope.showShotShell = !$scope.showShotShell;
        $scope.showComponents = false;
        $scope.showRimfire = false;
        $scope.showHandgun = false;
        $scope.showCenterFireRifle = false;
    }

    $scope.clickCenterFireRifle = () => {
        $scope.showCenterFireRifle = !$scope.showCenterFireRifle;
        $scope.showComponents = false;
        $scope.showRimfire = false;
        $scope.showHandgun = false;
        $scope.showShotShell = false;
    }

    $scope.clickHandgun = () => {
        $scope.showHandgun = !$scope.showHandgun;
        $scope.showComponents = false;
        $scope.showRimfire = false;
        $scope.showCenterFireRifle = false;
        $scope.showShotShell = false;
    }

    $scope.clickRimfire = () => {$scope.showRimfire = !$scope.showRimfire;
        $scope.showComponents = false;
        $scope.showHandgun = false;
        $scope.showCenterFireRifle = false;
        $scope.showShotShell = false;
    }

    $scope.clickComponents = () => {
        $scope.showComponents = !$scope.showComponents;
        $scope.showRimfire = false;
        $scope.showHandgun = false;
        $scope.showCenterFireRifle = false;
        $scope.showShotShell = false;
    }


});

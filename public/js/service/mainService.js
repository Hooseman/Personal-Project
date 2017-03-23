angular.module('remingtonApp').service('mainService', function($http){
  this.getRifles = function (){
    return $http.get('/api/rifles').then(function(response){
      console.log(response.data);
      return response.data;
    })
  }

  this.getShotguns = function (){
    return $http.get('./data/shotgun.json').then(function(response){
      // console.log(response.data);
      return response.data;
    })
  }

  this.getHandguns = function (){
    return $http.get('./data/handgun.json').then(function(response){
      // console.log(response.data);
      return response.data;
    })
  }
})

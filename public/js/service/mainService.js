angular.module('remingtonApp').service('mainService', function($http){
  this.getRifles = function (){
    return $http.get('/api/rifles').then(function(response){
      console.log(response.data);
      return response.data;
    })
  }

  this.getShotguns = function (){
    return $http.get('/api/shotguns').then(function(response){
      // console.log(response.data);
      return response.data;
    })
  }

  this.getHandguns = function (){
    return $http.get('/api/handguns').then(function(response){
      // console.log(response.data);
      return response.data;
    })
  }

  this.getAmmunition = function (){
    return $http.get('/api/ammunition').then(function(response){
      // console.log(response.data);
      return response.data;
    })
  }
})

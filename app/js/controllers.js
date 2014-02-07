'use strict'; // makes sure that you're using the most up to date JS

var spacecatApp = angular.module('spacecatApp', []);

spacecatApp.controller('CatListCtrl', function($scope, $http){ //$scope is a place where we store resources. An object where all of the data is.
  $http.get('cats/cats.json').success(function(data){  //make a get request to your JSON file. This can be a request to twitter, another website, a rails app, whatever. Call success on it which is executed if the get request is succesful. 
    $scope.cats = data                                
  });

  $scope.orderProp = 'name';

});
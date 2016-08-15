'use strict';

/**
 * @ngdoc function
 * @name monprototypeApp.controller:WeatherCtrl
 * @description
 * # WeatherCtrl
 * Controller of the monprototypeApp
 */
angular.module('monprototypeApp')
  .controller('WeatherCtrl', function ($scope,$http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.hola = "hola mundo!";
  });

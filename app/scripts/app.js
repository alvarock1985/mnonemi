'use strict';

/**
 * @ngdoc overview
 * @name monprototypeApp
 * @description
 * # monprototypeApp
 *
 * Main module of the application.
 */
angular
  .module('monprototypeApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'uiGmapgoogle-maps',
    'angular-openweathermap'

  ])

  .config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyByQZ2a_BMxahqOX0p-YgVtNePQW2mXYUQ',
      v: '3.20', //defaults to latest 3.X anyhow
      libraries: 'weather,geometry,visualization'
    });
  })

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/map', {
        templateUrl: 'views/maps.html',
        controller: 'MapCtrl',
        controllerAs: 'map'
      })
      .when('/weather', {
        templateUrl: 'views/weather.html',
        controller: 'WeatherCtrl',
        controllerAs: 'weather'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

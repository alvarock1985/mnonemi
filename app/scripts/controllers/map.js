'use strict';

/**
 * @ngdoc function
 * @name monprototypeApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the monprototypeApp
 */
angular.module('monprototypeApp')

  .controller('MapCtrl', function ($scope, uiGmapGoogleMapApi) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.marca = 0;
    $scope.map = {center: {latitude: -27.3771861, longitude:-70.3560286 },
                  zoom: 7,
                  markers: [],

                  events: {
                    click: function (map, eventName, originalEventArgs) {
                      var e = originalEventArgs[0];
                      var lat = e.latLng.lat(), lon = e.latLng.lng();
                      var marker = {
                        id: Date.now(),
                        options:{draggable:true},
                        coords: {
                          latitude: lat,
                          longitude: lon
                        }
                      };
                      $scope.map.markers.push(marker);
                      console.log($scope.map.markers);
                      $scope.$apply();
                      $scope.marca = $scope.marker.coords.latitude;


                    }
                  }


    };

    $scope.options = {scrollwheel: true};
    $scope.marker = {
      id: 0,
      coords: {
        latitude: -27.3771861,
        longitude:-70.3560286
      },
      options:{draggable:true}
    };

    $scope.windowOptions = {
      visible: false
    };

    $scope.onClick = function() {
      $scope.windowOptions.visible = !$scope.windowOptions.visible;

    };

    $scope.closeClick = function() {
      $scope.windowOptions.visible = false;
    };


    $scope.title = "Window Title!";
    $scope.url = '#/weather';

    uiGmapGoogleMapApi.then(function(maps){

    });
  });

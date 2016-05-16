'use strict';

/**
 * @ngdoc overview
 * @name venuesindilimanApp
 * @description
 * # venuesindilimanApp
 *
 * Main module of the application.
 */
angular
  .module('venuesindilimanApp', [
    //leaflet modules
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui-leaflet',
    // 'leaflet-directive',
	//initial modules
    'ngAnimate',
    'ngAria',
    'ngMessages',
    'ngTouch'
  ])
  .config(function($routeProvider){
  	$routeProvider
  		.when('/',{
  			templateUrl:'views/main.html',
  			controller: 'MainCtrl'
  		})
  		.otherwise({
  			redirectTo:'/'
  		});

  });

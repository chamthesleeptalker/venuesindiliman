'use strict';

/**
 * @ngdoc function
 * @name venuesindilimanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Filter of the venuesindilimanApp
 */
// var venuesApp = angular.module('venuesindilimanApp');
// venuesApp.filter('filter', [function() {
//   return function(geojson, searchProperty, searchValue) {
//     var matches = {'type': 'FeatureCollection', 'features': []};
//     angular.forEach(geojson.features, function(featureObject, featureKey) {
//       if (featureObject.properties.hasOwnProperty(searchProperty)) {
//         var property = featureObject.properties[searchProperty].toLowerCase();
//         var search = searchValue.toLowerCase();
//         if (property.indexOf(search) > -1) {
//           matches.features.push(featureObject);
//         }
//       }
//     });
//     return matches;
//   };
// }]);
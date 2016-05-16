'use strict';

/**
 * @ngdoc function
 * @name venuesindilimanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the venuesindilimanApp
 */
var venuesApp = angular.module('venuesindilimanApp');
//controller
venuesApp.controller('MainCtrl',['$scope','$http','$filter','leafletData' ,function ($scope,$http,$filter,leafletData) {
	$scope.search = {
	  'Name': '',
	  'Bldg': ''
	};
    // Declare empty geojson object
$scope.geojson = {};
  	angular.extend($scope,{
  		center:{
  			lat:14.65505475290859,
  			lng:121.06891751289368,
  			zoom:16
  		},
  		layers:{
			baselayers:{
  				osmMapnik:{
  					name: 'OSM Mapnik',
  					url:'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  					maxZoom:19,
  					type:'xyz',
  					attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  				}
			},
  			overlays:{

  			}
  		},
  		events:{
  			map: {
	            enable: ['zoomstart', 'drag', 'click', 'mousemove'],
	            logic: 'emit'
            },
            markers: {
	          enable: ['drag','click']
	          //logic: 'emit'
	        }
  		}
  	});

	$http.get("json/venues.geojson").success(function(data,status){

		$scope.data=data;
		$scope.geojson.data=data;

	  	var redMarker = L.AwesomeMarkers.icon({
		    icon: 'heart',
		    markerColor: 'red',
		    prefix:'fa'
		  });

		function pointToLayer(feature,latlng){
			return L.marker(latlng,{icon: redMarker});
		}

		function onEachFeature(feature, layer) {
	        layer.bindPopup("<b>Name:</b> " + feature.properties.Name +
	            "<br><b>Building:" + feature.properties.Bldg + "");
	    }

		//$scope.venue_directory=data.features;

		angular.extend($scope,{
	  		geojson:{
	  			data:$scope.geojson.data,
	  			onEachFeature: onEachFeature,
	  			pointToLayer:pointToLayer
	  		}
	  	});

  	});
  // // Start watching the search model
  //       $scope.$watch('search', function (newVal, oldVal) {
  //           // Watch gets fired on scope initialization and when empty so differentiate:
  //           if (newVal !== oldVal && newVal !== '') {
  //               // Has searchvalue, apply sourcedata, propertyname and searchstring to filter
  //               // and assign return value of filter to geojson 
  //               $scope.geojson.data = $filter('filter')($scope.data, 'NAME', newVal);
  //           } else {
  //               // Search has been initialized or emptied, assign sourcedata to geojsonobject
  //               $scope.geojson.data = $scope.data;
  //           }
  //       });
  }]);








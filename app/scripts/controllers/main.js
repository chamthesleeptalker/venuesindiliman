'use strict';

/**
 * @ngdoc function
 * @name venuesindilimanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the venuesindilimanApp
 */
angular.module('venuesindilimanApp')
  .controller('MainCtrl',['$scope','$http','$filter','leafletData' ,function ($scope,$http,$filter,leafletData) {
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

		$scope.venue_directory=data.features;

		angular.extend($scope,{
	  		geojson:{
	  			data:$scope.venue_directory,
	  			onEachFeature: onEachFeature,
	  			pointToLayer:pointToLayer
	  		}
	  	});
  	});


  }]);






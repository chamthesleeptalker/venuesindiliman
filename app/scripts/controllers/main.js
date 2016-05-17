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
venuesApp.controller('MainCtrl',['$scope' ,function ($scope) {

  $scope.sortType     = 'Name'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchVenue   = "";



 $scope.venues=[
  {"ID":0,"Name":"P & G Room","Bldg":"Melchor Hall","Capacity":100,"Available_Hours":"8am-9pm","Lights":"Yes","Lights_In":0,"Lights_Out":0,"Lights_Other":0,"Sounds":"Yes","Sounds_In":200,"Sounds_Out":300,"Sounds_Other":300,"LCD":"Yes","LCD_In":400,"LCD_Out":600,"LCD_Other":600,"Rates_In":"750/hr","Rates_Out":"1600/2hrs","Rates_Other":"1750/2hrs","Contact_Details":"(02) 981-8500 loc. 3104","coordinates":[121.06982678174973,14.656497538914948]},
  {"ID":1,"Name":"Engineering Theater","Bldg":"Melchor Hall","Capacity":200,"Available_Hours":"8am-9pm","Lights":"Yes","Lights_In":0,"Lights_Out":0,"Lights_Other":0,"Sounds":"Yes","Sounds_In":200,"Sounds_Out":300,"Sounds_Other":300,"LCD":"Yes","LCD_In":400,"LCD_Out":600,"LCD_Other":600,"Rates_In":"1000/hr","Rates_Out":"2100/2hrs","Rates_Other":"3100/2hrs","Contact_Details":"(02) 981-8500 loc. 3104","coordinates":[121.06967389583588,14.65665323467855]},
  {"ID":2,"Name":"MH 501-503","Bldg":"Melchor Hall","Capacity":100,"Available_Hours":"8am-9pm","Lights":"Yes","Lights_In":0,"Lights_Out":0,"Lights_Other":0,"Sounds":"Yes","Sounds_In":200,"Sounds_Out":300,"Sounds_Other":300,"LCD":"Yes","LCD_In":400,"LCD_Out":600,"LCD_Other":600,"Rates_In":"750/hr","Rates_Out":"1600/2hrs","Rates_Other":"1750/2hrs","Contact_Details":"(02) 981-8500 loc. 3104","coordinates":[121.06966853141785,14.656541652725865]},
  {"ID":3,"Name":"CHAC","Bldg":"Melchor Hall","Capacity":400,"Available_Hours":"8am-9pm","Lights":"Yes","Lights_In":50,"Lights_Out":100,"Lights_Other":100,"Sounds":"Yes","Sounds_In":200,"Sounds_Out":300,"Sounds_Other":300,"LCD":"Yes","LCD_In":400,"LCD_Out":600,"LCD_Other":600,"Rates_In":"150/hr","Rates_Out":"200/hr","Rates_Other":"250/hr","Contact_Details":"(02) 981-8500 loc. 3104","coordinates":[121.06945395469664,14.657029498983814]},
  {"ID":4,"Name":"NEC Grounds","Bldg":"NEC","Capacity":400,"Available_Hours":"8am-9pm","Lights":"Yes","Lights_In":500,"Lights_Out":500,"Lights_Other":500,"Sounds":"No","Sounds_In":0,"Sounds_Out":0,"Sounds_Other":0,"LCD":"Yes","LCD_In":400,"LCD_Out":600,"LCD_Other":600,"Rates_In":"1000/day","Rates_Out":"1000/day","Rates_Other":"1000/day","Contact_Details":"(02) 981-8500 loc. 3008","coordinates":[121.07109546661377,14.656601336102979]},
  {"ID":5,"Name":"UP Theater","Bldg":"Villamor Hall","Capacity":2032,"Available_Hours":"Upon Request","Lights":"Yes","Lights_In":0,"Lights_Out":0,"Lights_Other":0,"Sounds":"Yes","Sounds_In":0,"Sounds_Out":0,"Sounds_Other":0,"LCD":"No","LCD_In":0,"LCD_Out":0,"LCD_Other":0,"Rates_In":"300000/3hrs (including preparation)","Rates_Out":"300000/3hrs (including preparation)","Rates_Other":"300000/3hrs (including preparation)","Contact_Details":"(02) 920-5996","coordinates":[121.06603145599364,14.656689563674151]},
  {"ID":6,"Name":"Cine Adarna","Bldg":"UPFI","Capacity":735,"Available_Hours":"Upon Request","Lights":"Yes","Lights_In":0,"Lights_Out":0,"Lights_Other":0,"Sounds":"Yes","Sounds_In":0,"Sounds_Out":0,"Sounds_Other":0,"LCD":"Yes","LCD_In":"10000/1.5hrs","LCD_Out":"10000/1.5hrs","LCD_Other":"10000/1.5hrs","Rates_In":"38169/3hrs","Rates_Out":"38169/3hrs","Rates_Other":"38169/3hrs","Contact_Details":"(02) 981-8500 loc. 4286","coordinates":[121.06700778007507,14.657073612687622]},
  {"ID":7,"Name":"CMC Auditorium","Bldg":"Plaridel Hall","Capacity":100,"Available_Hours":"8am-9pm","Lights":"Yes","Lights_In":0,"Lights_Out":0,"Lights_Other":0,"Sounds":"Yes","Sounds_In":0,"Sounds_Out":0,"Sounds_Other":0,"LCD":"Yes","LCD_In":0,"LCD_Out":0,"LCD_Other":0,"Rates_In":"1000/hr","Rates_Out":"1000/hr","Rates_Other":"1000/hr","Contact_Details":"(02) 981-8500 loc. 2679","coordinates":[121.0645079612732,14.656606525961095]},
  {"ID":8,"Name":"Academic Oval","Bldg":"Open Area","Capacity":10000,"Available_Hours":"Upon Request","Lights":"Yes","Lights_In":0,"Lights_Out":0,"Lights_Other":0,"Sounds":"No","Sounds_In":0,"Sounds_Out":0,"Sounds_Other":0,"LCD":"No","LCD_In":0,"LCD_Out":0,"LCD_Other":0,"Rates_In":"1100/hr","Rates_Out":"1100/hr","Rates_Other":"3146/hr","Contact_Details":"(02) 981-8601/ (02) 981-8600","coordinates":[121.06428533792496,14.654909435805749]},
  {"ID":9,"Name":"Lagoon","Bldg":"Open Area","Capacity":10000,"Available_Hours":"Upon Request","Lights":"Yes","Lights_In":0,"Lights_Out":0,"Lights_Other":0,"Sounds":"No","Sounds_In":0,"Sounds_Out":0,"Sounds_Other":0,"LCD":"No","LCD_In":0,"LCD_Out":0,"LCD_Other":0,"Rates_In":"1375/hr","Rates_Out":"1375/hr","Rates_Other":"5566/hr","Contact_Details":"(02) 981-8601/ (02) 981-8600","coordinates":[121.06682538986205,14.654945765090497]},
  {"ID":10,"Name":"Benitez Theater","Bldg":"Benitez Hall","Capacity":230,"Available_Hours":"8am-5pm","Lights":"Yes","Lights_In":0,"Lights_Out":0,"Lights_Other":0,"Sounds":"Yes","Sounds_In":0,"Sounds_Out":0,"Sounds_Other":0,"LCD":"Yes","LCD_In":"200/hr","LCD_Out":"200/hr","LCD_Other":"250/hr","Rates_In":"8000/4hrs","Rates_Out":"8000/4hrs","Rates_Other":"12000/4hrs","Contact_Details":"(02) 981-8500 loc. 2804/2806","coordinates":[121.07215493917464,14.653412145044333]},
  {"ID":11,"Name":"Training Center","Bldg":"Benitez Hall","Capacity":100,"Available_Hours":"8am-5pm","Lights":"Yes","Lights_In":0,"Lights_Out":0,"Lights_Other":0,"Sounds":"Yes","Sounds_In":0,"Sounds_Out":0,"Sounds_Other":0,"LCD":"Yes","LCD_In":"200/hr","LCD_Out":"200/hr","LCD_Other":"250/hr","Rates_In":"5000/4hrs","Rates_Out":"5000/4hrs","Rates_Other":"8000/4hrs","Contact_Details":"(02) 981-8500 loc. 2804/ 2806","coordinates":[121.07242047786713,14.65343809471137]},
  {"ID":12,"Name":"Vinzons Rooftop","Bldg":"Vinzons Hall","Capacity":100,"Available_Hours":"8am-9pm","Lights":"Yes","Lights_In":0,"Lights_Out":0,"Lights_Other":0,"Sounds":"No","Sounds_In":0,"Sounds_Out":0,"Sounds_Other":0,"LCD":"No","LCD_In":0,"LCD_Out":0,"LCD_Other":0,"Rates_In":0,"Rates_Out":0,"Rates_Other":"N/A","Contact_Details":"(02) 981-8672","coordinates":[121.07345581054688,14.654408610052096]},
  {"ID":13,"Name":"PCED Auditorium","Bldg":"School of Economics","Capacity":220,"Available_Hours":"8am-5pm","Lights":"Yes","Lights_In":0,"Lights_Out":0,"Lights_Other":0,"Sounds":"Yes","Sounds_In":50,"Sounds_Out":100,"Sounds_Other":150,"LCD":"Yes","LCD_In":"400/3hrs","LCD_Out":"500/3hrs","LCD_Other":"600/3hrs","Rates_In":"2000/2hrs","Rates_Out":"3000/2hrs","Rates_Other":"4000/2hrs","Contact_Details":"(02) 927-9686 loc. 200","coordinates":[121.07364892959596,14.655900704129325]},
  {"ID":14,"Name":"Malcolm Theater","Bldg":"Malcolm Hall","Capacity":220,"Available_Hours":"8am-9pm","Lights":"Yes","Lights_In":0,"Lights_Out":0,"Lights_Other":0,"Sounds":"Yes","Sounds_In":0,"Sounds_Out":0,"Sounds_Other":0,"LCD":"Yes","LCD_In":0,"LCD_Out":0,"LCD_Other":0,"Rates_In":"5240/3hrs","Rates_Out":"5240/3hrs","Rates_Other":"8440/3hrs","Contact_Details":"(02) 920-5514 loc. 214","coordinates":[121.07207715511323,14.656554627374453]},
  {"ID":15,"Name":"Sunken Garden","Bldg":"Open Area","Capacity":10000,"Available_Hours":"Upon Request","Lights":"No","Lights_In":0,"Lights_Out":0,"Lights_Other":0,"Sounds":"No","Sounds_In":0,"Sounds_Out":0,"Sounds_Other":0,"LCD":"No","LCD_In":0,"LCD_Out":0,"LCD_Other":0,"Rates_In":"1573/hr","Rates_Out":"1573/hr","Rates_Other":"6232/hr","Contact_Details":"(02) 981-8601 / (02) 981-8600","coordinates":[121.07228636741638,14.655070322592467]}
  ];

  $scope.filteredVenues = angular.copy($scope.venues);

  //Leaflet Specs
  $scope.center={
       lat:14.655371336263237,
       lng:121.06858760118484,
       zoom:17
  };

  $scope.layers={
       baselayers:{
           hyddaFull:{
             name: 'Hydda Full',
             url:'http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png',
             maxZoom:19,
             type:'xyz',
             attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
           },
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
  };


$scope.redMarker ={
       icon: 'circle',
       markerColor: 'red',
       prefix:'fa',
        type: 'awesomeMarker',
     };


  var i = 0;
  $scope.markers={};
  $scope.iniMarkers={};

  angular.forEach($scope.venues, function(value) {
    $scope.iniMarkers[i]={
                  lat: value.coordinates[1],
                  lng: value.coordinates[0],
                  message: '<p><b>'+value.Name+'</b></p><p>'+value.Bldg+'</p><p>Capacity: '+value.Capacity+'</p><p>Available Hours:'+value.Available_Hours+'</p>',
                  icon: $scope.redMarker
                };
    i++;

  });
  $scope.markers=$scope.iniMarkers;


$scope.$watch('filteredVenues', function () { 

  var i = 0;

  $scope.qMarkers={};
  

  angular.forEach($scope.filteredVenues, function(value) {
    $scope.qMarkers[i]={
                  lat: value.coordinates[1],
                  lng: value.coordinates[0],
                  message: '<p><b>'+value.Name+'</b></p><p>'+value.Bldg+'</p><p>Capacity: '+value.Capacity+'</p><p>Available Hours:'+value.Available_Hours+'</p>',
                  icon: $scope.redMarker
                };
    i++;

  });

  i=0;
   $scope.markers={};

   $scope.markers = $scope.qMarkers;

   if(($scope.filteredVenues).length===0){
      $scope.markers=$scope.iniMarkers;

   }

         //console.log($scope);

},true);


  }]);








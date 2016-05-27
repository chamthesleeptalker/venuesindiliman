"use strict";angular.module("venuesindilimanApp",["ngCookies","ngResource","ngSanitize","ngRoute","angular.filter","ui-leaflet","ngAnimate","ngAria","ngMessages","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]);var venuesApp=angular.module("venuesindilimanApp");venuesApp.controller("MainCtrl",["$scope","leafletBoundsHelpers",function(a,b){a.sortType="Name",a.sortReverse=!1,a.lcdCheckbox={yn:""},a.lightsCheckbox={yn:""},a.soundsCheckbox={yn:""},a.capacityInput={val:0},a.searchVenue={query:{Bldg:"",Capacity:a.capacityInput.val,Lights:a.lightsCheckbox.yn,LCD:a.lcdCheckbox.yn,Sounds:a.soundsCheckbox.yn}},a.venues=[{ID:0,Name:"P & G Room",Bldg:"Melchor Hall",Capacity:100,Available_Hours:"8am-9pm",Lights:"Yes",Lights_In:0,Lights_Out:0,Lights_Other:0,Sounds:"Yes",Sounds_In:200,Sounds_Out:300,Sounds_Other:300,LCD:"Yes",LCD_In:400,LCD_Out:600,LCD_Other:600,Rates_In:"750/hr",Rates_Out:"1600/2hrs",Rates_Other:"1750/2hrs",Contact_Details:"(02) 981-8500 loc. 3104",coordinates:[121.06982678174973,14.656497538914948]},{ID:1,Name:"Engineering Theater",Bldg:"Melchor Hall",Capacity:200,Available_Hours:"8am-9pm",Lights:"Yes",Lights_In:0,Lights_Out:0,Lights_Other:0,Sounds:"Yes",Sounds_In:200,Sounds_Out:300,Sounds_Other:300,LCD:"Yes",LCD_In:400,LCD_Out:600,LCD_Other:600,Rates_In:"1000/hr",Rates_Out:"2100/2hrs",Rates_Other:"3100/2hrs",Contact_Details:"(02) 981-8500 loc. 3104",coordinates:[121.06967389583588,14.65665323467855]},{ID:2,Name:"MH 501-503",Bldg:"Melchor Hall",Capacity:100,Available_Hours:"8am-9pm",Lights:"Yes",Lights_In:0,Lights_Out:0,Lights_Other:0,Sounds:"Yes",Sounds_In:200,Sounds_Out:300,Sounds_Other:300,LCD:"Yes",LCD_In:400,LCD_Out:600,LCD_Other:600,Rates_In:"750/hr",Rates_Out:"1600/2hrs",Rates_Other:"1750/2hrs",Contact_Details:"(02) 981-8500 loc. 3104",coordinates:[121.06966853141785,14.656541652725865]},{ID:3,Name:"CHAC",Bldg:"Melchor Hall",Capacity:400,Available_Hours:"8am-9pm",Lights:"Yes",Lights_In:50,Lights_Out:100,Lights_Other:100,Sounds:"Yes",Sounds_In:200,Sounds_Out:300,Sounds_Other:300,LCD:"Yes",LCD_In:400,LCD_Out:600,LCD_Other:600,Rates_In:"150/hr",Rates_Out:"200/hr",Rates_Other:"250/hr",Contact_Details:"(02) 981-8500 loc. 3104",coordinates:[121.06945395469664,14.657029498983814]},{ID:4,Name:"NEC Grounds",Bldg:"NEC",Capacity:400,Available_Hours:"8am-9pm",Lights:"Yes",Lights_In:500,Lights_Out:500,Lights_Other:500,Sounds:"No",Sounds_In:0,Sounds_Out:0,Sounds_Other:0,LCD:"Yes",LCD_In:400,LCD_Out:600,LCD_Other:600,Rates_In:"1000/day",Rates_Out:"1000/day",Rates_Other:"1000/day",Contact_Details:"(02) 981-8500 loc. 3008",coordinates:[121.07109546661377,14.656601336102979]},{ID:5,Name:"UP Theater",Bldg:"Villamor Hall",Capacity:2032,Available_Hours:"Upon Request",Lights:"Yes",Lights_In:0,Lights_Out:0,Lights_Other:0,Sounds:"Yes",Sounds_In:0,Sounds_Out:0,Sounds_Other:0,LCD:"No",LCD_In:0,LCD_Out:0,LCD_Other:0,Rates_In:"300000/3hrs (including preparation)",Rates_Out:"300000/3hrs (including preparation)",Rates_Other:"300000/3hrs (including preparation)",Contact_Details:"(02) 920-5996",coordinates:[121.06603145599364,14.656689563674151]},{ID:6,Name:"Cine Adarna",Bldg:"UPFI",Capacity:735,Available_Hours:"Upon Request",Lights:"Yes",Lights_In:0,Lights_Out:0,Lights_Other:0,Sounds:"Yes",Sounds_In:0,Sounds_Out:0,Sounds_Other:0,LCD:"Yes",LCD_In:"10000/1.5hrs",LCD_Out:"10000/1.5hrs",LCD_Other:"10000/1.5hrs",Rates_In:"38169/3hrs",Rates_Out:"38169/3hrs",Rates_Other:"38169/3hrs",Contact_Details:"(02) 981-8500 loc. 4286",coordinates:[121.06700778007507,14.657073612687622]},{ID:7,Name:"CMC Auditorium",Bldg:"Plaridel Hall",Capacity:100,Available_Hours:"8am-9pm",Lights:"Yes",Lights_In:0,Lights_Out:0,Lights_Other:0,Sounds:"Yes",Sounds_In:0,Sounds_Out:0,Sounds_Other:0,LCD:"Yes",LCD_In:0,LCD_Out:0,LCD_Other:0,Rates_In:"1000/hr",Rates_Out:"1000/hr",Rates_Other:"1000/hr",Contact_Details:"(02) 981-8500 loc. 2679",coordinates:[121.0645079612732,14.656606525961095]},{ID:8,Name:"Academic Oval",Bldg:"Open Area",Capacity:1e4,Available_Hours:"Upon Request",Lights:"Yes",Lights_In:0,Lights_Out:0,Lights_Other:0,Sounds:"No",Sounds_In:0,Sounds_Out:0,Sounds_Other:0,LCD:"No",LCD_In:0,LCD_Out:0,LCD_Other:0,Rates_In:"1100/hr",Rates_Out:"1100/hr",Rates_Other:"3146/hr",Contact_Details:"(02) 981-8601/ (02) 981-8600",coordinates:[121.06428533792496,14.654909435805749]},{ID:9,Name:"Lagoon",Bldg:"Open Area",Capacity:1e4,Available_Hours:"Upon Request",Lights:"Yes",Lights_In:0,Lights_Out:0,Lights_Other:0,Sounds:"No",Sounds_In:0,Sounds_Out:0,Sounds_Other:0,LCD:"No",LCD_In:0,LCD_Out:0,LCD_Other:0,Rates_In:"1375/hr",Rates_Out:"1375/hr",Rates_Other:"5566/hr",Contact_Details:"(02) 981-8601/ (02) 981-8600",coordinates:[121.06682538986205,14.654945765090497]},{ID:10,Name:"Benitez Theater",Bldg:"Benitez Hall",Capacity:230,Available_Hours:"8am-5pm",Lights:"Yes",Lights_In:0,Lights_Out:0,Lights_Other:0,Sounds:"Yes",Sounds_In:0,Sounds_Out:0,Sounds_Other:0,LCD:"Yes",LCD_In:"200/hr",LCD_Out:"200/hr",LCD_Other:"250/hr",Rates_In:"8000/4hrs",Rates_Out:"8000/4hrs",Rates_Other:"12000/4hrs",Contact_Details:"(02) 981-8500 loc. 2804/2806",coordinates:[121.07215493917464,14.653412145044333]},{ID:11,Name:"Training Center",Bldg:"Benitez Hall",Capacity:100,Available_Hours:"8am-5pm",Lights:"Yes",Lights_In:0,Lights_Out:0,Lights_Other:0,Sounds:"Yes",Sounds_In:0,Sounds_Out:0,Sounds_Other:0,LCD:"Yes",LCD_In:"200/hr",LCD_Out:"200/hr",LCD_Other:"250/hr",Rates_In:"5000/4hrs",Rates_Out:"5000/4hrs",Rates_Other:"8000/4hrs",Contact_Details:"(02) 981-8500 loc. 2804/ 2806",coordinates:[121.07242047786713,14.65343809471137]},{ID:12,Name:"Vinzons Rooftop",Bldg:"Vinzons Hall",Capacity:100,Available_Hours:"8am-9pm",Lights:"Yes",Lights_In:0,Lights_Out:0,Lights_Other:0,Sounds:"No",Sounds_In:0,Sounds_Out:0,Sounds_Other:0,LCD:"No",LCD_In:0,LCD_Out:0,LCD_Other:0,Rates_In:0,Rates_Out:0,Rates_Other:"N/A",Contact_Details:"(02) 981-8672",coordinates:[121.07345581054688,14.654408610052096]},{ID:13,Name:"PCED Auditorium",Bldg:"School of Economics",Capacity:220,Available_Hours:"8am-5pm",Lights:"Yes",Lights_In:0,Lights_Out:0,Lights_Other:0,Sounds:"Yes",Sounds_In:50,Sounds_Out:100,Sounds_Other:150,LCD:"Yes",LCD_In:"400/3hrs",LCD_Out:"500/3hrs",LCD_Other:"600/3hrs",Rates_In:"2000/2hrs",Rates_Out:"3000/2hrs",Rates_Other:"4000/2hrs",Contact_Details:"(02) 927-9686 loc. 200",coordinates:[121.07364892959596,14.655900704129325]},{ID:14,Name:"Malcolm Theater",Bldg:"Malcolm Hall",Capacity:220,Available_Hours:"8am-9pm",Lights:"Yes",Lights_In:0,Lights_Out:0,Lights_Other:0,Sounds:"Yes",Sounds_In:0,Sounds_Out:0,Sounds_Other:0,LCD:"Yes",LCD_In:0,LCD_Out:0,LCD_Other:0,Rates_In:"5240/3hrs",Rates_Out:"5240/3hrs",Rates_Other:"8440/3hrs",Contact_Details:"(02) 920-5514 loc. 214",coordinates:[121.07207715511323,14.656554627374453]},{ID:15,Name:"Sunken Garden",Bldg:"Open Area",Capacity:1e4,Available_Hours:"Upon Request",Lights:"No",Lights_In:0,Lights_Out:0,Lights_Other:0,Sounds:"No",Sounds_In:0,Sounds_Out:0,Sounds_Other:0,LCD:"No",LCD_In:0,LCD_Out:0,LCD_Other:0,Rates_In:"1573/hr",Rates_Out:"1573/hr",Rates_Other:"6232/hr",Contact_Details:"(02) 981-8601 / (02) 981-8600",coordinates:[121.07228636741638,14.655070322592467]}],a.filteredVenues={results:angular.copy(a.venues)},a.center={lat:14.655371336263237,lng:121.06858760118484,zoom:17},a.layers={baselayers:{hyddaFull:{name:"Hydda Full",url:"http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png",maxZoom:19,type:"xyz",attribution:'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'},osmMapnik:{name:"OSM Mapnik",url:"http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",maxZoom:19,type:"xyz",attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}},overlays:{}};var c=b.createBoundsFromArray([[14.6497350461567,121.060945987701],[14.6596996595209,121.076095104218]]);a.bounds={bounds:c,center:{}},a.lightsCbChange=function(){a.searchVenue.query.Lights=a.lightsCheckbox.yn},a.lcdCbChange=function(){a.searchVenue.query.LCD=a.lcdCheckbox.yn},a.soundsCbChange=function(){a.searchVenue.query.Sounds=a.soundsCheckbox.yn},a.capacityInputChange=function(){a.searchVenue.query.Capacity=a.capacityInput.val},a.resetSearch=function(){a.searchVenue={query:{Bldg:"",Capacity:0,Lights:"",LCD:"",Sounds:""}},a.capacityInput.val=0,a.lightsCheckbox.yn="",a.lcdCheckbox.yn="",a.soundsCheckbox.yn=""},a.redMarker={icon:"circle",markerColor:"red",prefix:"fa",type:"awesomeMarker"};var d=0;a.markers={},a.iniMarkers={},angular.forEach(a.venues,function(b){a.iniMarkers[d]={lat:b.coordinates[1],lng:b.coordinates[0],message:"<p><b>"+b.Name+"</b></p><p>"+b.Bldg+"</p><p>Capacity: "+b.Capacity+"</p><p>Available Hours:"+b.Available_Hours+"</p>",icon:a.redMarker},d++}),a.markers=a.iniMarkers,a.noQueryResults=function(b){return 0===b.length?(setTimeout(function(){a.resetSearch()},600),!0):!1},a.$watch("filteredVenues.results",function(){var b=0;a.qMarkers={},angular.forEach(a.filteredVenues.results,function(c){a.qMarkers[b]={lat:c.coordinates[1],lng:c.coordinates[0],message:"<p><b>"+c.Name+"</b></p><p>"+c.Bldg+"</p><p>Capacity: "+c.Capacity+"</p><p>Available Hours:"+c.Available_Hours+"</p>",icon:a.redMarker},b++}),b=0,a.markers={},a.markers=a.qMarkers,0===a.filteredVenues.results.length},!0)}]),angular.module("venuesindilimanApp").run(["$templateCache",function(a){a.put("views/main.html",'<!--   <div class="alert alert-info">\n    <p>Sort Type: {{ sortType }}</p>\n    <p>Sort Reverse: {{ sortReverse }}</p>\n    <p>Search Query: {{ searchVenue.query }}</p>\n    <p>Results: {{ filteredVenues.results }}</p>\n  </div> --> <h1>Venues in UP Diliman</h1> <br> <label>Building</label> <select id="bldg" name="show-filter" ng-model="searchVenue.query.Bldg" placeholder="Building" ng-options="venue.Bldg as venue.Bldg for venue in venues | unique:\'Bldg\'"> <option value="">-- choose Building --</option> </select> <!--   <label>Capacity</label>\n    <select id="cap" name="show-filter" ng-model="searchVenue.query.Capacity" placeholder="Capacity" \n    ng-options="venue.Capacity as venue.Capacity for venue in venues | unique:\'Capacity\'"\n    >\n    <option value="">-- choose Capacity --</option>\n  </select>\n --> <label>Capacity</label> <input type="text" ng-model="capacityInput.val" ng-trim="false" ng-change="capacityInputChange(capacityInput.val)"> <!--   <label>Lights</label>\n    <select id="lights" name="show-filter" ng-model="searchVenue.Lights" placeholder="Lights" \n    ng-options="venue.Lights as venue.Lights for venue in venues | unique:\'Lights\'"\n    >\n    <option value=""> Lights? </option>\n  </select> --> <label>Lights</label> <input type="checkbox" ng-model="lightsCheckbox.yn" ng-true-value="\'Yes\'" ng-false-value="\'\'" ng-change="lightsCbChange()"> <!-- <label>Sounds</label>\n    <select id="sounds" name="show-filter" ng-model="searchVenue.Sounds" placeholder="Sounds" \n    ng-options="venue.Sounds as venue.Sounds for venue in venues | unique:\'Sounds\'"\n    >\n    <option value="">Sounds?</option>\n  </select> --> <label>Sounds</label> <input type="checkbox" ng-model="soundsCheckbox.yn" ng-true-value="\'Yes\'" ng-false-value="\'\'" ng-change="soundsCbChange()"> <!-- <label>LCD</label>\n    <select id="lcd" name="show-filter" ng-model="searchVenue.LCD" placeholder="LCD" \n    ng-options="venue.LCD as venue.LCD for venue in venues | unique:\'LCD\'"\n    >\n    <option value=""> LCD? </option>\n  </select> --> <label>LCD</label> <input type="checkbox" ng-model="lcdCheckbox.yn" ng-true-value="\'Yes\'" ng-false-value="\'\'" ng-change="lcdCbChange()"> <button ng-click="resetSearch()"> Reset Search </button> <br> <br> <!--Alert if query has no results--> <div class="row row_noquery" ng-show="noQueryResults(filteredVenues.results)"> <!-- <div class="row row_noquery"> --> <div class="noqueryresults"> <h1>No Results!<br> Resetting Query... </h1> </div> </div> <leaflet lf-center="center" width="100%" height="480px" layers="layers" markers="markers" bounds="bounds"></leaflet> <br> <br> <table class="table table-bordered table-striped"> <thead> <tr> <td> <a href="#" ng-click="sortType = \'ID\'; sortReverse = !sortReverse"> Id <span ng-show="sortType == \'ID\' && !sortReverse" class="fa fa-caret-down"></span> <span ng-show="sortType == \'ID\' && sortReverse" class="fa fa-caret-up"></span> </a> </td> <td> <a href="#" ng-click="sortType = \'Name\'; sortReverse = !sortReverse"> Name <span ng-show="sortType == \'Name\' && !sortReverse" class="fa fa-caret-down"></span> <span ng-show="sortType == \'Name\' && sortReverse" class="fa fa-caret-up"></span> </a> </td> <td> <a href="#" ng-click="sortType = \'Building\'; sortReverse = !sortReverse"> Building <span ng-show="sortType == \'Building\' && !sortReverse" class="fa fa-caret-down"></span> <span ng-show="sortType == \'Building\' && sortReverse" class="fa fa-caret-up"></span> </a></td> <td> <a href="#" ng-click="sortType = \'Capacity\'; sortReverse = !sortReverse"> Capacity <span ng-show="sortType == \'Capacity\' && !sortReverse" class="fa fa-caret-down"></span> <span ng-show="sortType == \'Capacity\' && sortReverse" class="fa fa-caret-up"></span> </a></td> <td> <a href="#" ng-click="sortType = \'Available_Hours\'; sortReverse = !sortReverse"> Available Hours <span ng-show="sortType == \'Available_Hours\' && !sortReverse" class="fa fa-caret-down"></span> <span ng-show="sortType == \'Available_Hours\' && sortReverse" class="fa fa-caret-up"></span> </a></td> <td> <a href="#" ng-click="sortType = \'Contact_Details\'; sortReverse = !sortReverse"> Contact Details <span ng-show="sortType == \'Contact_Details\' && !sortReverse" class="fa fa-caret-down"></span> <span ng-show="sortType == \'Contact_Details\' && sortReverse" class="fa fa-caret-up"></span> </a></td> <td> <a href="#" ng-click="sortType = \'Lights\'; sortReverse = !sortReverse"> Lights <span ng-show="sortType == \'Lights\' && !sortReverse" class="fa fa-caret-down"></span> <span ng-show="sortType == \'Lights\' && sortReverse" class="fa fa-caret-up"></span> </a></td> <td> <a href="#" ng-click="sortType = \'Sounds\'; sortReverse = !sortReverse"> Sounds <span ng-show="sortType == \'Sounds\' && !sortReverse" class="fa fa-caret-down"></span> <span ng-show="sortType == \'Sounds\' && sortReverse" class="fa fa-caret-up"></span> </a></td> <td> <a href="#" ng-click="sortType = \'LCD\'; sortReverse = !sortReverse"> LCD <span ng-show="sortType == \'LCD\' && !sortReverse" class="fa fa-caret-down"></span> <span ng-show="sortType == \'LCD\' && sortReverse" class="fa fa-caret-up"></span> </a></td> <td> <a href="#" ng-click="sortType = \'Rates_In\'; sortReverse = !sortReverse"> Rates Student/Alumni <span ng-show="sortType == \'Rates_In\' && !sortReverse" class="fa fa-caret-down"></span> <span ng-show="sortType == \'Rates_In\' && sortReverse" class="fa fa-caret-up"></span> </a></td> <td> <a href="#" ng-click="sortType = \'Rates_Out\'; sortReverse = !sortReverse"> Rates Outsiders <span ng-show="sortType == \'Rates_Out\' && !sortReverse" class="fa fa-caret-down"></span> <span ng-show="sortType == \'Rates_Out\' && sortReverse" class="fa fa-caret-up"></span> </a></td> <td> <a href="#" ng-click="sortType = \'Rates_Other\'; sortReverse = !sortReverse"> Rates Others <span ng-show="sortType == \'Rates_Other\' && !sortReverse" class="fa fa-caret-down"></span> <span ng-show="sortType == \'Rates_Other\' && sortReverse" class="fa fa-caret-up"></span> </a></td> </tr> </thead> <tbody> <tr ng-repeat="venue in ( filteredVenues.results = (venues | filter: searchVenue.query)) | orderBy:sortType:sortReverse"> <td>{{ venue.ID }}</td> <td>{{ venue.Name }}</td> <td>{{ venue.Bldg }}</td> <td>{{ venue.Capacity }}</td> <td>{{ venue.Available_Hours }}</td> <td>{{ venue.Contact_Details }}</td> <td>{{ venue.Lights }}</td> <td>{{ venue.Sounds }}</td> <td>{{ venue.LCD }}</td> <td>{{ venue.Rates_In }}</td> <td>{{ venue.Rates_Out }}</td> <td>{{ venue.Rates_Other }}</td> </tr> </tbody> </table>')}]);
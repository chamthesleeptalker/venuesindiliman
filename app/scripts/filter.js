venuesApp.filter('capacityFilter',function(){
	return function(filterResults,capacityInput){
		var capFilteredResults=[];
		for(var i =0;i<filterResults.length;i++){
			var filterResult = filterResults[i];
			if(filterResult.Capacity >= capacityInput){
				capFilteredResults.push(filterResult);
			}
		}

		return capFilteredResults;
	}

});
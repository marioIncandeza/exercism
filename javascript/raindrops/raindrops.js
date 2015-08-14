function Raindrops(){};

Raindrops.prototype.convert = function(number){
	var output = [];
	var original = number;
	for (var k = 2 ; k <= number ; k++){
		while (number%k === 0){
				output.push(k);
				number/= k;
		}
			
	}
	var rain = "";
	var rainFilter = output.filter(function(factor){
		if (factor === 3 || factor === 5 || factor === 7){
			return true;
		}
		else {
			return false;
		}
	});
	if(rainFilter.length === 0){
		return original.toString();
	}
	var noDuplicates = rainFilter.filter(function (v, i, a) { return a.indexOf (v) == i });
	noDuplicates.forEach(function(element){
		if (element === 3){
			rain += "Pling";
		}
		else if (element === 5){
			rain += "Plang";
		}
		else {
			rain += "Plong";
		}
	})
	return rain;
}

module.exports = Raindrops;
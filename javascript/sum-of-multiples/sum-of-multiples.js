function SumOfMultiples(multiplesOf){
	return {
		to: function(upTo){
			var box = [0];
			multiplesOf.forEach(function(factor){
				var k = 1;
				while(k*factor < upTo){
					box.push(k*factor);
					k++;
				}
			});
			box = box.sort().filter(function(item, pos, ary){
		        return !pos || item != ary[pos - 1];
		    });
		    return box.reduce(function(a,b){
		    	return a + b;
		    });
		}
	}
}

module.exports = SumOfMultiples;

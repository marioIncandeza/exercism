function PF(){};

PF.prototype.for = function(number){
	var output = [];
	for (var k = 2 ; k <= number ; k++){
		while (number%k === 0){
				output.push(k);
				number/= k;
		}
			
	}
	return output;
}

var primeFactors = new PF();

module.exports = primeFactors;
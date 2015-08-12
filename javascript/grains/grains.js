function Grains(){};

Grains.prototype.square = function(square){
	return Math.pow(2,square - 1);
};

Grains.prototype.total = function(){
	var total = 0;
	for (var k = 1; k < 65 ; k++){
		total += this.square(k);
	}
	return total;
};

module.exports = Grains;
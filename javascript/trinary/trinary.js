function Trinary(onezerotwo){
	this.onezerotwo = onezerotwo;
}

Trinary.prototype.toDecimal = function(){
	if (/\D/.test(this.onezerotwo)){
		return 0;
	}
	var trinaryArray = this.onezerotwo.split("");
	var decimalOutput = 0;
	for (var k = 0 ; k < trinaryArray.length ; k++){
		decimalOutput += Math.pow(3,(trinaryArray.length - 1 - k))*trinaryArray[k];
	}
	return decimalOutput;
}

module.exports = Trinary;
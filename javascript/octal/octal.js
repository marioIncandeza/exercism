function Octal(num){
	this.num = num;
}

Octal.prototype.toDecimal = function(){
	if (/[^0-7]/.test(this.num)){
		return 0;
	}
	var octalArray = this.num.split("");
	var decimalOutput = 0;
	for (var k = 0 ; k < octalArray.length ; k++){
		decimalOutput += Math.pow(8,(octalArray.length - 1 - k))*octalArray[k];
	}
	return decimalOutput;
}

module.exports = Octal;
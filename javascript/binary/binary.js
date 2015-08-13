function Binary(onezero){
	this.onezero = onezero;
}

Binary.prototype.toDecimal = function(){
	if (/\D/.test(this.onezero)){
		return 0;
	}
	var binaryArray = this.onezero.split("");
	var decimalOutput = 0;
	for (var k = 0 ; k < binaryArray.length ; k++){
		decimalOutput += Math.pow(2,(binaryArray.length - 1 - k))*binaryArray[k];
	}
	return decimalOutput;
}

module.exports = Binary;
function Hexadecimal(hex){
	this.hex = hex;
}

Hexadecimal.prototype.toDecimal = function(){
	if (/[^0123456789abcdefABCDEF]/.test(this.hex)){
		return 0;
	}
	var inputArray = this.hex.split("");
	var hexArray = inputArray.map(hexvalue);
	var decimalOutput = 0;
	for (var k = 0 ; k < hexArray.length ; k++){
		decimalOutput += Math.pow(16,(hexArray.length - 1 - k))*hexArray[k];
	}
	return decimalOutput;
}

function hexvalue(element){
	switch(element.toUpperCase()){
		case "A": return 10;
		case "B": return 11;
		case "C": return 12;
		case "D": return 13;
		case "E": return 14;
		case "F": return 15;
		default: return element;
	}
}

module.exports = Hexadecimal;
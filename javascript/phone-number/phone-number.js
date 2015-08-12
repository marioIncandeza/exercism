function PhoneNumber(input){
	this.number = function(){
		var cleanNumber = input.replace(/\D/g, '');
		if (cleanNumber.length === 10)
			return cleanNumber;
		else if (cleanNumber.length > 10 && cleanNumber.charAt(0) === '1'){
			var shifter = cleanNumber.split('');
			shifter.shift();
			cleanNumber = shifter.join('');
			return cleanNumber;
		}
		else
			return "0000000000";
	};

	this.areaCode = function(){
		var areaCode = input.slice(0,3);
		return areaCode;
	};

	this.toString = function(){
		return "(" + input.slice(0,3) + ") " + input.slice(3,6) + "-" + input.slice(6,10);
	};
}


module.exports = function(arg){return new PhoneNumber(arg);};
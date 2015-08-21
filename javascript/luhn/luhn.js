function Luhn(number){
	this.checkDigit = checkd(number);
	this.addends = doobler(number);
	this.checksum = this.addends.reduce(function(prev,cur){
		return cur + prev;
	});
	this.valid = (this.checksum%10 === 0); 
}

function checkd(number){
		var broken = number.toString().split("");
		return Number(broken[broken.length -1]);
}

function doobler(number){
	var digits = number.toString(10).split("").map(function(t){return parseInt(t)});
	if (digits.length%2 === 0){
		for (var k = 0 ; k < digits.length ; k+= 2){
			digits[k] = (digits[k]*2 > 9 ? digits[k]*2 - 9 : digits[k]*2); 
		}
	}
	else {
		for (var c = 1 ; c < digits.length ;c+= 2){
			digits[c] = (digits[c]*2 > 9 ? digits[c]*2 - 9 : digits[c]*2);
		}
	}
	return digits;
}

Luhn.create = function(number){
	var digits = number.toString(10).split("").map(function(t){return parseInt(t)});
	var addends = doobler(number);
	var append = 0;
	var check = addends.reduce(function(prev,cur){return cur + prev;});
	while (check%10){
		digits[digits.length] = append;
		addends = doobler(Number(digits.join(""))) ; 
		append++;
		check = addends.reduce(function(prev,cur){return cur + prev;});
		if (check%10)
			digits.pop();
	}
	return Number(digits.join(""));
}



module.exports = Luhn;
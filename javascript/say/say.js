var say = function(){
	this.inEnglish = function(number){
		if (number < 0 || number > 999999999999){
			throw new Error('Number must be between 0 and 999,999,999,999.');
		}
		if (number == 0){
			return 'zero';
		}
		var answer = '';
		var numberStr = '';
		while (number != 0){
			if (number <= 999){
				answer += hundreds(number);
				number = 0;
			}
			if (number <= 999999 && number > 999){
				numberStr = number.toString().split('').reverse().splice(3).reverse().join('');
				var thou = parseInt(numberStr);
				answer += hundreds(thou) + ' thousand';
				number -= thou*1000;
				if (number != 0){
					answer += ' ';
				}
			}
			if (number <= 999999999 && number > 999999){
				numberStr = number.toString().split('').reverse().splice(6).reverse().join('');
				var mil = parseInt(numberStr);
				answer += hundreds(mil) + ' million';
				number -= mil*1000000;
				if (number != 0){
					answer += ' ';
				}
			}
			if (number <= 999999999999 && number > 999999999){
				numberStr = number.toString().split('').reverse().splice(9).reverse().join('');
				var bil = parseInt(numberStr);
				answer += hundreds(bil) + ' billion';
				number -= bil*1000000000;
				if (number != 0){
					answer += ' ';
				}
			}
		}
	    return answer;
	}
}

function ones(numStr){
	var answer = '';
	var decrement;
	switch(numStr){
		case '1':
		   answer += 'one';
		   decrement = 1;
		   break;
		case '2':
		   answer += 'two';
		   decrement = 2;
		   break;
		case '3':
		   answer += 'three';
		   decrement = 3;
		   break;
		case '4':
		   answer += 'four';
		   decrement = 4;
		   break;
		case '5':
		   answer += 'five';
		   decrement = 5;
		   break;
		case '6':
		   answer += 'six';
		   decrement = 6;
		   break;
		case '7':
		   answer += 'seven';
		   decrement = 7;
		   break;
		case '8':
		   answer += 'eight';
		   decrement = 8;
		   break;
		case '9':
		   answer += 'nine';
		   decrement = 9;
		   break;
		case '10':
		   answer += 'ten';
		   decrement = 10;
		   break;
		case '11':
		   answer += 'eleven';
		   decrement = 11;
		   break;
		case '12':
		   answer += 'twelve';
		   decrement = 12;
		   break;
		case '13':
		   answer += 'thirteen';
		   decrement = 13;
		   break;
		case '14':
		   answer += 'fourteen';
		   decrement = 14;
		   break;
		case '15':
		   answer += 'fifteen';
		   decrement = 15;
		   break;
	}
	return {str: answer, num: decrement};
}

function tens(numStr){
	var answer = '';
	var decrement;
	switch(numStr){
		case '2':
		   answer += 'twenty';
		   decrement = 20;
		   break;
		case '3':
		   answer += 'thirty';
		   decrement = 30;
		   break;
		case '4':
		   answer += 'forty';
		   decrement = 40;
		   break;
		case '5':
		   answer += 'fifty';
		   decrement = 50;
		   break;
		case '6':
		   answer += 'sixty';
		   decrement = 60;
		   break;
		case '7':
		   answer += 'seventy';
		   decrement = 70;
		   break;
		case '8':
		   answer += 'eighty';
		   decrement = 80;
		   break;
		case '9':
		   answer += 'ninety';
		   decrement = 90;
		   break;
	}
	return {str: answer, num: decrement};
}

function hundreds(number){
	var verbalInterpretation = '';
	var numberStr = '';
	var intermediary = {};
	while (number != 0){
		if (number <= 15){
			numberStr = number.toString();
			intermediary = ones(numberStr,number);
			verbalInterpretation += intermediary.str;
			number -= intermediary.num;
	    }
	    if (number <= 99 && number >= 16){
			numberStr = number.toString();
			intermediary = tens(numberStr[0]);
			verbalInterpretation += intermediary.str;
			number -= intermediary.num;
			if (number != 0){
				verbalInterpretation += '-';
			}
		}
		if (number <= 999 && number >= 100){
			numberStr = number.toString();
			intermediary = ones(numberStr[0]);
			verbalInterpretation += intermediary.str + ' hundred';
			number -= intermediary.num*100;
			if (number != 0){
				verbalInterpretation += ' ';
			}
		}
	}
	return verbalInterpretation;
}

module.exports = new say;
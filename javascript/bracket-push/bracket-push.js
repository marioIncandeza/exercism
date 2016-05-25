function bracket(input){
	var brackArray = input.split('');
	var opposites = {']': '[', '}': '{', ')': '('};
	var length;

	while (brackArray.length){
		length = brackArray.length;
		for (var k = 0; k < brackArray.length-1; k++){
			if (brackArray[k] == opposites[brackArray[k+1]]){
				brackArray.splice(k,2);
			}
		}
		if (length == brackArray.length){
			return false;
		}
	}

	return true;
}

module.exports = bracket;
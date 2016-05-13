function Pangram(sentence){
	this.sentence = sentence;
}

Pangram.prototype.isPangram = function(){
	var charArr = this.sentence.replace(/\W|\d|_/g,'').toLowerCase().split('').sort().filter(onlyUnique);
	if (charArr.length == 26){
		return true;
	}
	return false;
}

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

module.exports = Pangram;
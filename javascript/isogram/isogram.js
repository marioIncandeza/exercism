function Isogram(wordie){
	this.word = wordie;
}

Isogram.prototype.isIsogram = function(){
	var word = this.word.replace(/\W/g,'').toLowerCase().split('').sort();
	for (var k = 0; k < word.length - 1; k++){
		if (word[k] == word[k+1]){
			return false;
		}
	}
	return true;
}

module.exports = Isogram;
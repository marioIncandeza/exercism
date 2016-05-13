function Acronym(){
	this.parse = function(phrase){
		phrase = phrase.replace(/:.*/g,'');
		phrase = phrase.split(/\s|-/g);
		var nym = [];
		phrase.forEach(function(word){
			nym.push(word[0]);
			var up = word.toUpperCase();
			for (var k = 1; k < word.length; k++){
				if (word[k]==up[k] && !word[k].match(/\W/)){
					nym.push(word[k]);
				}
			}
		});
		nym = nym.join('').toUpperCase();
		return nym;
	}
}

module.exports = new Acronym;

function Allergies(score){
	this.score = score;
	this.allergyScores = [{cats: 128}, {pollen: 64}, {chocolate: 32}, {tomatoes: 16}, {strawberries: 8}, {shellfish: 4}, {peanuts: 2}, {eggs: 1}]
}

Allergies.prototype.list = function(){
	var output = [];
	var currSum = (this.score > 255 ? this.score-256 : this.score);
	var k = 0;
	while (currSum !== 0){
		for (var prop in this.allergyScores[k]){
		if (currSum >= this.allergyScores[k][prop]){
			output.push(prop);
			currSum -= this.allergyScores[k][prop];
		}
	}
	k++ ;
	}
	output.reverse();
	return output;
}

Allergies.prototype.allergicTo = function(allergen){
	var knownAllergies = this.list();
	var check = false;
	knownAllergies.forEach(function(element){
		if (element === allergen){
			check = true;
		}
	})
	return check;
}


module.exports = Allergies;


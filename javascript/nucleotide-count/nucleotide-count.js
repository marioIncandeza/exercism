function dna(sequence){
	
	if (sequence === undefined)
		this.nucleotideArray = [];
	else if (sequence === null || /[^ATCG]/.test(sequence))
		throw "tittiesprinkles!";
	else
		this.nucleotideArray = sequence.split("");

	this.count = function(nucleotide){
		var total = 0;
		this.nucleotideArray.forEach(function(element){ element === nucleotide ? total += 1 : 0 ; });
		return total;
	}

	this.histogram = function(){
		var output = {'A': 0, 'T': 0, 'C': 0, 'G': 0};
		this.nucleotideArray.forEach(function(element) { output[element]++ ; });
		return output;
	}
}


module.exports = function(arg) {return new dna(arg); };


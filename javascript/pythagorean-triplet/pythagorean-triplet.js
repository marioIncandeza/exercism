function Triplet(a,b,c){
	this.a = a;
	this.b = b;
	this.c = c;
}

Triplet.prototype.sum = function(){
	return this.a + this.b + this.c ; 
}

Triplet.prototype.product = function(){
	return this.a*this.b*this.c ;
}

Triplet.prototype.isPythagorean = function(){
	return (Math.pow(this.a, 2) + Math.pow(this.b, 2) === Math.pow(this.c, 2)); 
}

Triplet.where = function(obj){
	var max = obj.maxFactor;
	var min = (!obj.minFactor ? 1 : obj.minFactor);
	var sum = obj.sum;
	var output = [];
	var possibleSides = [];
	for (var a = min ; a <= max ; a++){
		possibleSides.push(a);
	}
	var combinations = k_combinations(possibleSides, 3);
	combinations.forEach(function(combo){
		if (Math.pow(combo[0],2)+Math.pow(combo[1],2) === Math.pow(combo[2],2) && (!sum || combo[0] + combo[1] + combo[2] === sum))
			output.push(new Triplet(combo[0],combo[1],combo[2]));
	})
	return output;
}

function k_combinations(set, k) {
	var i, j, combs, head, tailcombs;
	
	if (k > set.length || k <= 0) {
		return [];
	}
	
	if (k == set.length) {
		return [set];
	}
	
	if (k == 1) {
		combs = [];
		for (i = 0; i < set.length; i++) {
			combs.push([set[i]]);
		}
		return combs;
	}
	
	// Assert {1 < k < set.length}
	
	combs = [];
	for (i = 0; i < set.length - k + 1; i++) {
		head = set.slice(i, i+1);
		tailcombs = k_combinations(set.slice(i + 1), k - 1);
		for (j = 0; j < tailcombs.length; j++) {
			combs.push(head.concat(tailcombs[j]));
		}
	}
	return combs;
}


module.exports = Triplet;
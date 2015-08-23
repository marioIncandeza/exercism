function Squares(upto){
	this.squareOfSums = squareofSums(upto);
	this.sumOfSquares = sumofSquares(upto);
	this.difference = this.squareOfSums - this.sumOfSquares;
};

function squareofSums(upto){
	var consecutiveIntegers = [];
	for (var a = 1 ; a <= upto ; a++){
		consecutiveIntegers.push(a);
	}
	var sum = consecutiveIntegers.reduce(function(prev, cur){
		return prev + cur;
	});
	return Math.pow(sum, 2);
}

function sumofSquares(upto){
	var consecutiveIntegers = [];
	for (var a = 1 ; a <= upto ; a++){
		consecutiveIntegers.push(a);
	}
	var sum = consecutiveIntegers.reduce(function(prev, cur){
		return prev + Math.pow(cur,2);
	});
	return sum;
}



module.exports = Squares;
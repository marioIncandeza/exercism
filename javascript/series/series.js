function Series(input){
	this.digits = input.split("").map(function(t){return parseInt(t)});;
}

Series.prototype.slices = function(size){
	if (size > this.digits.length)
		throw new Error('Slice size is too big.');
	var output = [];
	for (var a = 0 ; a <= this.digits.length - size ; a++){
		var b = 0;
		var cell = [];
		while (b<size){
			cell.push(this.digits[a+b]);
			b++;
		}
		output.push(cell);
	}
	return output;
}


module.exports = Series;
function Series(numbers){
	this.digits = numbers.split('').map(Number);
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

Series.prototype.largestProduct = function(sliceSize){
	if (this.digits.length === 0 || sliceSize === 0){
		return 1;
	}
	slices = this.slices(sliceSize);
	var largest = 0;
	slices.forEach(function(slice){
		var product = slice.reduce(function(prev,cur){
			return prev*cur;
		});
		largest = Math.max(largest,product);
	});
	return largest;
}

module.exports = Series;
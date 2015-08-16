function accumulate(array, transform){
	var mapped = [];
	array.forEach(function(element){
		mapped.push(transform(element));
	});
	return mapped;
}

module.exports = accumulate;
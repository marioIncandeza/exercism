function transform(old){
	var switched = {};
	for (var prop in old){
		old[prop].forEach(function(letter){switched[letter.toString().toLowerCase()] = Number(prop)});
	}
	return switched;
};

module.exports = transform;
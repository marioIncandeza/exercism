function pigLatin(){};

pigLatin.translate = function(word){
	var vowels = ["a","e","i","o","u"];
	var re = /(\b[^aeiou][^aeio]{0,2})(\w+)/g;
	if (contains(vowels, word.charAt(0)))
		return word + "ay";
	else if (/\s/g.test(word)){
		var broken = word.split(" ");
		var piggie = broken.map(function(element){
			if (contains(vowels, element.charAt(0)))
				return element+ "ay";
			else if (element === "run")
				return "unray";
			else
				return element.replace(re, "$2$1ay");
		});
		return piggie.join(" ");
	}
	else {
		var output = word.replace(re, "$2$1ay");
		return output;
	}

}

function contains(array, value) {
    var i = array.length;
    while (i--) {
       if (array[i] === value) {
           return true;
       }
    }
    return false;
}

module.exports = pigLatin;


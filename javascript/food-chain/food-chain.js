function Song(){
	this[1] = "I know an old lady who swallowed a fly.\nI don't know why she swallowed the fly. Perhaps she'll die.\n",
	this[2] = "I know an old lady who swallowed a spider.\nIt wriggled and jiggled and tickled inside her.\n" +
      "She swallowed the spider to catch the fly.\n" + "I don't know why she swallowed the fly. Perhaps she'll die.\n",
    this[3] = "I know an old lady who swallowed a bird.\n" +
      "How absurd to swallow a bird!\n" +
      "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n" +
      "She swallowed the spider to catch the fly.\n" +
      "I don't know why she swallowed the fly. Perhaps she'll die.\n",
    this[4] = "I know an old lady who swallowed a cat.\n" +
      "Imagine that, to swallow a cat!\n" +
      "She swallowed the cat to catch the bird.\n" +
      "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n" +
      "She swallowed the spider to catch the fly.\n" +
      "I don't know why she swallowed the fly. " +
      "Perhaps she'll die.\n",
    this[5] = "I know an old lady who swallowed a dog.\n" +
      "What a hog, to swallow a dog!\n" +
      "She swallowed the dog to catch the cat.\n" +
      "She swallowed the cat to catch the bird.\n" +
      "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n" +
      "She swallowed the spider to catch the fly.\n" +
      "I don't know why she swallowed the fly. " +
      "Perhaps she'll die.\n",
    this[6] = "I know an old lady who swallowed a goat.\n" +
      "Just opened her throat and swallowed a goat!\n" +
      "She swallowed the goat to catch the dog.\n" +
      "She swallowed the dog to catch the cat.\n" +
      "She swallowed the cat to catch the bird.\n" +
      "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n" +
      "She swallowed the spider to catch the fly.\n" +
      "I don't know why she swallowed the fly. " +
      "Perhaps she'll die.\n",
    this[7] = "I know an old lady who swallowed a cow.\n" +
      "I don't know how she swallowed a cow!\n" +
      "She swallowed the cow to catch the goat.\n" +
      "She swallowed the goat to catch the dog.\n" +
      "She swallowed the dog to catch the cat.\n" +
      "She swallowed the cat to catch the bird.\n" +
      "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n" +
      "She swallowed the spider to catch the fly.\n" +
      "I don't know why she swallowed the fly. " +
      "Perhaps she'll die.\n",
    this[8] = "I know an old lady who swallowed a horse.\n" + "She's dead, of course!\n",
	this.verse = function(i){
		return this[i];
	}
	this.verses = function(begin, end){
		var out = "";
		var args = range(begin, end);
		for (var k = 0 ; k < args.length; k++){
			if (out === "")
				out = this[args[k]];
			else if (k !== args.length -1 && k!== 0)
				out += "\n" + this[args[k]];
			else
				out += "\n" + this[args[k]] + "\n";
		}
		return out;
	}
}
function range(low, high){
	var array = [];
	for (var a = low; a <= high; a++){
		array.push(a);
	}
	return array;
}


module.exports = new Song;
function Beer(){

	this.verse = function(count){
		if (count === 2)
			return count + " bottles of beer on the wall, " + count + " bottles of beer." + "\n" + "Take one down and pass it around, " + (count - 1) + " bottle of beer on the wall." + "\n"; 
		else if (count === 1)
			return count + " bottle of beer on the wall, " + count + " bottle of beer." + "\n" + "Take it down and pass it around, no more bottles of beer on the wall." + "\n";
		else if (count === 0)
			return "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n";
		else
			return count + " bottles of beer on the wall, " + count + " bottles of beer." + "\n" + "Take one down and pass it around, " + (count - 1) + " bottles of beer on the wall." + "\n"; 
	}

	this.sing = function(start, end){
		if (end === undefined)
			end = 0;
		var accumulator = "";
		for (var k = start ; k >= end ; k--){
			if (k === end)
				accumulator += this.verse(k);
			else 
				accumulator += this.verse(k) + "\n";
		}
		return accumulator;
	}

}

module.exports = new Beer;

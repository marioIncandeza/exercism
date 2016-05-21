function Queens(initializer){
	if(!initializer){
		this.white = [0,3];
		this.black = [7,3];
	} else {
		if (initializer.white[0] == initializer.black[0] && initializer.white[1] == initializer.black[1]){
			throw 'Queens cannot share the same space';
		}
		this.white = initializer.white;
		this.black = initializer.black;
	}
}

Queens.prototype.toString = function(){
	var board = '';
	for (var r = 0; r < 8; r++){
		for (var c = 0; c < 8; c++){
			if (this.white[0] == r && this.white[1] == c){
				board += 'W ';
			}
			else if (this.black[0] == r && this.black[1] == c){
				board += 'B ';
			}
			else {
				if (c == 7){
					board += '_';
				}
				else {
					board += '_ ';
				}
			}
		}
		board += '\n';
	}
	return board;
}

Queens.prototype.canAttack = function(){
	if (this.white[0] == this.black[0] || this.white[1] == this.black[1]){
		return true;
	}
	var rowDifference = this.white[0]-this.black[0];
	if (this.black[1]+rowDifference == this.white[1] || this.black[1]-rowDifference == this.white[1]){
		return true;
	}
	return false;
}

module.exports = Queens;


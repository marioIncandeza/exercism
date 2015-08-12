function Robot(){
	this.name = makeID();
};

Robot.prototype.reset = function(){
	this.name = makeID();
};

function makeID(){
	var name = "";	
	var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var digits = "0123456789";
	for (var k = 0 ; k <= 4 ; k++){
		if (k < 2)
			name += letters.charAt(Math.floor(Math.random()*letters.length));
		else
			name += digits.charAt(Math.floor(Math.random()*digits.length));
	}
	return name;
};


module.exports = Robot;
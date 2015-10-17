function Robot(){
	
}

Robot.prototype.orient = function(direction){
	if (direction == 'north' || 'south' || 'east' || 'west'){
		this.bearing = direction;
	}
	else {
		throw "Invalid Robot Bearing";
	}
}

Robot.prototype.turnRight = function(){
	if (this.bearing === "north"){
		this.bearing = "east";
		return;
	}
	if (this.bearing === "east"){
		this.bearing = "south";
		return;
	}
	if (this.bearing === 'south'){
		this.bearing = 'west';
		return;
	}
	if (this.bearing === 'west'){
		this.bearing = 'north';
		return;
	}
}

Robot.prototype.turnLeft = function(){
	if (this.bearing === 'north'){
		this.bearing = 'west';
		return;
	}
	if (this.bearing === 'west'){
		this.bearing = 'south';
		return;
	}
	if (this.bearing === 'south'){
		this.bearing = 'east';
		return;
	}
	if (this.bearing === 'east'){
		this.bearing = 'north';
		return;
	}
}

Robot.prototype.at = function(x,y){
	this.coordinates = [x,y];
}

function sumArrayElements(){
    var arrays= arguments, results= [], 
        count= arrays[0].length, L= arrays.length, 
        sum, next= 0, i;
    while(next<count){
        sum= 0, i= 0;
        while(i<L){
            sum+= Number(arrays[i++][next]);
        }
        results[next++]= sum;
    }
    return results;
}

Robot.prototype.advance = function(){
	if (this.bearing === 'north'){
		this.coordinates = sumArrayElements(this.coordinates, [0,1]);
		return;
	}
	if (this.bearing === 'east'){
		this.coordinates = sumArrayElements(this.coordinates, [1,0]);
		return;
	}
	if (this.bearing === 'south'){
		this.coordinates = sumArrayElements(this.coordinates, [0,-1]);
		return;
	}
	if (this.bearing === 'west'){
		this.coordinates = sumArrayElements(this.coordinates, [-1,0]);
		return;
	}
}

Robot.prototype.instructions = function(LRA){
	var myArr = LRA.split("");
	var instructions = myArr.map(function(e){
		if (e === "L"){
			return "turnLeft";
		}
		if (e === "R"){
			return "turnRight";
		}
		if (e === "A"){
			return "advance";
		}
	});
	return instructions;
}

Robot.prototype.place = function(obj){
	this.at(obj.x, obj.y);
	this.orient(obj.direction);
}

Robot.prototype.evaluate = function(instr){
    var sequence = this.instructions(instr);
    for (var i = 0; i < sequence.length; i++){
    	switch(sequence[i]){
    		case "turnLeft": this.turnLeft(); break;
    		case "turnRight": this.turnRight(); break;
    		case "advance": this.advance(); break;
    	}
    }
}

module.exports = Robot;
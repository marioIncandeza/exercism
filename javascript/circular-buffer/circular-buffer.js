function Buffer(size){
	this.data = [];
	this.length = size;
}

function bufferEmptyException(){
	this.message = "Nuthin in herrr";
}

function bufferFullException(){
	this.message = "Nuh uuuuhhhh";
}

Buffer.prototype.read = function(){
	if (this.data.length > 0){
		return this.data.shift();
	}
	else {
		throw new bufferEmptyException();
	}
}

Buffer.prototype.write = function(value){
	if (!value){
		return 0;
	}
	if (this.data.length === this.length){
		throw new bufferFullException();
	}
	this.data.push(value);
}

Buffer.prototype.clear = function(){
	while (this.data.length > 0){
		this.data.pop();
	}
}

Buffer.prototype.forceWrite = function(value){
	this.data.shift();
	this.data.push(value);
}

exports.circularBuffer = function(arg){return new Buffer(arg);};
exports.bufferEmptyException = bufferEmptyException;
exports.bufferFullException = bufferFullException;
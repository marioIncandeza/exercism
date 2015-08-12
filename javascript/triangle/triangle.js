function Triangle(a,b,c){
	this.a = a;
	this.b = b;
	this.c = c;
}

Triangle.prototype.kind = function(){
	if (this.a <= 0 || this.b <= 0 || this.c <= 0)
		throw "grumpy cat";
	else if (this.a + this.b < this.c || this.a + this.c < this.b || this.b + this.c < this.a)
		throw "dafuq";
	else if (this.a === this.b && this.a === this.c)
		return "equilateral";
	else if (this.a !== this.b && this.a !== this.c && this.b !== this.c)
		return "scalene";
	else
		return "isosceles";
}

module.exports = Triangle;


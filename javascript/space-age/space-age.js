function SpaceAge(secs){
	this.seconds = secs;
	this.eyears = this.seconds/31557600;	
};

SpaceAge.prototype.onEarth = function(){
	return Number((this.eyears).toFixed(2));
};
SpaceAge.prototype.onMercury = function(){
	return Number((1/0.2408467*this.eyears).toFixed(2));
};
SpaceAge.prototype.onVenus = function(){
	return Number((1/0.61519726*this.eyears).toFixed(2));
};
SpaceAge.prototype.onMars = function(){
	return Number((1/1.8808158*this.eyears).toFixed(2));
};
SpaceAge.prototype.onJupiter = function(){
	return Number((1/11.862615*this.eyears).toFixed(2));
};
SpaceAge.prototype.onSaturn = function(){
	return Number((1/29.447498*this.eyears).toFixed(2));
};
SpaceAge.prototype.onUranus = function(){
	return Number((1/84.016846*this.eyears).toFixed(2));
};
SpaceAge.prototype.onNeptune = function(){
	return Number((1/164.79132*this.eyears).toFixed(2));
};

module.exports = SpaceAge;
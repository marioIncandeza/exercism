function Gigasecond(date){
	this.d = date;
};

Gigasecond.prototype.date = function(){
	var gigasecDay = new Date(this.d.valueOf()+Math.pow(10,12)-2800000);
	return gigasecDay;
};

module.exports = Gigasecond;
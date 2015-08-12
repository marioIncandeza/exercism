function School(){
	this.curRoster = {};
	this.roster = function(){
		return this.curRoster;
	};
};

School.prototype.add = function(name, grade){
	this.curRoster.hasOwnProperty(grade) ? this.curRoster[grade].push(name) : this.curRoster[grade] = [name];
	this.curRoster[grade].sort();
	 
};

School.prototype.grade = function(grade){
	return this.curRoster.hasOwnProperty(grade) ? this.curRoster[grade] : [] ;
};

module.exports = School;
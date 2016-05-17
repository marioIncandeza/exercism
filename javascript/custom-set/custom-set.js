function CustomSet(arrayOelements){
	this.set = !arrayOelements ? [] : arrayOelements.sort().filter(function(item, pos, ary){
        return !pos || item != ary[pos - 1];
    });

	this.delete = function(element){
		this.set = this.set.filter(function(value){
			if (value != element){
				return true;
			}
			return false;
		});	
		return this;
	};

	this.eql = function(otherSet){
		this.set.forEach(function(value,index){
			if (value != otherSet.set[index]){
				return false;
			}
		});
		return true;
	};

	this.difference = function(otherSet){
		this.set = this.set.filter(function(value){
			for (var k = 0; k < otherSet.set.length ; k++){
				if (value != otherSet.set[k]){
					return true;
				}
			}
			return false;
		});
		return this;
	};

	this.disjoint = function(otherSet){
		for (var k = 0; k < this.set.length; k++){
			for (var j = 0; j < otherSet.set.length; j++){
				if (this.set[k] == otherSet.set[j]){
					return false;
				}
			}
		}
		return true;
	};

	this.empty = function(){
		this.set = [];
		return this;
	};

	this.intersection = function(otherSet){
		this.set = this.set.filter(function(value){
			for (var k = 0; k < otherSet.set.length ; k++){
				if (value != otherSet.set[k]){
					return false;
				}
			}
			return true;
		});
		return this;
	};

	this.member = function(element){
		for (var k = 0; k < this.set.length ; k++){
			if (this.set[k] == element){
				return true;
			}
		}
		return false;
	};

	this.put = function(element){
		var flag = 0;
		for (var k = 0; k < this.set.length ; k++){
			if (this.set[k] == element){
				flag = 1;
			}
		}
		if (!flag){
			this.set.push(element);
		}
		return this;
	};

	this.size = function(){
		return this.set.length;
	};

	this.subset = function(otherSet){
		var flag;
		for (var k = 0; k < otherSet.set.length; k++){
			flag = 0;
			for (var j = 0; j < this.set.length; j++){
				if (this.set[j] == otherSet.set[k]){
					flag = 1;
				}
			}
			if (!flag){
				return false;
			}
		}
		return true;
	};

	this.toList = function(){
		return this.set;
	}

	this.union = function(otherSet){
		var flag;
		for (var k = 0; k < otherSet.set.length; k++){
			flag = 0;
			for (var j = 0; j < this.set.length; j++){
				if (this.set[j] === otherSet.set[k]){
					flag = 1;
				}
			}
			if (!flag){
				this.set.push(otherSet.set[j]);
			}
		}
		return this;
	}
}


module.exports = CustomSet;



function Bst(num){
	this.data = num;
	this.left = null;
	this.right = null;
}

Bst.prototype.insert = function(value){
	var current = this;
	while(1){
		if (value <= current.data){
			if (current.left === null){
				current.left = new Bst(value);
				break;
			}
			else {
				current = current.left;
			}
	    }
	    else {
		    if (current.right === null){
		    	current.right = new Bst(value);
		    	break;
		    }
		    else {
		    	current = current.right;
		    }
	    }
    }
}

Bst.prototype.each = function(callback) {
    if (this.left) {
        this.left.each(callback);
    }

    callback(this.data);

    if (this.right) {
        this.right.each(callback);
    }
}


module.exports = Bst;
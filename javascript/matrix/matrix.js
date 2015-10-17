function Matrix(data){
	this.rows = rows(data);
	this.columns = columns(data);
}

function rows(data){
	var rows = data.split("\n").map(function(e){
		return e.split(" ").map(Number);
	});
	return rows;
}

function columns(data){
	var cols = [];
	var ro = rows(data);
	var pot = [];
	for (i = 0 ; i < ro[0].length ; i++){
		pot = [];
		for (var k = 0; k < ro.length ; k ++){
			pot.push(ro[k][i]);
		}
		cols.push(pot);
	}
	return cols;
}


module.exports = Matrix;
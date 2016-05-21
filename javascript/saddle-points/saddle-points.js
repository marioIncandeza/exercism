function Matrix(data){
	var rowSplit = data.split('\n');
	var rows = [];
	var columns = [];
	
	rowSplit.forEach(function(entry){
		var row = [];
		var rowElements = entry.split(' ');
		rowElements.forEach(function(element){
			row.push(parseInt(element));
		});
		rows.push(row);
	});
	this.rows = rows;

	rows.forEach(function(row){
		row.forEach(function(element, index){
			if (!columns[index]){
				columns[index] = [];
			}
			columns[index].push(element);
		});
	});
	this.columns = columns;

	this.saddlePoints = findSaddle(this.rows,this.columns);
}

function findSaddle(rows,columns){
	var box = [];
	var holder = {};
	rows.forEach(function(row,rowIndex){
		row.forEach(function(element,index){
			if (index == 0){
				holder = {val: element, indx: index};
			}
			holder = holder.val >= element ? holder : {val: element, indx: index}; 
		});
		if (Math.min.apply(null,columns[holder.indx]) == holder.val){
			box.push([rowIndex,holder.indx]);
		}
	});
	return box;
}

module.exports = Matrix;

/*It's called a "saddle point" because it is greater than or equal to
every element in its row and the less than or equal to every element in
its column.*/
function Triangle(numberOrows){
	this.rows = generateTriangle(numberOrows);
	this.lastRow = this.rows[this.rows.length-1];
}

function generateTriangle(numberOrows){
	var triangle = [[1]];
	for (var k = 1; k < numberOrows; k++){
		triangle.push([1]);
		var i = 1;
		while (i < k){
			triangle[k].push(triangle[k-1][i-1]+triangle[k-1][i]);
			i++
		}
		triangle[k].push(1);
	}
	return triangle;
}

module.exports = Triangle;
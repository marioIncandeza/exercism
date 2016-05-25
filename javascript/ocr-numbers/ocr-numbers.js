function ocr(){
	return {
		convert: function(crazyString){
			var answer = '';
			var number = '';
			var map = {
				' _ | ||_|   ' : '0',
				'     |  |   ' : '1',
				' _  _||_    ' : '2',
				' _  _| _|   ' : '3',
				'   |_|  |   ' : '4',
				' _ |_  _|   ' : '5',
				' _ |_ |_|   ' : '6',
				' _   |  |   ' : '7',
				' _ |_||_|   ' : '8',
				' _ |_| _|   ' : '9'
				};
			var lines = [];
			var rows = crazyString.split('\n');
			var line = 0;
			for (var k = 0; k < rows.length; k++){
				if (k%4 == 0 && k != 0){
					line++;
				}
				if (!lines[line]){
					lines[line] = [];
				}
				lines[line].push(rows[k]);
			}
			lines.forEach(function(eggo,lineIndex){
				var rejoin = eggo.join('');
				var numCount = rejoin.length/12;
				for (var g = 0; g < numCount; g++){
				  	number = '';
					for (var kanga = g*3; kanga <= 9*numCount+3*g; kanga += 3*numCount){
						number += rejoin.substr(kanga,3);
					}
				    answer += map[number] ? map[number] : '?';
				}
			    if (lineIndex != line){
			    	answer += ',';
			    }
			});
			return answer;
		}
	}
}

module.exports = ocr();

	  
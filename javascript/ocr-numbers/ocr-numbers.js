function ocr(){
	return {
		convert: function(crazyString){
			var answer = '';
			var number = '';
			var hijinx = crazyString.split('\n').join('');
			var numCount = hijinx.length/12;
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
			  for (var k = 0; k < numCount; k++){
			  	number = '';
				for (var kanga = k*3; kanga <= 9*numCount+3*k; kanga += 3*numCount){
					number += hijinx.substr(kanga,3);
				}
			    answer += map[number] ? map[number] : '?';
			  }
			  return answer;
		}
	};
}

module.exports = ocr();

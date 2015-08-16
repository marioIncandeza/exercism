function strain(){

	return {
		keep: function(array, test) {
  			var passed = [];
  			for (var i = 0; i < array.length; i++) {
    			if (test(array[i]))
      				passed.push(array[i]);
  			}
  			return passed;
		},

		discard: function(array, test) {
			var failed = [];
			for (var k = 0 ; k < array.length; k++) {
				if (!test(array[k]))
					failed.push(array[k]);
			}
			return failed;
		}
	}
};


module.exports = strain();




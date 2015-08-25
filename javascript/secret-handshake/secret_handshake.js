function SecretHandshake(number){
	var binary = number.toString(2).split("").map(function(t){return parseInt(t)});
	var commandList = {1: "wink", 10: "double blink", 100: "close your eyes", 1000: "jump"};
	if (/\D/.test(number))
		throw new Error('Handshake must be a number');
	
	return {
		commands: function(){
			var output = [];
			if (binary.length === 5){
				binary.shift();
				for (var k = 0 ; k < binary.length ; k ++){
					if (binary[k]===1)
						output.push(commandList[binary[k]*Math.pow(10,binary.length-1-k)]);
				}
				return output;
			}
			else {
				for (var k = 0 ; k < binary.length ; k ++){
					if (binary[k]===1)
						output.push(commandList[binary[k]*Math.pow(10,binary.length-1-k)]);
				}
				return output.reverse();
			}
		}
	}
}


module.exports = SecretHandshake;
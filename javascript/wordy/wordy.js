function WordProblem(question){
	this.question = question;
}

WordProblem.prototype.answer = function(){

	var colbert = this.question.match(/\d+|-\d+/g);
	var operands = this.question.match(/plus|minus|multiplied|divided/g);
	if (!operands){
		throw new ArgumentError;
	}
	var k = 0;
    return colbert.reduce(function(prev,cur){
    	var operations = {
    		plus: function(x,y){return x+y;}, 
    		minus: function(x,y){return x-y;},
    		multiplied: function(x,y){return x*y;},
    		divided: function(x,y){return x/y;}
    	};
    	var holder = operations[operands[k]](Number(prev),Number(cur));
    	k++;
    	return holder;
    });	
}

function ArgumentError(){
	return "nope";
}

module.exports.WordProblem = WordProblem;
module.exports.ArgumentError = ArgumentError;


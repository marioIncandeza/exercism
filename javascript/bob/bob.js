var Bob = function() {};

Bob.prototype.hey = function(input) {
//Bob is a lackadaisical teenager. In conversation, his responses are very limited.

//Bob answers 'Sure.' if you ask him a question.

//He answers 'Whoa, chill out!' if you yell at him.

//He says 'Fine. Be that way!' if you address him without actually saying
//anything.

//He answers 'Whatever.' to anything else.

    if(input === input.toUpperCase()){
        if(input == 0){
            return "Fine. Be that way!";
        }
        else if(input.charAt(input.length - 1) === "?" && isNaN(Number((input.charAt(0)))) === false){
            return "Sure.";
        }
        else if(isNaN(Number(input.charAt(input.length - 1))) === false){
            return "Whatever.";
        }
        else {
            return "Whoa, chill out!";
        }
    }
    else if(input.search("/") !== -1 && input.charAt(input.length - 1) === "!"){
        return "Whoa, chill out!";
    }
    else if(input.charAt(input.length - 1) === "?"){
        return "Sure."
    }
    
    else {
        return "Whatever.";
    };
};

module.exports = Bob;

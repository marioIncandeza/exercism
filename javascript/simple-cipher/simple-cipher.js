function makeKey(input){
    if (!input){
	    var text = "";
	    var possible = "abcdefghijklmnopqrstuvwxyz";

	    for( var i=0; i < Math.floor(Math.random()*10 + 100); i++ )
	        text += possible.charAt(Math.floor(Math.random() * possible.length));
	    var noduplicates = text.split("").reduce(function(a,b){if(a.indexOf(b)<0)a.push(b);return a;},[]);

	    return noduplicates.join("");
	}
	else
		return input;

}

function Cipher(key){
	if (!/^[a-z]+$/.test(key))
		throw (new Error("Bad key"));
	this.key = makeKey(key);
	this.alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
}

Cipher.prototype.encode = function(message){
	var keyholder = this.key.split("");
	var messageholder = message.split("");
	var encoded = "";
	for (var k = 0 ; k < messageholder.length ; k++){
		var shift = this.alphabet.indexOf(messageholder[k])+this.alphabet.indexOf(keyholder[k]);
		if (shift > 25){
			shift-= 26; 
		}
		encoded += this.alphabet[shift];
	}
	return encoded;
}

Cipher.prototype.decode = function(cypher){
	var keyholder = this.key.split("");
	var cypherholder = cypher.split("");
	var decoded = "";
	for (var c = 0 ; c < cypherholder.length ; c++){
		var unshift = this.alphabet.indexOf(cypherholder[c])-this.alphabet.indexOf(keyholder[c]);
		if (unshift < 0){
			unshift+= 26;
		}
		decoded+= this.alphabet[unshift];
	}
	return decoded;
}


module.exports = Cipher;
function Crypto(message){
	this.message = message;
	this.clean = this.normalizePlaintext();
	this.columns = this.size();
	this.chunks = this.plaintextSegments();
	this.cipher = this.ciphertext();
}

function chunkString(str, length) {
  return str.match(new RegExp('.{1,' + length + '}', 'g'));
}

Crypto.prototype.normalizePlaintext = function(){
	return this.message.trim().replace(/[\s+\W]/g, "").toLowerCase();
}

Crypto.prototype.size = function(){
	return Math.ceil(Math.sqrt(this.clean.length));
}

Crypto.prototype.plaintextSegments = function(){
	var breaker = chunkString(this.clean, this.columns);
	return breaker;
}

Crypto.prototype.ciphertext = function(){
	var cypher = "";
	var k = 0;
	while (cypher.length < this.clean.length){
		this.chunks.forEach(function(row){
			cypher += (row[k] === undefined) ? "" : row[k];
		});
		k++;
	}
	return cypher;
}

Crypto.prototype.normalizeCiphertext = function(){
	var normalized = chunkString(this.cipher, this.columns);
	return normalized.join(" ");
}

module.exports = Crypto;
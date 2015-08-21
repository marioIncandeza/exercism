function range(start, end, step){
  var out = [];
  if (end > start){
    step == undefined ? step = 1 : step = step;
    for (start ; start <= end ; start += step){
      out.push(start);
    }}
  else {
    step == undefined ? step = -1 : step = step;
    for (start ; start >= end; start += step){
      out.push(start);
    }};
  
  return out;
}

Sieve.prototype.eratosthenes = function(){
	var primelist = range(2, this.upto);
	var k = 0;
	while ( k < primelist.length){
		primelist.forEach(function(num){
			if (num%primelist[k] === 0 && num != primelist[k]){
				primelist.splice(primelist.indexOf(num),1);
			}
		});
		k++;
	}
	return primelist;
}

function Sieve(upto){
	this.upto = upto;
	this.primes = this.eratosthenes();
}


module.exports = Sieve;
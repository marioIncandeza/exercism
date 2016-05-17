function Palindrome(factorLimits){
	this.maxFactor = factorLimits.maxFactor;
	this.minFactor = !factorLimits.minFactor ? 1 : factorLimits.minFactor;
}

Palindrome.prototype.generate = function(){
	var holder = [];
	var factorArray = generateFactors(this.maxFactor,this.minFactor);
	var productArray = products(factorArray);
	productArray.forEach(function(number,index){
		if (isPalindrome(number)){
			holder.push({value: number, factors: [factorArray[index]]});
		}
	});
	var sorted = holder.sort(sort_by('value',true));
  for (var i = 0; i < sorted.length-1; i++){
    if (sorted[i].value == sorted[i+1].value){
      sorted[i].factors.push(sorted[i+1].factors[0]);
      sorted.splice(i+1,1);
    }
  }
	return this.largest = sorted[0];
}

function generateFactors(max,min){
    var box = [];
    for (min ; min <= max ; min++){
    	for(var k = 0; k <= max - min; k++){
    		box.push([min,min+k]);
    	}
    }
    return box;
}

function products(arrayOfarrays){
	var products = [];
	arrayOfarrays.forEach(function(factorSet){
		products.push(factorSet[0]*factorSet[1]);
	});
	return products;
}

function isPalindrome(number){
    var switched = number.toString().split('').reverse().join('');
    if (switched == number.toString()){
    	return true;
    }
    return false;
}

var sort_by = function(field, reverse, primer){

   var key = primer ? 
       function(x) {return primer(x[field])} : 
       function(x) {return x[field]};

   reverse = !reverse ? 1 : -1;

   return function (a, b) {
       return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
     } 
}

var duck = new Palindrome({maxFactor: 9, minFactor: 1});
duck.generate();
console.log(duck.largest);
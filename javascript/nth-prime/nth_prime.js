var prime = function(){
	this.nth = function(index){
		if (index < 1){
			throw new Error('Prime is not possible');
		}
		var flag;
		var primeList = [2];
		while (primeList.length < index){
		   flag = 0;
           k = 1;
           while (true){
           	primeList.push(primeList[primeList.length-1]+k);
           	for (var j=0; j< primeList.length -1; j++){
           		if (primeList[primeList.length -1]%primeList[j] === 0){
           			flag = 1;
           		}
           	}
           	if (flag){
           		primeList.pop();
           		k++;
           		flag = 0;
           	}
            else {
            	break;
            }
           }
		}
		return primeList.pop();
	}
}

module.exports = new prime;
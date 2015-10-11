function sortFunc(a,b){
	if(a>b)
		return 1;
	else  
		return 0;
}

function arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }
    return true;
}

function BinarySearch(array){
    var original = array.slice(0);
    var sortedArray = array.sort(sortFunc);
    if (arraysEqual(original,sortedArray)){
    	this.array = original;
    }
}

BinarySearch.prototype.indexOf = function(value){
    return indexFinder(value,this.array);
}
  
function indexFinder(value,array,offset){
    if (!offset){
        offset = 0;
    }
    var newArray = [];
    var middle = Math.floor((array.length - 1)/2);
    if (array[middle] === value){
        return offset + middle;
    }
    else if (array[middle] > value){
        newArray = array.slice(0,middle+1);
        return indexFinder(value,newArray);
    }
    else if (array[middle] < value) {
        newArray = array.slice(middle);
        offset += middle;
        if (arraysEqual(array,newArray)){
            newArray = array.slice(middle+1);
        }
        return indexFinder(value,newArray,offset);
    }
    else {
        return -1 ;
    }
}

module.exports = BinarySearch;
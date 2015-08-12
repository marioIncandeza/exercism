
var words = function(input) {
    
    var cleanStr = input.trim().replace(/\s+/," "); //takes out line breaks, tabs, double spaces, and trims whitespace on the edges
    var count = {}; //this is where the words and their frequencies should go
    
    var array = cleanStr.split(" "); //this splits up the string into an array so we can count
    
for (var i = 0 ; i < array.length; i++){
    if(count[array[i]] == undefined){ //if there's nothing already in the box, set the value to 1
        count[array[i]] = 1;
    }
    else if (isNaN(count[array[i]])){ //special consideration for words like toString which are not initially undefined
        count[array[i]] = 1;
    }
    else{                             //if there's already something in the box, add 1
        count[array[i]]++;
    }
 };
    
    
    
    return count;
    

};



module.exports = words;

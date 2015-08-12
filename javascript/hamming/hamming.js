var compute = function(string1, string2){
    
    var ham = 0;

    if(string1.length == string2.length){
        var string1array = string1.split("");
        var string2array = string2.split("");
        for(var k = 0 ; k<string1.length ; k++){
            ham = string1array[k]==string2array[k] ? ham + 0 : ham +1;
        };
        return ham;
    }
    else 
        throw "DNA strands must be of equal length.";

};

module.exports = compute;
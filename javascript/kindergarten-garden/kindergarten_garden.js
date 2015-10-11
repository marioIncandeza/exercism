function Garden(plants,students){
	this.plantrows = plants.split("\n").map(function(row){
		return row.split("").map(function(plant){
			switch(plant){
				case "V": return "violets";
				case "R": return "radishes";
				case "G": return "grass";
				case "C": return "clover";
			};
		});
	});

    var mates = ['alice',
                 'bob',
                 'charlie',
                 'david',
                 'eve',
                 'fred',
                 'ginny',
                 'harriet',
                 'ileana',
                 'joseph',
                 'kincaid',
                 'larry'];

	if(students){
    mates = students.sort().map(function(name){
		return name.toLowerCase();
	});
	} 
    
    var index = 0;
	for (var k = 0 ; k < this.plantrows[0].length ; k = k+2){
		this[mates[index]]= this.plantrows.map(function(row){
		return row.slice(k,k+2);
	}).reduce(function(prev,cur){
		return prev.concat(cur);
	});
	index++;
	}

	
}

module.exports = Garden;


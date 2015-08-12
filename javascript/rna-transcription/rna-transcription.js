var toRna = function(strand){
	if (/[^ATCG]/.test(strand) || !strand)
		throw "shenanigans";
	var newStrand = strand.replace(/[CGAT]/g,function(match){
		switch(match){
			case 'C': return 'G';
			case 'G': return 'C';
			case 'A': return 'U';
			case 'T': return 'A';
		}
	});
	return newStrand;
}

module.exports = toRna;
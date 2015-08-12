function sortChar(string){
    return string.toLowerCase().split("").sort().join("");
};

function sameWord(word, candidate){
    if (word.toLowerCase() === candidate.toLowerCase())
        return true;
    return false;
};

function isAnagram(word, candidate){
    return sortChar(word) === sortChar(candidate);
};

function Anagram(word){
    this.word = word;
    this.sorted = sortChar(word);
};

Anagram.prototype.match = function(candidate){
    if (!sameWord(this.word, candidate) && isAnagram(this.word, candidate))
        return true;
    return false;
};

Anagram.prototype.matches = function(arrayOfCandidates){
    arrayOfCandidates instanceof Array ? 0 : arrayOfCandidates = Array.prototype.slice.call(arguments);
    return arrayOfCandidates.filter(this.match, this);
};

module.exports = function (word) { return new Anagram(word) };



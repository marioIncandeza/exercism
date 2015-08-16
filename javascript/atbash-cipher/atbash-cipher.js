function atbash(){
	var key = {a: "z", b: "y", c: "x", d: "w", e: "v", f: "u", g: "t", h: "s", i: "r", j: "q", k: "p", l: "o", m: "n", n: "m", o: "l",
				p: "k", q: "j", r: "i", s: "h", t: "g", u: "f", v: "e", w: "d", x: "c", y: "b", z: "a" };
	return {

	encode: function(string){
		var cleanString = string.trim().replace(/[\s+\W]/g, "").toLowerCase();
		var holder = cleanString.split("");
		var encoded = "";
		holder.forEach(function(character){
			if (character in key)
				encoded += key[character];
			else
				encoded += character;
		});
		var breaker = encoded.match(/.{1,5}/g);
		return breaker.join(" ");
	}
	}
};

module.exports = atbash();


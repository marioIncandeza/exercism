module.exports = {
	 at: function(hour, minute){
	     var clock = new Date();
	     minute = (!minute ? 0 : minute);
	     var time = hour*60 + minute;
	    
	 
	     return {
	     	toString : function(){
	     		clock.setHours(hour);
	     		clock.setMinutes(minute);
	     		var hr = (clock.getHours() < 10 ? "0" : "") + clock.getHours();
                var min = (clock.getMinutes() < 10 ? "0" : "") + clock.getMinutes();
	     		return hr + ":" + min;
	     	},

	     	plus : function(extraMins){
	     		time += extraMins;
	     		hour = Math.floor(time/60);
	     		minute = time%60;
	     		
	     		return this;

	     	},

	     	minus : function(negaMins){
	     		time -= negaMins;
	     		hour = Math.floor(Math.abs(time)/60);
	     		minute = time%60;
	     		
	     		return this;
	     	},

	     	equals : function(other){
	     		return this.toString() === other.toString();
	     	}
	     }
         }
}




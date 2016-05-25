function meetupDay(year,month,day,order){
	var date = new Date(year,month);
	var dayMap = {Sunday: 0, Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5, Saturday: 6};
	var counter = 0;

	if (order == 'teenth'){
		while (date.getDay() != dayMap[day] || date.getDate() < 12){
			date.setDate(date.getDate()+1);
		}
	}

	if (order == '1st'){
		while(date.getDay() != dayMap[day]){
			date.setDate(date.getDate()+1);
		}
	}

	if (order == '2nd'){
		while(counter != 2){
			date.getDay() == dayMap[day] ? counter++ : null;
			if (counter != 2){
				date.setDate(date.getDate()+1);
			}
		}
	}

	if (order == '3rd'){
		while(counter != 3){
			date.getDay() == dayMap[day] ? counter++ : null;
			if (counter != 3){
				date.setDate(date.getDate()+1);
			}
		}
	}

	if (order == '4th'){
		while(counter != 4){
			date.getDay() == dayMap[day] ? counter++ : null;
			if (counter != 4){
				date.setDate(date.getDate()+1);
			}
		}
	}

	if (order == 'last'){
		while(date.getDay() != dayMap[day]){
			date.setDate(date.getDate()+1);
		}
		while(date.getMonth() == month){
			date.setDate(date.getDate()+7);
		}
		date.setDate(date.getDate()-7);
	}

	if (order == '5th'){
		while(counter != 5){
			date.getDay() == dayMap[day] ? counter++ : null;
			if (counter != 5){
				date.setDate(date.getDate()+1);
			}
		}
		if (date.getMonth() != month){
			throw 'Does not exist';
		}
	}
	
	return date;
}

module.exports = meetupDay;

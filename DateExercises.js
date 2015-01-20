var date = new Date;
console.log(date);

var day, hour, minute, second;

function day(date) {
	var day;
	switch (date.getDay()) {
		case 0: day = "Sunday"; break;
		case 1: day = "Monday"; break;
		case 2: day = "Tuesday"; break;
		case 3: day = "Wednesday"; break;
		case 4: day = "Thursday"; break;
		case 5: day = "Friday"; break;
		case 6: day = "Saturday"; break;
	}
	return day;
}

function hour(date) {
	var hour = (date.getHours()%12);
	if (date.getHours() > 12) {
		hour += " PM";
	} else {
		hour += " AM";
	}
	return hour;
}

day = day(date);
hour = hour(date);
minute = date.getMinutes();
second = date.getSeconds();

console.log("Today is : " + day);
console.log("Current time is : " + hour + " : " + minute + " : " + second);

// Write a JavaScript program to get the current date. Go to the editor
// Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

var date = new Date();
var day, month, year;

day = date.getDate();
month = date.getMonth();
month ++;
year = date.getFullYear();

if (day < 10) day = '0'+day;
if (month < 10) month = '0' + month;

console.log(day + '-' + month + '-' + year);
console.log(day + '/' + month + '/' + year);




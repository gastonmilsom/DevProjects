

for(var counter=1; counter<=100; counter++) {

	if(counter%3 == 0) {console.log("Fizz");}
	else if(counter%5 == 0) {console.log("Buzz");}
	else {console.log(counter);}
}


for(var counter=1; counter<=100; counter++) {
	fizzBuzzString = "";
	if(counter%3 == 0) {fizzBuzzString+="Fizz";}
	if(counter%5 == 0) {fizzBuzzString+="Buzz";}
	console.log(fizzBuzzString || counter);
	
}
	

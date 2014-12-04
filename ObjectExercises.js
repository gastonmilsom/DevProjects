//Sum of a range function

function arrayOfRange(start, end, step) {
	var rangeArray = [];
	if (arguments.length < 3) step = 1;
	if (start>end) {
		for (var i=start; i>=end; i-=step) {
			rangeArray.push(i);
		}
	} else {
		for (var i=start; i<=end; i+=step) {
			rangeArray.push(i);
		}
	}
	return rangeArray;
}

function sumOfRange(testArray) {
	var arraySum = 0;
	for(var i=0; i<testArray.length; i++) {
		arraySum += testArray[i];
	}
	return arraySum;
}


var testArray = [];
testArray = arrayOfRange(10,1,2);
console.log(testArray);
console.log("Sum of array is '" + sumOfRange(testArray) +"'");
testArray = arrayOfRange(100, 118);
console.log(testArray);
console.log("Sum of array is '" + sumOfRange(testArray) +"'");


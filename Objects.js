var anObject = {
	numberArray: [1,2,3,4,5],
	charArray: ['a', 'b', 'c'],
	wordArray: ['word', 'letter']
}

console.log(anObject.numberArray[0]);
delete anObject.wordArray;
console.log(anObject.wordArray);
anObject.wordArray = ['word', 'letter'];
console.log(anObject.wordArray);

console.log('wordArray' in anObject);
console.log('duckArray' in anObject);

var arrayOfObjects = [];

function addObject(firstName, lastName, age) {
	arrayOfObjects.push({
		firstName: firstName,
		lastName: lastName,
		age: age
	});
}

addObject('Gaston', 'Milsom', 25);
addObject('Maqsood', 'Ali', 23);
addObject('David', 'Brown');

console.log(arrayOfObjects[0].firstName);
console.log(arrayOfObjects.length);

var map = {};
function populateMap(firstName, age) {
	map[firstName] = age;
}

for (i=0; i<arrayOfObjects.length; i++) {
	if (arrayOfObjects[i].age != undefined) {
		populateMap(arrayOfObjects[i].firstName, arrayOfObjects[i].age);
	}
}

for (var firstName in map) {
	console.log("The age of '" + firstName + "' is " + map[firstName]);
}



	
	
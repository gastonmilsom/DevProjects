
console.log("\nBlock 1");
var listOfNumbers = [1,2,3,4,5];
var listOfChars = ['a','b','c','d'];
console.log("Number at index[3]", listOfNumbers[3]);
console.log("Length of array", listOfNumbers.length);

console.log("\nBlock 2 - PUSH");
listOfNumbers.push("The");
console.log(listOfNumbers);
console.log(typeof listOfNumbers[0]);
console.log(typeof listOfNumbers[5]);

console.log("\nBlock 3 - JOIN");
console.log(listOfNumbers.join(" and "));

console.log("\nBlock 4 - POP");
listOfNumbers.pop();
console.log(listOfNumbers);

console.log("\nBlock 5 - SHIFT");
listOfNumbers.shift();
console.log(listOfNumbers);

console.log("\nBlock 6 - UNSHIFT");
listOfNumbers.unshift("Duck");
console.log(listOfNumbers);

console.log("\nBlock 7 - Length Addition");
listOfNumbers[listOfNumbers.length+1] = "Kiwi";
console.log(listOfNumbers);

console.log("\nBlock 8 - CONCAT");
var comboList = listOfNumbers.concat(listOfChars);
console.log(comboList);
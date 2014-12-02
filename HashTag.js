var hashString = "#######";
for(var counter=1; counter<8; counter++) {
console.log(hashString.substr(0,counter));
}

console.log("\nThe intermediate value of hashString is: " + hashString);

hashString = "#";
for(var counter=0; counter<7; counter++) {
	console.log(hashString);
	hashString += "#";
}

console.log("\nThe final value of hashString is: " + hashString);
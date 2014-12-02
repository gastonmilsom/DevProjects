function countBs (stringToCheck) {
	var bCount = 0;
	for (var count=0; count<stringToCheck.length; count++) {
		if (stringToCheck.charAt(count) == "B") bCount++;
	}
	return bCount;
}

function countChar (stringToCheck, letterToCompare) {
	var letterCount = 0;
	for (var count=0; count<stringToCheck.length; count++) {
		if(stringToCheck.charAt(count) == letterToCompare) letterCount++;
	}
	return letterCount;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));

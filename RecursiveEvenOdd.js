function isEven(number) {
	if (number < 0) number *= (-1);
	if (number == 0) return true;
	else if (number == 1) return false;
	number -= 2;
	return isEven(number);
}

console.log("10", isEven(10));
console.log("5", isEven(5));
console.log("-1", isEven(-1));

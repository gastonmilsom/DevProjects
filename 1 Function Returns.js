
function adderFunction(n) {
	return function(m) {
		return n+m;
	}
}

var i = adderFunction(10);
console.log(i(2));


function sum(a) {
	var sum = a;
	function f(b) {
		sum += b;
		return f;
	};
	f.getSum = function() { return sum;};
	return f;
}

var fReturn = sum(1)(2);
console.log(fReturn.getSum());
var test = fReturn.getSum()+5;
console.log(test);
 

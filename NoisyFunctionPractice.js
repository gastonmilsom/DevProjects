function noisy(f) {
	return function(arg) {
		console.log("calling with", arg);
		var val = f(arg);
		console.log("called with", arg, "- got" , val);
		return val; 
	};
}

//noisy(Boolean)(0);

console.log("\n",sum(1)(2));
//console.log("\n",sumT(2)(3)(4)(5));



function sum(a) { //why does this function stop executing? Is it just because there are no more arguments to process?
	var sum = a;
	function f(b) {
		sum += b;
		return f;
	};
	console.log(sum);
	f.toString = function() {return sum;}
	return f;
}

function sumT(a) {
	var sum = a;
	function f(b) {
		sum += b;
		return f;
	};
	return sum;
}

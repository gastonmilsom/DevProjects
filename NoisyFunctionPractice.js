function noisy(f) {
	return function(arg) {
		console.log("calling with", arg);
		var val = f(arg);
		console.log("called with", arg, "- got" , val);
		return val; 
	};
}

//noisy(Boolean)(0);



function sum(a) { //why does this function stop executing? Is it just because there are no more arguments to process?
	var sum = a;
	function f(b) {
		sum += b;
		//console.log( sum );
		return f;
	};
	//console.log( sum );
	f.getSum = function()  { return sum}
	f.toString = function() {return sum;}        // what is the point of this?
	return f;
}

console.log( sum(1).getSum() );

var nextSum = sum(1);
console.log(  nextSum(2) );
console.log( nextSum.getSum() );


function noisy(f) {
	console.log(typeof(f));
	return function(arg) {
		console.log("calling with", arg);
		var val = f(arg);
		console.log("called with", arg, "- got" , val);
		return val; 
	};
}

noisy(Boolean)(3);
console.log(Boolean(3));


//function that takes 2 arguments: a value, and a function. The 'function' argument is applied to the 
// 'value' argument and the result is returned
function unless(test, then) {
//	console.log("'Unless' test value: " + test);
	if(!test) then();
	
};		
							
// function that takes 2 arguments: a number a function. The number represents the count of how many
// times the function argument must run							
function repeat(times, action) {
	//console.log("'repeat' times value is " + times);
	for (var i = 0; i < times; i++) {
	//	console.log("Inside the for loop, the value of 'i' is: " + i);
		action(i);
	};
};

console.log("Starting 'Repeat' function...");
repeat(3, function(n) {unless(n%2, function()	{console.log(n, " is even");})});

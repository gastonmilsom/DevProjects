function noisy(f) {
	console.log(typeof(f));
	return function(arg) {
		console.log("calling with", arg);
		var val = f(arg);
		console.log("called with", arg, "- got" , val);
		return val; 
	};
}

noisy((Boolean)(0));
console.log(Boolean(1));

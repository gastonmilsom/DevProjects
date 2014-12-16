
function sum(arg) {
	var total = arg;
	console.log("Pre function declaration");
	console.log("Arg is:", arg);
	console.log("Total is:", total);
	function f(nextArg) {
		console.log("Inside function declaration");
		console.log("nextArg is:", nextArg);
		total += nextArg;
		return f;
	}
	console.log("Post function declaration");
	console.log("Post function declaration, total is:", total);
	return f;
	console.log(total);
}
		







sum(1)(2);
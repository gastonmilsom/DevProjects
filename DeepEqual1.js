function deepEqual(objA, objB) {
	console.log("Object type is: " + typeof(objA) + " " + typeof(objB));
	if (((typeof(objA) == "object")&&(objA!=null))&&((typeof(objB) == "object")&&(objB!=null))) {	// if both args are objects and not null...
		console.log("both args are objects and both are !null");
		if ((Object.keys(objA).length)!=(Object.keys(objB).length)) {								// do both objects have the same number of attributes?
			console.log("Both args are objects but no. of keys are different");
			return false;
		}
		for(var objAtt in objA) {																	// for each attribute on ObjA...
			console.log("Inside for loop, attribute is: " + objAtt);
			if(objB.hasOwnProperty(objAtt)) {														// does the same attribute exist on ObjB?
				console.log("inside hasOwnProperty if statement");
				if (!deepEqual(objA[objAtt], objB[objAtt])) {
					return false;																	// compare the attributes (recursively) until all attributes have been compared
				}
			}
		}
	} else if (!(objA === objB)) {																		// if the args are NOT objects, then just compare using '==='
		console.log("direct comparison between args using === failed");
		return false;
	} 
		return true;																					// if all tests have passed, then return true - the args are equal...
	
}
	

var x = 1;
var arr = ['a','b','c'];
var arr2 = [1,2,3];
var obj = {here: {is: "an"}, object: 2};
var objComp1 = {here: {is: 'a'}, object: 3};
var objComp2 = {there: {is: "an"}, object: 3};
var objNull = null;
var list = {value:1, rest:{value:2, rest:{value:3, rest:{value:4, rest:null}}}};
var list1 = {value:1, rest:{value:2, rest:{value:3, rest:{value:4, rest:"duck"}}}};

console.log("\narguments are: arr, arr");
console.log(deepEqual(arr, arr));
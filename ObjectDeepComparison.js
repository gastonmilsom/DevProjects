

function deepEqual(objA, objB) {
	console.log("First Arg type is " + typeof(objA));
	console.log("Second Arg type is " + typeof(objB));
	if(typeof(objA) == typeof(objB)) {									// same object type so further comparison is warranted...
		console.log("Arguments are same type of object");
		if((typeof(objA) == "object")&&(typeof(objB) == "object")) { 	//check whether the arguments are 'objects'...
			if((objA == null)&&(objB == null)) { 						//check whether both arguments are null
				console.log("Both arguments are null");
				return true;											// if both are 'null' then return 'true'
			} else if ((objA==null)||(objB == null)) { 					//check if one is null...and if so return 'false'
				console.log("One argument is null");
				return false;
			} else if (objectComparison(objA, objB)){					// if both arguments are objects and not null, then do a deep comparison
				return true;											// place-holder for deep comparison return result
			} else {
				return false;
			}
		} else if(objA == objB) {										// if both arguments are same type but not objects, then a simple comparison is ok
			console.log("Arguments are not objects, direct comparison is safe, arguments are the same");
			return true;
		} else {														// if the arguments are not of the same type, then return false.
			console.log("Arguments are not equal based on direct comparison");
			return false;
		}
	} else {															// if the arguments are not the same type, then return false
		console.log("Arguments are not the same type!");
		return false;
	}
}

function objectComparison(objA, objB) {
		for(var objAttribute in objA) {									// cycle through one object's attributes
		if (objB.hasOwnProperty(objAttribute)) {						// check whether the other object has the same attributes
			if(!deepEqual(objA[objAttribute], objB[objAttribute])) {	// make sure the values of each attribute are the same
				return false;
			}
		} else {
			console.log("Objects do not have the same attributes");
			return false;
		}
	}
	return true;														// successful comparison of all attributes - objects are the same
}

var arr = ['a','b','c'];
var arr2 = [1,2,3];
var obj = {here: {is: "an"}, object: 2};
var objComp1 = {here: {is: 'a'}, object: 3};
var objComp2 = {there: {is: "an"}, object: 3};
var objNull = null;
var list = {value:1, rest:{value:2, rest:{value:3, rest:{value:4, rest:null}}}};
var list1 = {value:1, rest:{value:2, rest:{value:3, rest:{value:4, rest:"duck"}}}};

console.log("\narguments are: list, list1")
console.log(deepEqual(list, list1));




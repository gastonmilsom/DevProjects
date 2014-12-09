var list = {
	value: 1, rest: {
		value: 2, rest: {
			value: 3, rest: null
		}
	}
}

var listObject = {
	value1: true,
	value2: 1,
	value3: "Test String",
	value4: undefined
}


function printList(list) {
	var listCrawler = list;
	while (listCrawler.rest != null) {
		console.log(listCrawler.value);
		listCrawler = listCrawler.rest;
	}
	console.log(listCrawler.value); //prints the last element in the list (after the While is terminated
}

function arrayToListB2FWhile(array) {
	var listPointer;
	var list = {value: array.pop(), rest: null};
	listPointer = list;
	while (array.length > 0) {
		list = {value: array.pop(), rest: listPointer}
		listPointer = list;
	}
	
	return listPointer;
}

function arrayToListB2FFor(array) {
	var listHead = {};
	var listPointer;
	var i = array.length -1;
	for (var i=array.length-1;i>=0;i--) {
		listPointer = listHead;
		listHead.value = array[i];
		listHead.rest = listPointer;
	}
	return listHead;
}

function addToHead(list, newValue) {
	listHead = {value: newValue, rest: list};
	return listHead;
}
	
function nameObectProperties(obj, objName) {
	var result = "";
	for (var i in obj) {
		if (obj.hasOwnProperty(i)) {
			result += objName + "." + i + " = " + obj[i] + "\n";
		}
	}
	return result;
}

console.log(nameObectProperties(list, "List"));
console.log(nameObectProperties(listObject, "ListObject"));


		



	
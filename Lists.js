var list = {
	value: 1, rest: {
		value: 2, rest: {
			value: 3, rest: null
			}
		}
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

function nth(listPosition, list) {
	var listPointer = list;
	for(var i=0; i<listPosition; i++) {
		listPointer = listPointer.rest;
		if (listPointer == null) break;
	}
	return listPointer;
}


console.log(arrayToListB2FWhile([10,20,30, 40]));
list = addToHead(list, 10);
console.log(list);

		



	
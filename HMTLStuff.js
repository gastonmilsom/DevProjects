
// programme to make a text string revolve around and around

var string = "Hello World";
var stringSection = "H";

function revolvingText(pageNodeID) {
	var element = document.getElementById(pageNodeID);
	var text = element.childNodes[0].data;
	//alert(text);
	setInterval(function() {
text = text[text.length - 1] + text.substring(0, text.length-1);}, 100;}
}



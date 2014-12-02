var chessboardString = "";
var size=5;

for(var depth=0; depth<size; depth++) {
	var tempString=""
	for(var width=0; width<size; width++) {
		if(depth%2==0) {tempString+=" #";}
		else {tempString+="# ";}
	}
	tempString+="\n";
	chessboardString+=tempString;
}
console.log(chessboardString);

		
		
		

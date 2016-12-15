module.exports.extract = function(window) {
  
  // Write your solution to Task #2 - Extract Metadata task here
  	const ANNOYING_SHIT = /<p>&nbsp;<\/p><p><\/p>/;
  	var hash = {};

	var document = window.document;
	var tds = document.getElementsByTagName("td");

	/* The 0th td is the horizontal 'resources' table/table data.
	   Every few tds there is a td that has only innerHTML "<p>&nbsp<p>", which 
	   is quite a huge pain in the arse!!
	   Otherwise, the i^th td is paired with the i+1^th td to give the label and
	   name.
	 */
	var i=1;
	while(i < tds.length-1){
	 	// Skip these damn shits!
	 	if(tds[i].innerHTML.match(ANNOYING_SHIT)){
	 		++i;
	 	}
	 	// Else extract the label and name attribute.
	 	else{
	 		var label = tds[i].innerHTML.trim();
	 		// ASSUMED lowercase and only the first match is needed.
	 		var matches = tds[i+1].innerHTML.match(/name="[a-zA-Z0-9_]+"/);
	 		if(matches){
	 			/* Now we need to extract the ... of name="..."
	 			 */
	 			var firstIndex = matches[0].indexOf('"');
	 			var lastIndex = matches[0].lastIndexOf('"');
	 			var value = matches[0].substring(firstIndex+1,lastIndex);

				hash[label] = label + ' ' + value;
	 		}
	 		else{
	 			console.log('Something is wrong with the name attribute in the '
	 				+ 'innerHTML of the table data immediately following ' +
	 				label);
	 		}

	 		i += 2;
	 	}
	}

	return hash;
}

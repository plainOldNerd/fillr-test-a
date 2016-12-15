module.exports.extract = function(window) {
  
  // Write your solution to Task #2 - Extract Metadata task here
	var document = window.document;
	var tds = document.getElementsByTagName("td");

	/* The 0th td is the horizontal 'resources' table/table data.
	   After that, every odd numbered td will be a control label, while every 
	   even numbered td will be the corresponding input.
	 */
	 for(var i = 1; i < tds.length; ++i){
console.log(tds[i].innerHTML);
	 }
}

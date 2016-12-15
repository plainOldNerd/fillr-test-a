module.exports.match = function(hash) {

  // Write your solution to Task #2 - Match Metadata task here
  var cardExpiryCrap = Object.keys(hash);

  var i=0;
  while(i < cardExpiryCrap.length){
  	var matches = cardExpiryCrap[i].match(/card expire date/);

  	if(!matches){
  		cardExpiryCrap.splice(i,1);
  		continue;
  	}

  	++i;
  }

  return cardExpiryCrap;
}

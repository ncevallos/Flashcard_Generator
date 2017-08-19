function ClozeCard(text, cloze){
	  if(this instanceof ClozeCard) {
	    this.text = text;
	    this.cloze = cloze;
	  } else {
	    return new ClozeCard(text, cloze);
	  }
	  	//The below if condition, tests to see if the close is included in the full text, if so the result of the text.search will return 0 and the program will run as specified. If no then the search result will not be a 0 and the else condition will run instead.
		if((text.search(cloze))=== 0){
		this.text = text;
		this.cloze = cloze;
		this.splice = text.slice((cloze.length), text.length);
		this.partial = ("..." + this.splice);
		console.log(this.partial);
		this.fullText = text;
		}
		else{
			console.log("Error! The cloze text you entered doesn't appear in the text! Try again!")
		}

}

module.exports = ClozeCard;

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

var firstPresidentCloze = ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");
// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");

/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
var quotes = [
  
{ 
  quote: "Remember Who You Are",
  source: "Raffiki", 
  year: 1996,
},


{ 
 quote: "Luke, I am your father",
 source: "Darth Vader",
 citation: "Star Wars",
},
{
 quote: "I'm not superstitious, I'm just a little stitious",
 source: "Michael Scott",

},
{
 quote: "And that's the way it was. That's the way the cookie crumbles",
 source: "Jim Carrey",

},
{

 quote: "What's up Doc?",
 source: "Buggs Bunny",
 
}];
// Random quote function calls the quotes from the array above and is formulated in the quoteIndex function from the lowest value (0) to the length of the array value.
//by the quoteIndex is used to retrieve the value from the quoteArray which is then returned.  
function getRandomQuote(quoteArray) {
	var quoteIndex = Math.floor(Math.random() * quoteArray.length);
	var randomQuote = quoteArray[quoteIndex];
	return randomQuote;
}
// the printQuote function allows the random quote to be put in html format which then is returned to the document.
function printQuote(){ 
  var quoteObject = getRandomQuote(quotes) 
  
  var HTML = '<p class="quote"> '+quoteObject.quote+' </p> <p class="source"> '+quoteObject.source+ ""
   

  if (quoteObject.citation !== undefined ) {
  HTML += '<span class="citation"> '+quoteObject.citation+' </span>'
  }
  if (quoteObject.year !== undefined ) { 
    HTML += '<span class="year"> '+quoteObject.year+'</span>'
  }
HTML += '</p>';

  return document.getElementById('quote-box').innerHTML = HTML;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
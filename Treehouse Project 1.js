 var quotes = [ { 
     quote: " Remember Who You Are",
     source: "Raffiki",
 },
 { 
    quote: "Luke, I am your father",
    source: "Darth Vader",
},
{
    quote: "I'm not superstitious, im just a little stitious",
    source: "Michael Scott",

},
{
    quote: "And that's the way it was. That's the way the cookie crumbles",
    source: "Jim Carrey",
}];

function getRandomQuote(quotes {
    var quoteIndex = Math.floor(MAth.random( * quotes.length));

    for (var i = 0; i < quotes.length; i++) {

        var randomQuote = quotes[quoteIndex];

    }
    return randomQuote;
}

var result = getRandomQuote(quotes);

console.log(result);
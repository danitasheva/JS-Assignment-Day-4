var quotes = [
    { author: "Gandalf", quote: "A wizard is never late, Frodo Baggins. Nor is he early. He arrives precisely when he means to." }, 
    { author: "Bilbo Baggins", quote: "I don't know half of you half as well as I should like, and I like less than half of you half as well as you deserve." }, 
    { author: "Lady Galadriel", quote: "Even the smallest person can change the course of history." }, 
    { author: "Gandalf", quote: "YOU SHALL NOT PASS!" }, 
    { author: "Elrond", quote: "Nine companions. So be it. You shall be the fellowship of the ring." }, 
    { author: "Pippin", quote: "Great! Where are we going?" }, 
]; 


var quoteIndex = 0;
document.getElementById('author').innerHTML = quotes[quoteIndex].author;
document.getElementById('quote').innerHTML = quotes[quoteIndex].quote;

var btnForward = document.getElementById('btn-forward');
var btnBack = document.getElementById('btn-back');

btnForward.addEventListener('click', next);
btnBack.addEventListener('click', prev);

var timerID = setInterval(next, 30000);

function next() {
    quoteIndex++;

    if ( quoteIndex == quotes.length ) { // if on the last quote
        quoteIndex = 0; // go back to first quote
    }

    document.getElementById('author').innerHTML = quotes[quoteIndex].author;
    document.getElementById('quote').innerHTML = quotes[quoteIndex].quote;

}

function prev() {
    quoteIndex--;

    if ( quoteIndex < 0 ) { // if on the first quote
        quoteIndex = quotes.length -1; // go back to last quote
    }

    document.getElementById('author').innerHTML = quotes[quoteIndex].author;
    document.getElementById('quote').innerHTML = quotes[quoteIndex].quote;
}


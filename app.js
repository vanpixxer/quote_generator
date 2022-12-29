// we need 3 variables: one for the "new quote" button, one for the famous person, and one for each quote
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

// next we need an Array of all our quotes
const quotes = [{
    quote: `"The best way to find yourself is to lose yourself in the service of others."`,
    person: `Mahatma Gandhi`
}, {
    quote: `"If you want to live a happy life tie it to a goal, not to people or things."`,
    person: `Albert Einstein`
}, {
    quote: `"It's not the years in your life that count. It's the life in your years"`,
    person: `Abraham Limcoln`
}, {
    quote: `"Everyone thinks of changing the world, but no one thinks of changing themself."`,
    person: `Lev Tolstoy`
}, {
    quote: `"Whenever you find yourself on the side of the majority it is time to pause and reflect."`,
    person: `Mark Twain`
}, {
    quote: `"Remember, no one can make you feel inferior without your consent."`,
    person: `Eleanor Roosevelt`
}, {
    quote: `"Build your own dreams or someone else will hire you to build theirs."`,
    person: `Farrah Gray`
}, {
    quote: `"Only those who will risk going too far can possibly find out how far one can go."`,
    person: `Thomas Stearns Eliot`
}, {
    quote: `"The best revenge is massive success."`,
    person: `Frank Sinatra`
}, {
    quote: `"The most difficult thing is the decision to act. The rest is merely tenacity."`,
    person: `Amelia Earhart`
}, {
    quote: `"Believe you can and you're halfway there."`,
    person: `Theodore Roosevelt`
}, {
    quote: `"Misers are no fun to live with but they make great ancestors."`,
    person: `Tom Snyder`
}, {
    quote: `"If you want to know what God thinks of money just look at the people he gave it to."`,
    person: `Dorothy Parker`
}, {
    quote: `"Always forgive your enemies; nothing annoys them so much."`,
    person: `Oscar Wilde`
},];

// now apply an Event Listener to our button
btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})
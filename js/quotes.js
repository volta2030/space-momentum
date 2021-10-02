const quotes = [
  {
    quote:
      "As engineers, we were going to be in a position to change the world – not just study it.",
    author: "-Henry Petroski",
  },
  {
    quote:
      "The scientist discovers a new type of material or energy and the engineer discovers a new use for it.",
    author: "-Gordon Lindsay Glegg",
  },
  {
    quote:
      "This job is a great scientific adventure. But it’s also a great human adventure.",
    author: "-Fabiola Gianotti",
  },
  {
    quote:
      "Science can amuse and fascinate us all, but it is engineering that changes the world.",
    author: "-Isaac Asimov",
  },
  {
    quote: "The engineer has been, and is, a maker of history.",
    author: "-James Kip Finch",
  },
  {
    quote:
      "Scientists study the world as it is; engineers create the world that has never been.",
    author: "-Theodore von Karman",
  },
  {
    quote: "The way to succeed is to double your failure rate.",
    author: "-Thomas J. Watson",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

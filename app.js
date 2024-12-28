const quotes = [
  { quote: "The mind is everything. What you think you become.", author: " –Blake Lively"  },
   { quote: "Your self respect has to be stronger than ur feelings.", author: " –the wizard liz"  },
  { quote: "Focus on improving yourself, not proving yourself.", author: " –James Clear "},
  { quote: "The best revenge is to creating a better life for yourself.", author: " –the wizard liz"  },
  { quote: "Starting over is hard, but it's never too late.", author: " –Irini Zoica"},
  { quote: "Correct your mistake before they become your habits.", author: " –James Clear " }
];

const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuote = document.getElementById("new-quote");

newQuote.onclick = function () {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteText.textContent = `"${randomQuote.quote}"`;
  authorText.textContent = `"${randomQuote.author}"`;
};

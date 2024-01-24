const API_URL = "http://localhost:5000";

document.addEventListener("DOMContentLoaded", function () {
  getQuotes();

  document.getElementById("quoteForm").addEventListener("submit", function (e) {
    sendQuote(e);
  });

  document.getElementById("randomQuoteForm").addEventListener("submit", function (e) {
    getRandomQuote(e);
  });
});

function getRandomQuote(e) {
  e.preventDefault();

  fetch(API_URL + "/quote")
    .then((response) => response.json())
    .then((data) => {
      const quote = data.quote;
      const quoteDisplay = document.getElementById("randomQuote");
      quoteDisplay.innerText = quote;
    });
}

function getQuotes() {
  fetch(API_URL + "/quotes")
    .then((response) => response.json())
    .then((data) => {
      const quotes = data.quotes;
      const quoteList = document.getElementById("quoteList");
      quotes.forEach((quote) => {
        const quoteItem = document.createElement("li");
        quoteItem.innerText = quote;
        quoteList.appendChild(quoteItem);
      });
    });
}

function sendQuote(e) {
  e.preventDefault();

  const quotesList = document.getElementById("quoteList");
  const quoteInput = document.getElementById("quote");
  const quote = quoteInput.value;

  if (!quote) {
    alert("Please enter a quote");
    return;
  }

  fetch(API_URL + "/quotes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ quote: quote }),
  })
    .then((response) => {
      if (response.ok) {
        alert("Quote is toegevoegd");
      } else {
        alert("Er is iets misgegaan");
      }
    })
    .then(() => {
      quoteInput.value = "";
      const quoteItem = document.createElement("li");
      quoteItem.innerText = quote;
      quotesList.appendChild(quoteItem);
    })
    .catch((error) => {
      alert(error);
    });
}

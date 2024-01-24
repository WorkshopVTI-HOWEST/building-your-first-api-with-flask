const API_URL = "http://localhost:5000";

document.addEventListener("DOMContentLoaded", function () {
  getQuotes();

  document.getElementById("quoteForm").addEventListener("submit", function (e) {
    sendQuote(e);
  });
});

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

  fetch(API_URL + "/quotes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ quote: quote }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error: " + response.statusText);
      }
    })
    .then((data) => {
      alert(data.message);
      quoteInput.value = "";
      const quoteItem = document.createElement("li");
      quoteItem.innerText = quote;
      quotesList.appendChild(quoteItem);
    })
    .catch((error) => {
      alert(error);
    });
}

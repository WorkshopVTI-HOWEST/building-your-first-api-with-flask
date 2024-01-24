const API_URL = "http://localhost:5000";

document.addEventListener("DOMContentLoaded", function () {
  getQuotes();

  document.getElementById("quoteForm").addEventListener("submit", function (e) {
    sendQuote(e);
  });

  document.getElementById("randomQuoteForm").addEventListener("submit", function (e) {
    getRandomQuote(e);
  });

  document.getElementById("clearQuotes").addEventListener("submit", function (e) {
    removeQuotes(e);
  });

  document.getElementById("quoteById").addEventListener("submit", function (e) {
    getQuoteById(e);
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

function removeQuotes(e) {
  e.preventDefault();
  console.log("test");
  fetch(API_URL + "/quotes/clear", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const quoteList = document.getElementById("quoteList");
      quoteList.innerHTML = "";
      getQuotes();
    })
    .catch((error) => {
      console.error("Error clearing quotes:", error);
    });
}

function getQuoteById(e) {
  e.preventDefault();
  const quoteId = document.getElementById("id").value;

  fetch(API_URL + "/quotes/" + quoteId)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Quote not found");
      }
      return response.json();
    })
    .then((data) => {
      const quoteResult = document.getElementById("quoteByIdResult");
      quoteResult.innerText = "Quote: " + data.quote;
    })
    .catch((error) => {
      console.error("Error getting quote by ID:", error);
      const quoteResult = document.getElementById("quoteByIdResult");
      quoteResult.innerText = "Error: Quote not found";
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

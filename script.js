function getQuote() {
  fetch("https://dummy-apis.netlify.app/api/quote")
    // .then ist eine fetch/response API >> Was passiert mit den empfangenen Daten?
    .then((response) => {
      //.json() ist eine fetch/response API >> gefetchte Daten werden als JS Objects (oder manchmal auch String) umgewandelt
      return response.json();
    })
    .then((data) => {
      document.getElementById("quote").innerText = data.quote;
      document.getElementById("author").innerText = "-" + data.author;
    });
}

document.querySelector("button").addEventListener("click", getQuote);

getQuote();

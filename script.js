function getQuote() {
  let quote = fetch("https://dummy-apis.netlify.app/api/quote");
  let quote2 = quote.then((response) => {
    console.log(response);
    return response.json();
  });

  quote2.then((data) => {
    document.getElementById("quote").innerText = data.quote;
    document.getElementById("author").innerText = "-" + data.author;
  });
}

document.querySelector("button").addEventListener("click", getQuote);

getQuote();

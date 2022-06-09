const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button"),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter");

function randomQuote() {
  quoteBtn.classList.add("loading");
  quoteBtn.innerText = "Loading...";
  fetch("https://api.quotable.io/random").then(response => response.json()).then(result => {
    console.log(result)
    quoteText.innerText = result.content;
    authorName.innerText = result.author;
    quoteBtn.innerText = "New Quote";
    quoteBtn.classList.remove("loading");
  })
}

soundBtn.addEventListener("click", () => {
  let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
  speechSynthesis.speak(utterance);
})

copyBtn.addEventListener("click", ()=>{
  /*Only supported on pages served over HTTPS*/ 
  navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener("click", () => {
  let twitterUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
  window.open(twitterUrl, "_blank");
})

quoteBtn.addEventListener("click", randomQuote);
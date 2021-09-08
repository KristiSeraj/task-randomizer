// let quotes = [
//     'JetaPlus Website',
//     'Bot website',
//     'taverna liro website',
//     'google homepage website',
//     'brother website',
//     'javascript challenges'
// ]


// function newQuote() {
//     let randomNumber = Math.floor(Math.random() * (quotes.length));
//     document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
// }


var button = document.getElementById("addTask");
var input = document.getElementById("task");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0 ) {
    createListElement();
  }
}

function addListAfterKeyPress(event) {
    if(inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeyPress);
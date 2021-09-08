let quotes = [
    'JetaPlus Website',
    'Bot website',
    'taverna liro website',
    'google homepage website',
    'brother website',
    'javascript challenges'
]


function newQuote() {
    let randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
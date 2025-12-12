// Jake Zamarripa Final 12/11/25

let oldQuote = "";

function generateQuote() {
    let intro = ["Sometimes in life a", "That's how the", "A mysterious"];
    let subject = ["Turkey", "Polar Bear", "Gorilla"];
    let outro = ["gobbles", "chills", "examines the economy"];

    // I know this is sloppy but it works
    let picker = Math.floor(Math.random() * 3);
    let picker2 = Math.floor(Math.random() * 3);
    let picker3 = Math.floor(Math.random() * 3);
    let quote = `${intro[picker]} ${subject[picker2]} ${outro[picker3]}!`;
    return quote
}

function checkQuote() {
    let newQuote = generateQuote();
    
    while (newQuote === oldQuote) {
        newQuote = generateQuote();
    }

    document.getElementById("quoteText").textContent = newQuote;

    oldQuote = newQuote
}

document.getElementById("quoteButton").addEventListener("click", checkQuote)

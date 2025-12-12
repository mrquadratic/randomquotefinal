// Jake Zamarripa Final 12/11/25

let oldQuote = "";

function generateQuote() {
    // I could have written out a lot of quotes and used 1 array and just randomly picked one but I thought this would be more fun
    let intro = ["Sometimes in life a", "That's how the", "A mysterious"];
    let subject = ["Turkey", "Polar Bear", "Gorilla"];
    let outro = ["gobbles", "chills", "examines the economy"];

    // I know this is sloppy but it works, also the arithmetic operator
    let picker = Math.floor(Math.random() * 3);
    let picker2 = Math.floor(Math.random() * 3);
    let picker3 = Math.floor(Math.random() * 3);
    // I think template literals are cool
    let quote = `${intro[picker]} ${subject[picker2]} ${outro[picker3]}!`;
    return quote
}

function checkQuote() {
    let newQuote = generateQuote();
    
    //this took a while to figure out the logic, comparison and logical operator
    if (newQuote === oldQuote && newQuote.length > 0) {
        newQuote = generateQuote();
    }

    document.getElementById("quoteText").textContent = newQuote;

    oldQuote = newQuote
}

document.getElementById("quoteButton").addEventListener("click", checkQuote)

// Jake Zamarripa Final 12/11/25


function generateQuote() {
    let intro = ["Sometimes the", "That's how the", "Don't let the"];
    let subject = ["Turkey", "Polar Bear", "Iguana"];
    let outro = ["Gobbles", "Chills", "Touch you"];

    // I know this is sloppy but it works
    let picker = Math.floor(Math.random() * 2) + 1;
    let picker2 = Math.floor(Math.random() * 2) + 1;
    let picker3 = Math.floor(Math.random() * 2) + 1;

    let quote = `${intro[picker]} ${subject[picker2]} ${outro[picker3]}!`;

}

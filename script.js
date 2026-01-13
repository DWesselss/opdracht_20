// Array met minimaal 6 emoji's
let emojis = ["🔥", "😂", "🚀", "😎", "🍕", "🎮", "💀"];

// HTML elementen
let knop = document.getElementById("emojiBtn");
let emojiVeld = document.getElementById("emoji");
let indexVeld = document.getElementById("index");

knop.addEventListener("click", function () {

    // Willekeurig indexnummer
    let randomIndex = Math.floor(Math.random() * emojis.length);

    // Emoji tonen
    emojiVeld.textContent = emojis[randomIndex];
    indexVeld.textContent = "Index: " + randomIndex;

    // Animatie opnieuw triggeren
    emojiVeld.classList.remove("animate");
    void emojiVeld.offsetWidth; // force reflow
    emojiVeld.classList.add("animate");
});
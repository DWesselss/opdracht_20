let emojis = ["🔥", "😂", "🚀", "😎", "🍕", "🎮", "💀"];

let knop = document.getElementById("emojiBtn");
let emojiVeld = document.getElementById("emoji");
let indexVeld = document.getElementById("index");

knop.addEventListener("click", function () {

    let randomIndex = Math.floor(Math.random() * emojis.length);

    emojiVeld.textContent = emojis[randomIndex];
    indexVeld.textContent = "Index: " + randomIndex;
    emojiVeld.classList.remove("animate");
    void emojiVeld.offsetWidth; 
    emojiVeld.classList.add("animate");
});
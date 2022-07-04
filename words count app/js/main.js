import Count from "./Count.js";

const text = document.getElementById("text");
const letterStat = document.querySelector(".letters");
const wordStat = document.querySelector(".words");

new Count(text);

text.addEventListener("count", function (e) {
    letterStat.textContent = e.detail.data.letters;
    wordStat.textContent = e.detail.data.words;    
})
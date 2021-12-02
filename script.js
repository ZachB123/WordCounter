"use strict"

let words = document.querySelector(".words span");
let characters = document.querySelector(".characters span");
let textarea = document.querySelector("textarea");

words.innerHTML = "0";
characters.innerHTML = "0";

textarea.addEventListener("keydown", updateText);
textarea.addEventListener("paste", updateText);

function updateText (event) {
    if(event instanceof ClipboardEvent) {
        event.preventDefault();
        textarea.value += (event.clipboardData || window.clipData).getData('text');
    }
    let text = textarea.value;
    if (text === "") {
        words.innerHTML = "0";
        characters.innerHTML = "0";
        return;
    }
    let searchPosition = 0;
    let wordCount = 1;
    while(true) {
        searchPosition = text.indexOf(" ", searchPosition);
        if(searchPosition === -1) {break;}
        wordCount++;
        searchPosition++;
    }
    words.innerHTML = wordCount;
    characters.innerHTML = text.length;
}


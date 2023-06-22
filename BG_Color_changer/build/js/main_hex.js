"use strict";
const hex = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f'];
const butten = document.getElementById('btn');
const colour = document.querySelector(".color");
btn.addEventListener('click', (e) => {
    e.preventDefault();
    //#ffffff
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    document.body.style.backgroundColor = hexColor;
    colour.textContent = hexColor;
});

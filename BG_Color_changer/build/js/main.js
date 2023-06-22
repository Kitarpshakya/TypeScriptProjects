"use strict";
const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "cornflowerblue", "olivedrab", "indigo", "deeppink", "aquamarine"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");
btn.addEventListener('click', (e) => {
    e.preventDefault();
    const randomNumber = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

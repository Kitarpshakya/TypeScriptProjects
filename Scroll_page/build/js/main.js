"use strict";
// Date setup
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear().toString();
// nav bar setup
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');
// nav bar toogle
navToggle.addEventListener('click', (e) => {
    e.preventDefault();
    // linksContainer.classList.toggle("show-links") 
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    }
    else {
        linksContainer.style.height = `0`;
    }
});
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
//fixed navbar
window.addEventListener('scroll', () => {
    const scrollHeight = window.scrollY;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight >= navHeight) {
        navbar.classList.add('fixed-nav');
    }
    else {
        navbar.classList.remove('fixed-nav');
    }
    if (scrollHeight >= 300) {
        topLink.classList.add('show-link');
    }
    else {
        topLink.classList.remove('show-link');
    }
});
//select links
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        //nav to specific spot
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const navHeight = navbar.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains('fixed-nav');
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        console.log(navHeight);
        let position = element.offsetTop - navHeight;
        if (!fixedNav) {
            position = position - navHeight;
        }
        if (navHeight > 82) {
            position = position + containerHeight;
        }
        window.scrollTo({
            left: 0,
            top: position
        });
        linksContainer.style.height = `0`;
    });
});
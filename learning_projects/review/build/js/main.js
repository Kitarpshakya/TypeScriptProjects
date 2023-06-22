"use strict";
class ReviewBoxes {
    constructor(counter = 0) {
        this.counter = counter;
        this.users = [];
    }
    getUsers() {
        return new Promise((resolve) => {
            fetch('../build/json/users.json')
                .then((res) => res.json())
                .then((data) => {
                this.users = data;
                resolve(data);
            })
                .catch((error) => {
                console.error('Error fetching users:', error);
            });
        });
    }
    next() {
        this.counter++;
        if (this.counter > this.users.length - 1) {
            this.counter = 0;
        }
        return this.counter;
    }
    random() {
        this.counter = Math.floor(Math.random() * this.users.length);
        return this.counter;
    }
    prev() {
        this.counter--;
        if (this.counter < 0) {
            this.counter = this.users.length - 1;
        }
        return this.counter;
    }
    showPerson() {
        this.getUsers().then((data) => {
            const item = this.users[this.counter];
            img.src = item.img;
            author.textContent = item.name;
            job.textContent = item.job;
            info.textContent = item.text;
            img.alt = item.alt_text;
        });
    }
}
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');
const review = new ReviewBoxes();
window.addEventListener('DOMContentLoaded', () => {
    review.showPerson();
});
prevBtn.addEventListener('click', (e) => {
    e.preventDefault();
    review.prev();
    review.showPerson();
});
nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    review.next();
    review.showPerson();
});
randomBtn.addEventListener('click', (e) => {
    e.preventDefault();
    review.random();
    review.showPerson();
});

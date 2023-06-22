"use strict";
class Counter {
    constructor(count = 0) {
        this.count = count;
        this.reset();
    }
    reset() {
        this.count = 0;
        return this.count;
    }
    increase() {
        this.count++;
        return this.count;
    }
    decrease() {
        this.count--;
        return this.count;
    }
    display() {
        const v = document.getElementById('value');
        if (this.count > 0) {
            v.style.color = 'green';
        }
        else if (this.count < 0) {
            v.style.color = 'red';
        }
        else {
            v.style.color = 'black';
        }
        v.textContent = this.count;
    }
}
const decreaseButton = document.getElementById('decrease');
const resetButton = document.getElementById('reset');
const increaseButton = document.getElementById('increase');
const count = new Counter();
resetButton.addEventListener('click', btn => {
    btn.preventDefault();
    count.reset();
    count.display();
});
increaseButton.addEventListener('click', btn => {
    btn.preventDefault();
    count.increase();
    count.display();
});
decreaseButton.addEventListener('click', btn => {
    btn.preventDefault();
    count.decrease();
    count.display();
});

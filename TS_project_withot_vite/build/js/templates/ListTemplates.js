"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListTemplate {
    constructor() {
        this.ul = document.getElementById("listItems");
    }
    clear() {
        this.ul.innerHTML = '';
    }
    render(fullList) {
        this.clear();
        fullList.list.forEach(item => {
            const li = document.createElement('li');
            li.className = "item";
            const check = document.createElement('input');
            check.type = "checkbox";
            check.id = item.id;
            check.tabIndex = 0;
            check.checked = item.checked;
            li.append(check);
            check.addEventListener('change', () => {
                item.checked = !item.checked;
                fullList.save();
            });
            const label = document.createElement('label');
            label.htmlFor = item.id;
            label.textContent = item.item;
            li.append(label);
            const button = document.createElement('button');
            button.className = 'button';
            button.textContent = 'X';
            li.append(button);
            button.addEventListener('click', () => {
                fullList.removeItem(item.id);
                this.render(fullList);
            });
            this.ul.append(li);
        });
    }
}
ListTemplate.instance = new ListTemplate();
exports.default = ListTemplate;

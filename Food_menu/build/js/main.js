"use strict";
class Menu {
    constructor() {
        this.menu = [];
        this.newMenu = [];
    }
    getMenu(cata) {
        const here = this;
        return new Promise((resolve) => {
            fetch('../build/json/menu.json')
                .then((res) => res.json())
                .then((data) => {
                resolve(data);
                this.menu = data;
                this.newMenu = this.menu.filter(function (menuItem) {
                    if (menuItem.category === cata)
                        return menuItem;
                });
                if (cata === 'all') {
                    this.newMenu = this.menu;
                }
            })
                .catch((error) => {
                section.classList.remove('section-center');
                section.innerHTML = `<center><h1>404</h1></center>`;
                console.error('Error fetching users:', error);
            });
        });
    }
    showMenu(cata = 'all') {
        this.getMenu(cata).then(() => {
            ///Dynamic buttons
            // const categories = this.menu.reduce(function(values, item){
            //   if(!values.includes(item.category)){
            //     values.push(item.category)
            //   }
            //   return values
            // },
            // ['all',]
            // );
            // let categoryBtns = categories.map((e:any)=>{
            //   return `<button class="filter-btn" type="button" data-id="${e}">${e}</button>`
            // }).join('\n')
            // btns.innerHTML = categoryBtns
            let getMenus = this.newMenu.map((e) => {
                return `<article class="menu-item">
          <img src="${e.img}" alt="menu-item" class="photo"/>
          <div class="item-info">
          <header>
          <h4>${e.title}</h4>
          <h4 class="price">$${e.price}</h4>
          </header>
          <p class="item-text">${e.desc}</p>
          </div>
          </article>`;
            });
            const menuHtml = getMenus.join('\n');
            section.innerHTML = menuHtml;
        });
    }
}
// select items
const section = document.querySelector('.section-center');
// const btns = document.querySelector('.btn-container') as HTMLDivElement /*Dynamic buttons */
const filterBtns = document.querySelectorAll('.filter-btn');
const menu = new Menu();
//load
window.addEventListener('DOMContentLoaded', () => {
    menu.showMenu();
});
//filter items
filterBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const category = (e.currentTarget.dataset.id);
        menu.showMenu(category);
    });
});

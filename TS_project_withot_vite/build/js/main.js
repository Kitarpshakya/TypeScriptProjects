"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../build/css/style.css");
const FullList_1 = __importDefault(require("./model/FullList"));
const ListItem_1 = __importDefault(require("./model/ListItem"));
const ListTemplates_1 = __importDefault(require("./templates/ListTemplates"));
console.log('yes main is linked');
const initApp = () => {
    const fullList = FullList_1.default.instance;
    const template = ListTemplates_1.default.instance;
    const itemEntryForm = document.getElementById('itemEntryForm');
    itemEntryForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const input = document.getElementById('newItem');
        const newEntryText = input.value.trim();
        if (!newEntryText.length) {
            return;
        }
        const itemId = fullList.list.length ? parseInt(fullList.list[fullList.list.length - 1].id + 1) : 1;
        const newItem = new ListItem_1.default(itemId.toString(), newEntryText);
        fullList.addItem(newItem);
        template.render(fullList);
    });
    const clearItems = document.getElementById('clearItemsButton');
    clearItems.addEventListener('click', () => {
        fullList.clearList();
        template.clear();
    });
    fullList.load();
    template.render(fullList);
};
document.addEventListener("DOMContentLoaded", initApp);

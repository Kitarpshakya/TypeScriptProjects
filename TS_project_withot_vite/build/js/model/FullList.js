"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListItem_1 = __importDefault(require("./ListItem"));
class FullList {
    constructor(_list = []) {
        this._list = _list;
    }
    get list() {
        return this._list;
    }
    load() {
        const storedList = localStorage.getItem("myList");
        if (typeof storedList !== 'string')
            return;
        const parsedList = JSON.parse(storedList);
        parsedList.forEach(itemObj => {
            const newListItem = new ListItem_1.default(itemObj._id, itemObj._item, itemObj._checked);
            FullList.instance.addItem(newListItem);
        });
    }
    save() {
        localStorage.setItem("myList", JSON.stringify(this._list));
    }
    clearList() {
        this._list = [];
        this.save();
    }
    addItem(ItemObj) {
        this._list.push(ItemObj);
        this.save();
    }
    removeItem(id) {
        this._list = this._list.filter(item => item.id !== id);
        this.save();
    }
}
FullList.instance = new FullList();
exports.default = FullList;

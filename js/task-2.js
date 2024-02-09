"use strict"

class Storage {
    #items
    constructor(items) {
        this.#items = items;
    }
    getItems() {
        return this.#items;
    }
    addItem(newItem) {
        this.#items.push(newItem);
    }
    removeItem(itemToRemove) {
        let index = this.#items.indexOf(itemToRemove);
        if (index !== -1) {
            this.#items = [
                ...this.#items.slice(0, index),
                ...this.#items.slice(index + 1)
            ];
        }
    }
}




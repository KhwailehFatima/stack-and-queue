'use strict'

const LinkedList = require('./linkedlist')

class Queue {
    constructor() {
        this.storage = new LinkedList();
        this.top = null;
    }

    enqueue(value) {
        this.storage.append(value);
        this.top = this.storage.head;
    }
    dequeue() {
        this.top = this.storage.removeTheFirstNode();
    }

    peek() {
        if (this.storage.head) {
            return this.top.value;
        } else {
            return ('Queue is empty!')
        }
    }

    isEmpty() {
        if (this.storage.head) {
            return 0;
        } else {
            return 1;
        }
    }
}
module.exports = Queue;
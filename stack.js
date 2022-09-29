'use strict'

const LinkedList = require('./linkedlist')


class Stack {

    constructor() {
        this.storage = new LinkedList();
        this.top = null;
    }

    //push data in the stack
    pushItem = (value) => {
        this.top = this.storage.append(value);
    };

    pop() {
        if (this.storage.deleteTheLastNode()) {
            return this.top = this.storage.deleteTheLastNode()
          } else {
            return (`stack is empty!`);
          }
    };

    peek() {
        if (this.storage.head) {
          return this.top.value;
        } else {
          return (`stack is empty!`);
        }
      };

    isEmpty() {
        if (this.storage.head) {
            return 0;
        } else {
            return 1
        }
    }
}

module.exports = Stack;
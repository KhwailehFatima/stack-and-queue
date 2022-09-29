'use strict'
const Node = require('./Node');

class LinkedList {

    constructor() {
        this.head = null;

    }

    // the size of the stack
    size() {
        const count = 0;
        const pointer = this.head;
        while (pointer) {
            pointer = pointer.next;
            count++
        }
        return count
    }

    //Append at last
    append(value) {
        const node = new Node(value);
        if (this.head) {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            return currentNode.next = node;
        } else {
            return this.head = node;
        }
    }


    // Insert
    insert(value) {
        const node = new Node(value);
        if (this.head) {
            node.next = this.head;
            this.head = node;
        } else {
            this.head = node;
        }
    }

    deleteTheLastNode() {
        if (this.head) {
            let currentNode = this.head;
            let i = 0
            while (currentNode.next) {
              currentNode = currentNode.next;
              i++;
            }
            let header = this.head;
            for (let y = 1; y < i; y++) {
              header = header.next;
            }
            header.next = null;
            return header;
          } else {
            return this.head;
          }
    }


    getTheLastNode() {
        const currentNode = this.head;
        if (currentNode.next == null) {
            return this.head.value;
        }
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        return currentNode.value;
    }

    removeTheFirstNode() {
        if (this.head) {
            this.head = this.head.next;
            return this.head;
        } else {
            return ('Empty LinkedList')
        }
    }
}

module.exports = LinkedList;
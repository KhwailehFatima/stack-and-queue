'use strict'

const LinkedList = require('../linkedlist');
const Node = require('../Node');
const Queue = require('../queue');

describe('Test queue', () => {
    it('create an instance', () => {
        const checkQueue = new Queue();
        expect(checkQueue).toBeInstanceOf(Queue);
        expect(checkQueue.top).toBeNull();
    });

    
    it('test enqueue function', () => {
        const checkQueue=new Queue();
        checkQueue.enqueue(1);
        checkQueue.enqueue(2);
        checkQueue.enqueue(3);
        expect(checkQueue.top.value).toEqual(1);
    });
    
    it('test dequeue function', () => {
        const checkQueue=new Queue();
        checkQueue.enqueue(1);
        checkQueue.enqueue(2);
        checkQueue.enqueue(3);
        checkQueue.dequeue();
        expect(checkQueue.top.value).toEqual(2);
   
    });
    
    it('test peek function', () => {
        const checkQueue=new Queue();
        checkQueue.enqueue(1);
        checkQueue.enqueue(2);
        checkQueue.enqueue(3);
        checkQueue.dequeue();
        const x=checkQueue.peek();
        expect(x).toEqual(2)
        
    });
    it('test isEmpty function', () => {
    const checkQueue=new Queue();
    const x= checkQueue.isEmpty();
    expect(x).toEqual(1);
    });
})
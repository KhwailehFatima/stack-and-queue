'use strict'

const LinkedList = require('../linkedlist');
const Node = require('../Node');
const Stack = require('../stack');

describe('testing stack', () => {
    it('create an instance', () => {
        const checkStack = new Stack();
        expect(checkStack).toBeInstanceOf(Stack);
        expect(checkStack.top).toBeNull();
    });
    it('test push function', () => {
        const checkStack = new Stack();
        checkStack.pushItem('fatima');
        checkStack.pushItem('waleed');
        expect(checkStack.top.value).toEqual('waleed')
  });
  it('Testing pop function', () => {
    const checkStack = new Stack();
    checkStack.pushItem('fatima');
    checkStack.pushItem('waleed');
    checkStack.pop();
    expect(checkStack.top.value).toEqual('fatima');
  })
    it('test peek function', () => {
        const checkStack = new Stack();
        checkStack.pushItem('fatima');
        // checkStack.pop();
        let x = checkStack.peek();
        expect(x).toEqual('fatima');
    });
    it('test isEmpty function', () => {
const checkStack = new Stack();
    let x = checkStack.isEmpty();
    expect(x).toEqual(1);
    });
})
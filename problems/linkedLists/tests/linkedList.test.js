'use strict';

const LinkedList = require('../prompts/linkedList.js').LinkedList,
      assert = require('chai').assert;

describe('LinkedLists', () => {
  describe('LinkedList', () => {
    it('should add items to head and tail', () => {
      const myList = new LinkedList();

      assert.equal(myList.head, null, 'Empty initial list');
      myList.addToTail('is how ');
      myList.addToTail('we do it');
      assert.equal(myList.tail.value, 'we do it', 'Tail insertion not working');
      assert.equal(myList.head.value, 'is how ', 'Tail insertion not working');
      myList.addToHead('This ');
      assert.equal(myList.head.value, 'This ', 'Head insertion not working');
      assert.equal(myList.tail.value, 'we do it', 'Tail insertion not working');

      const montellJordan = 'This is how we do it';
      let output = '';

      for(let i = myList.head; i; i = i.next){
        output += i.value;
      }
      assert.equal(output, montellJordan, 'Head and Tail insertion methods not working');
    });

    it('should insert items after the passed in node', () => {
      const myList = new LinkedList();
      let fourthNode = null;
      for (let i = 0; i < 10; i++) {
        myList.addToTail(i);
        if (i === 3) {
          fourthNode = myList.tail;
        }
      }
      for (let i = 0; i < 10; i++) {
        myList.addToTail(i);
      }
      myList.insertAfter(fourthNode, 3.14159);
      assert.isTrue(myList.contains(3.14159));
      const soln = [0,1,2,3,3.14159,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9];
      let current = myList.head;
      for (let i = 0; i < soln.length; i++) {
        assert.equal(current.value, soln[i], 'Should only insert once');
        current = current.next;
      }
    });
  });
});

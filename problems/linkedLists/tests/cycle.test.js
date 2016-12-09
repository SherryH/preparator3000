'use strict';
const solution = require('../prompts/cycle.js'),
assert = require ('chai').assert;

describe('Linked List Cycle', () => {

  it('should identify linked list with a cycle', () => {
    const node6 = {
      value: 6,
      next: null
    };
    const node5 = {
      value: 5,
      next: node6
    };
    const node4 = {
      value: 4,
      next: null
    };
    const node3 = {
      value: 3,
      next: node4
    };
    const node2 = {
      value: 2,
      next: node3
    };
    const node1 = {
      value: 1,
      next: node2
    };
    const node0 = {
      value: 0,
      next: node1
    };
    // sets the cycle
    node4.next = node3;

    const linkedList = {
      head: node0,
      tail: node6
    };

    assert.equal(solution.hasCycle(linkedList), true);
  });

  it('it should identify linked list without a cycle', () => {
    const node6 = {
      value: 6,
      next: null
    };
    const node5 = {
      value: 5,
      next: node6
    };
    const node4 = {
      value: 4,
      next: node5
    };
    const node3 = {
      value: 3,
      next: node4
    };
    const node2 = {
      value: 2,
      next: node3
    };
    const node1 = {
      value: 1,
      next: node2
    };
    const node0 = {
      value: 0,
      next: node1
    };

    const linkedList = {
      head: node0,
      tail: node6
    };
    assert.equal(solution.hasCycle(linkedList), false);
  });
});

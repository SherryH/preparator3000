'use strict';

const solution = require('../prompts/queue.js'),
      assert = require('chai').assert;

describe('Queues', () => {
  describe('Queue', () => {

    it('should be have the methods enqueue, dequeue and size', () => {
      const queue = new solution.Queue();
      assert.isOk(queue.enqueue, 'The enqueue method on the queue');
      assert.isOk(queue.dequeue, 'The dequeue method on the queue');
      assert.isOk(queue.size, 'The size method on the queue');
    });

    it('should return the size of the queue', () => {
      const queue = new solution.Queue();
      assert.equal(queue.size(), 0, 'Queue size before enqueue');
      queue.enqueue(1);
      queue.enqueue(2);
      assert.equal(queue.size(), 2, 'Queue size after 2 enqueue calls');
    });

    it('should add values with enqueue', () => {
      const queue = new solution.Queue();
      for (let i = 0; i < 10; i++) {
        const value = Math.random() * 100;
        queue.enqueue(value);
      }
      assert.equal(queue.size() , 10, 'Queue Size after enqueue');
    });

    it('should remove the first value enqueued with dequeue', () => {
      const queue = new solution.Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      const dequeued = queue.dequeue();
      assert.equal(dequeued, 1, 'Queue value after dequeue');
    });

  });
});

'use strict';

const solution = require('../prompts/pathSum_basic.js'),
      assert = require('chai').assert;

describe('trees', function() {
  describe('pathSum', function (){

    const binaryTree = function(value) {
      this.value = value;
      this.right = null;
      this.left = null;
    }

    const tree = new binaryTree(6);
      tree.left = new binaryTree(3);
      tree.left.left = new binaryTree(5);
      tree.left.right = new binaryTree(7);
      tree.left.left.left = new binaryTree(1);
      tree.right = new binaryTree(11);
      tree.right.left = new binaryTree(9);
      tree.right.right = new binaryTree(2);
      tree.right.right.right = new binaryTree(13);


    it('should return a boolean', function() {
      const result = solution.pathSum(tree, 22);
      assert.isBoolean(result);
    })

    it('should return false if target sum does not exist', function() {
      assert.equal(solution.pathSum(tree, 22), false);
    });

    it('should return true if target sum does exist', function() {
      assert.equal(solution.pathSum(tree, 32), true);
    });

    it('should return true only if path ends at a leaf', function() {
      assert.equal(solution.pathSum(tree, 9), false);
    })

  });
});

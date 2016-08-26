'use strict';

const solution = require('../prompts/basic_tree.js'),
      assert = require('chai').assert;

describe('trees', function() {
	describe('basic tree', function (){

	  it('should add children to the tree', function() {
	    const tree = new solution.Tree();
	    tree.addChild(5);
	    assert.equal(tree.children[0].value, 5);
	  });

	  it('should find contained values', function(){
	    const tree = new solution.Tree();
	    tree.addChild(5);
	    assert.isTrue(tree.contains(5));
	  });

	  it('should add grandchildren', function() {
	    const tree = new solution.Tree();
	    tree.addChild(5);
	    tree.children[0].addChild(6);
	    assert.equal(tree.children[0].children[0].value, 6);
	  });

	});
});


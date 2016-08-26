'use strict';

const solution = require('../prompts/traverse_tree.js'),
      assert = require('chai').assert;

const Tree = require('../prompts/basic_tree.js').Tree;

 describe('Trees', () => {
	describe('Traversing Trees', () => {

		it('should load Tree from basic_tree', () => {
			const tree = new Tree();
			assert.isDefined(tree, 'Tree is defined');
			assert.isFunction(tree.addChild, 'Tree has a addChild method');
		})

		describe('flattenTreeBreadthFirst', () => {
			it('should flatten breadth-first', () => {
		    const tree = new Tree('root');
		    tree.addChild('a');
		    tree.addChild('b');
		    tree.children[0].addChild('p');
		    tree.children[0].addChild('q');
		    tree.children[0].children[0].addChild('foo');
		    tree.children[1].addChild('x');
		    tree.children[1].addChild('y');
		    const result = solution.flattenTreeBreadthFirst(tree);
		    const expected = ['root', 'a', 'b', 'p', 'q', 'x', 'y', 'foo'];
		    assert.deepEqual(expected, result);
			});
		});

		describe('flattenTreeDepthFirst', () => {
			it('should flatten depth-first', () => {
		    const tree = new Tree('root');
		    tree.addChild('a');
		    tree.addChild('b');
		    tree.children[0].addChild('p');
		    tree.children[0].addChild('q');
		    tree.children[0].children[0].addChild('foo');
		    tree.children[1].addChild('x');
		    tree.children[1].addChild('y');
		    const result = solution.flattenTreeDepthFirst(tree);
		    const expected = ['root', 'a', 'p', 'foo', 'q', 'b', 'x', 'y'];
		    assert.deepEqual(expected, result);
			});
		});

	});
});

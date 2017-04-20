'use strict';

const solution = require('../prompts/graph.js'),
      assert = require('chai').assert;

describe('graph', function() {
  describe('graph constructor & methods', function() {

    it('should add a Node to the graph and check with contains', function() {
      const graph = new solution.Graph();
      graph.addNode(1);
      assert.equal(graph.contains(1), true);
    });

    it('should remove nodes that were added', function() {
      const graph = new solution.Graph();
      graph.addNode(2);
      assert.equal(graph.contains(2), true);
      graph.removeNode(2);
      assert.equal(graph.contains(2), false);
    });

    it('should create edges between two nodes', function() {
      const graph = new solution.Graph();
      graph.addNode(0);
      graph.addNode(1);
      graph.addNode(2);
      graph.addEdge(0, 1);
      assert.equal(graph.hasEdge(0, 1), true);
      assert.equal(graph.hasEdge(1, 2), false);
    });

    it('should remove nodes that were added', function() {
      const graph = new solution.Graph();
      graph.addNode(0);
      graph.addNode(1);
      graph.addNode(2);
      graph.addEdge(0, 1);
      assert.equal(graph.hasEdge(0, 1), true);
      graph.removeEdge(0, 1);
      assert.equal(graph.hasEdge(0, 1), false);
    });

    it('should execute a call back on each node in the graph', function() {
      const connectTo0 = function(item) {
        graph.addEdge(0, item.value);
      };
      const graph = new solution.Graph();
      graph.addNode(0);
      graph.addNode(1);
      graph.addNode(2);
      graph.addNode(3);
      graph.addNode(4);
      graph.forEachNode(connectTo0);
      assert.equal(graph.hasEdge(0, 1), true);
      assert.equal(graph.hasEdge(0, 2), true);
      assert.equal(graph.hasEdge(0, 3), true);
      assert.equal(graph.hasEdge(0, 4), true);
    });

  });
});
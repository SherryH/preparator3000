"use strict";

const solution = require("../prompts/reduce.js");
const assert = require("chai").assert;

describe("Arrays", () => {
  describe("reduce", () => {
    it("should pass every value in the array into the iterator given no inital value", () => {
      assert.equal(
        solution.reduce([1, 2, 3], function(pre, cur) {
          return pre + cur;
        }),
        6
      );
    });

    it("should pass every value in the array into the iterator after taking in inital value", () => {
      assert.equal(
        solution.reduce(
          [1, 2, 3],
          function(pre, cur) {
            return pre + cur;
          },
          4
        ),
        10
      );
    });
  });
});

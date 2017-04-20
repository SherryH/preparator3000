
'use strict';

/**
 *
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the
 *  bottom right corner. The robot can move either up, down, left, or right,
 *  but cannot visit the same spot twice. How many possible unique paths are
 *  there to the bottom right corner?
 *
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful


const makeBoard = n => {
  const board = [];
  for (let i = 0; i < n; i++) {
    board.push([]);
    for (let j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  }
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  }
  return board;
};

class Board {
  constructor(n, board) {
    if (board) {
      console.log(board);
      this.board = board;
    } else {
      this.board = [];
      for (let i = 0; i < n; i++) {
        this.board.push([]);
        for (let j = 0; j < n; j++) {
          this.board[i].push(false);
        }
      }
    }
  }
  togglePiece(i, j) {
    this.board[i][j] = !this.board[i][j];
  }
  hasBeenVisited(i, j) {
    return !!this.board[i][j];
  }
  isInBounds(i, j) {
    if (this.board[i] && this.board[i][j] !== undefined) {
      return true;
    }
  }
};

const robotPaths = (n) => {
  let counter = 0;
  var newBoard = new Board(n);

  function subroutine (i ,j) {
    if (i === n-1 && j === n-1){
      counter++;
      return;
    }
    if(newBoard.isInBounds(i,j)){

      if(newBoard.hasBeenVisited(i,j)){
        return;

      } else {
        newBoard.togglePiece(i,j);

        subroutine(i+1,j);
        subroutine(i-1,j);
        subroutine(i,j+1);
        subroutine(i,j-1);

        newBoard.togglePiece(i,j);
      }
    }
  }

  subroutine(0, 0);

  return counter;
};


module.exports = { robotPaths };

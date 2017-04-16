/*
Given a string representation of a 2d map, return the number of islands in the map. Land spaces are denoted by a zero, while water is denoted by a dot. Two land spaces are considered connected if they are adjacent (but not diagonal).

(!!!) NOTICE: Newline characters in the inputs have been replaced with <br /> tags to make the value easier to read. In other words, when you see a break, it's actually a

*/

function countIslands (mapStr) {
  var count = 0;

  //change mapStr into a 2D array
  var mapArr = mapStr.split("\n").map((item)=>{
    return item.split('');
  });

  //loop thru num of rows
  for (var i = 0; i < mapArr.length; i++) {
    //loop thru num of cols
    for (var j = 0; j < mapArr[i].length; j++) {
      if (mapArr[i][j] === '0') {
        count++;
        //trackNeighbour
        trackNeighbour(i,j);
      }
    }
  }

  return count;

  function trackNeighbour(i,j) {
      if (i+1 < mapArr.length && mapArr[i+1][j] === '0') {
        mapArr[i+1][j] = '.';
        trackNeighbour(i+1, j);
      }

      if (j+1 < mapArr[i].length && mapArr[i][j+1]=== '0') {
        mapArr[i][j+1] = '.';
        trackNeighbour(i, j+1);
      }

      if(i-1 >= 0 && mapArr[i-1][j] === '0') {
        mapArr[i-1][j] = '.';
        trackNeighbour(i-1, j);
      }

      if(j-1 >= 0 && mapArr[i][j-1]=== '0') {
        mapArr[i][j-1] = '.';
        trackNeighbour(i, j-1);
      }
      return null;
  }
}

var mapstring = ".0...\n.00..\n....0";
var answer = countIslands(mapstring);
console.log(answer);

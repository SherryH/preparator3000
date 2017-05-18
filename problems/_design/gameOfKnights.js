/*


The Game of Knights

6 Knights are standing in a circle and fighting each other.
Each Knight has a name and 100 Hitpoints
Each Knight is only allowed to punch the Knight that is standing next to him (clockwise)
The Amount of Hitpoints subtracted by a Hit is decided by throwing a die (1..6)
If a Knight dies this knight is taken out of the circle.
The output should include:
Who is punching whom for how many hitpoints
Who dies
Who is the winner

e.g.

Knight 1 hits Knight 2 for 3 Points
Knight 2 hits Knight 3 for 5 Points
Knight 3 hits Knight 4 for 1 Points

Knight 4 hits Knight 5 for 1 Points
Knight 5 hits Knight 6 for 6 Points
Knight 6 hits Knight 1 for 4 Points
...
...
Knight 2 hits Knight 3 for 1 Points
Knight 3 dies
...
...
...
Knight 5 Dies
Knight 4 Wins

*/
function GameofKnights(){
  'use strict';
  var KNIGHT_NUM = 3;
  var knights = [];
  //initialise 6 knights with 100 hitpoints
  for (var j = 0; j < KNIGHT_NUM; j++) {
    knights[j] = {name: `Knight ${j+1}`, hitpoints: 10};
  }
  //for each knight, generate the punch for each knight
  while (knights.length > 1) {
    for (var i = 0; i < knights.length; i++) {
      var punch, opponent;
      //if the knight is still alive
      if(knights[i]) {
        //generate punch 1~6
        punch = Math.floor(Math.random()*6) + 1;
        if (i === knights.length -1) {
          opponent = 0;
        } else {
          opponent = i + 1;
        }
      }
      knights[opponent].hitpoints = knights[opponent].hitpoints - punch;
      // remove knight if his hitpoints is below 0
      console.log(`${knights[i].name} hits ${knights[opponent].name} for ${punch} Points`);
      if (knights[opponent].hitpoints <= 0) {
        console.log(`${knights[opponent].name} dies`);
        knights.splice(opponent,1);
      }
    }
  }
  // only one knight left
  console.log(`${knights[0].name} Wins`);
}

GameofKnights();


























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
  'user strict';
  var KNIGHT_NUM = 3;
  var knights = {};
  //initialise 6 knights with 100 hitpoints
  for (var j = 1; j <= KNIGHT_NUM; j++) {
    knights[j] = 100;
  }
  //while the knight is still alive
  //for each knight, generate the punch for each knight
  //
  //while (Object.keys(knights.length > 1)) {
    var punch, opponent;
    for (var i = 1; i <= KNIGHT_NUM; i++) {
      if (knights[i]) {
        //generate punch 1~6
        punch = Math.floor(Math.random()*6) + 1;
        if(i!==KNIGHT_NUM) {
          opponent = i+1;
        } else {
          opponent = 1;
        }
        //check if opponent still alive
        if (knights[opponent]) {
          knights[opponent] = knights[opponent] - punch;
        } else {
          //if opponent is dead, look for the next knight
        }

        console.log('knight ',opponent, 'knight hitpoints', knights[opponent]);
        if (knights[opponent] <= 0) {
          delete knights[opponent];
          console.log(`Knight ${opponent} dies`);
        } else {
          console.log(`Knight ${i} hits Knight ${opponent} for ${punch} Points`);

        }
      }
    }
  //}
  //there is only one knight left
  for(var prop in knights) {
    console.log(`Knight ${prop} Wins`);
  }
}

GameofKnights();


























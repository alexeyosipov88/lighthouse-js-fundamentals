const finalPosition = function (moves) {
  let directions = [];
  let x = 0;
  let y = 0;
  for (let i = 0; i < moves.length; i++) {
    switch (moves[i]) {
      case "north" :
        x++;
        break;
      case "south" :
        x--;
        break;
      case "west" :
        y--;
        break;
      case "east":
        y++;
        break;
    }
  }
  directions.push(y, x);
  return directions;
}
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  
console.log(finalPosition(moves));
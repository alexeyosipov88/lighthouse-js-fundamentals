let goodStations = [];
function chooseStations(arrayToCheck) {
  for (let x = 0; x < arrayToCheck.length; x++) {
    if ((arrayToCheck[x][1] >= 20) && (arrayToCheck[x][2] 
      === "school" || arrayToCheck[x][2] === "community centre")) {
        goodStations.push(arrayToCheck[x][0])
      }
  }
  return goodStations;
}    
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];
console.log(chooseStations(stations));

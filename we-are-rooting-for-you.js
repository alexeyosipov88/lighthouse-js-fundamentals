const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]
const metric = 'redness'
const judgeVegetable = function (vegetables, metric) {
  let biggestNumber = 0;
  let checkedParameter = metric;
  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i][checkedParameter] > biggestNumber) {
      biggestNumber = vegetables[i][checkedParameter];
    } 
  }
  for (let y = 0; y < vegetables.length; y++) {
    if (vegetables[y][checkedParameter] === biggestNumber) {
      return vegetables[y]["submitter"];
    }
  }
}

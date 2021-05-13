function howManyHundreds(num) {
  let result = 0;
  let wholeResult = 0;
  if (num >= 100) {
    result = num / 100;
    if (num % 100 !== 0) {
       wholeResult = (num - (num % 100)) / 100;
       return wholeResult;
    } return result;
  } return 0;
}
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);

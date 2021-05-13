function range(start, end, step) {
  let some_array = [];
  if ((start == undefined || end == undefined || step == undefined) ||
  (start > end) || step <= 0) {
    return some_array = [];
  } else {
    let updatedNumber = start;
    some_array.push(start);
    while (some_array[some_array.length - 1] + step <= end) {
      updatedNumber = updatedNumber + step;
      some_array.push(updatedNumber)
    }
  } 
  return some_array;
}
console.log(range(-100, 1, 10));

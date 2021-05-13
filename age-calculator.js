function ageCalculator(name, yearOfBirth, currentYear) {
  string = [];
  let result = currentYear - yearOfBirth;
  return name + " is " + result + " years old.";
}
console.log(ageCalculator("Alexey", 1988, 2021))
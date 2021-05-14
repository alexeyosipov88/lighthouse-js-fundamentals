const carPassing = function (cars, speed) {
  let newCar = {};
  newCar.time = Date.now();
  newCar.speed = speed;
  cars.push(newCar);
  return cars;
}
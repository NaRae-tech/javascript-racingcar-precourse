import { Car } from './car.js';
export function MakeToCar(carNamesList) {
  let carList = [];
  for (let i = 0; i < carNamesList.length; i++){
    carList.push(new Car(carNamesList[i]));
  }
  return carList;
}
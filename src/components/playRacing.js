import { MakeRandomNumberList } from './makeRandomNumberList.js';
import { PrintCarMoving } from './printCarMoving.js';
import { PrintWinner } from './printWinners.js';

export function PlayRacing(carList, racingCount) {
  for (let i = 0; i < racingCount; i++){
    let car_randomNumber = MakeRandomNumberList(carList);
    for (let j = 0; j < carList.length; j++){
      if (car_randomNumber[j] > 4) {
        carList[j].upCount();
      }
    }
    PrintCarMoving(carList);
  }
  PrintWinner(carList);
}
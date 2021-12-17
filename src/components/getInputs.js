import { $ } from './dom.js';
import { CarNamesValidity } from './carNamesValidity.js';
import { TryCountValidity } from './tryCountValidity.js';
import { MakeToCar } from './makeToCar.js';
import { PlayRacing } from './playRacing.js';

function carNamesGet() {
  let carNames = [];
  $('#car-names-submit').addEventListener('click', () => {
    const names = $('#car-names-input').value.split(',');
    if (CarNamesValidity(names)) {
      $('#car-names-submit').disabled = true;
      $('#racing-count-submit').disabled = false;
      carNames = names;
    }
  });
  return carNames;
}
function tryCountGet(carNamesList) {
  $('#racing-count-submit').addEventListener('click', () => {
    const tryCount = parseInt($('#racing-count-input').value);
    if (TryCountValidity(tryCount)) {
      $('#racing-count-submit').disabled = true;
      const carList = MakeToCar(carNamesList);
      PlayRacing(carList, tryCount);
    }
  });
}
export function GetInputs() {
  const carNamesList = carNamesGet();
  tryCountGet(carNamesList); 
}
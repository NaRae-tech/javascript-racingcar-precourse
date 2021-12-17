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
      carNames = names;
    }
  });
  return carNames;
}
function tryCountGet(carNamesList) {
  $('#racing-count-submit').addEventListener('click', () => {
    if (carNamesList === []) {
      return alert('자동차 이름을 먼저 입력해주세요');
    }
    const tryCount = parseInt($('#racing-count-input').value);
    if (TryCountValidity(tryCount)) {
      $('#racing-count-submit').disabled = true;
      return tryCount;
    }
  });
}
export function GetInputs() {
  const carNamesList = carNamesGet();
  const racingCount = tryCountGet(carNamesList);
  if (carNamesList.length > 0 && !isNaN(racingCount)) {
    const carList = MakeToCar(carNamesList);
    PlayRacing(carList, racingCount);
  }
}
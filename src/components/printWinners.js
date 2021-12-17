import { $ } from './dom.js';
import { SearchWinner } from './searchWinner.js';

export function PrintWinner(carList) {
  const winners = SearchWinner(carList);
  const winnerPrint = document.createElement('p');
  winnerPrint.innerHTML = winners;
  winnerPrint.id = 'racing-winners';
  $('#app').appendChild(winnerPrint);
}
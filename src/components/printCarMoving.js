import { $ } from './dom.js';

export function PrintCarMoving(carList) {
  let div = document.createElement('div');
  div.style = 'margin-bottom:40px';
  for (let i = 0; i < carList.length; i++){
    const progress = '-'.repeat(carList[i].count);
    div.innerHTML+=`<p>${carList[i].name}:${progress}</p>`;
  }
  $('#app').appendChild(div);
}
import { $ } from './components/dom.js';
import { GetInputs } from './components/getInputs.js';

function buttonSet() {
  $('#car-names-submit').type = 'button';
  $('#racing-count-submit').type = 'button';
  $('#racing-count-submit').disabled = true;
}
export function RacingGame() {
  buttonSet();
  GetInputs();
}
RacingGame();
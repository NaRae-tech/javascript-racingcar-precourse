function lengthValidity(names) {
  for (let i = 0; i < names.length; i++){
    if (names[i].length > 5 || names[i].length<1) {
      return alert('차의 이름은 1자 이상 5자 이하여야 합니다.');
    }
  }
  return true;
}
function duplicationValidity(names) {
  const setNames = new Set(names);
  return (names.length === setNames.size) ? true : false;
}

export function CarNamesValidity(carNameInput) {
  const names = carNameInput.split(',');
  if (!lengthValidity(names)) {
    return false;
  }
  if (!duplicationValidity(names)) {
    return false;
  }
  console.log(names);
  return true;
}
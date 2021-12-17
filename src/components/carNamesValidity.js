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
  if (names.length !== setNames.size) {
    return alert('차의 이름은 모두 달라야 합니다.');
  }
  return true;
}

export function CarNamesValidity(names) {
  if (!lengthValidity(names)) {
    return false;
  }
  if (!duplicationValidity(names)) {
    return false;
  }
  return true;
}
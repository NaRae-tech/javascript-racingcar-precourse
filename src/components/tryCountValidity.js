function integerValidity(input) {
  if (isNaN(parseInt(input))) {
    return alert('숫자를 입력해주세요.');
  }
  return true;
}
function rangeValiditiy(input) {
  if (parseInt(input) < 1) {
    return alert('1이상의 숫자를 입력해주세요.');
  }
  return true;
}
export function TryCountValidity(countInput) {
  if (!integerValidity(countInput)) {
    return false;
  }
  if (!rangeValiditiy(countInput)) {
    return false;
  }
  return true;
} 
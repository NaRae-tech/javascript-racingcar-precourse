function searchMaxCount(carList) {
  let maximum = 0;
  for (let i = 0; i < carList.length; i++){
    if (carList[i].count > maximum) {
      maximum = carList[i].count;
    }
  }
  return maximum;
}
export function SearchWinner(carList) {
  const maximumCount = searchMaxCount(carList);
  let winners = [];
  for (let i = 0; i < carList.length; i++){
    if (carList[i].count === maximumCount) {
      winners.push(carList[i].name);
    }
  }
  return winners.join(', ');
}
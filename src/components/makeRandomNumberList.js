export function MakeRandomNumberList(carList) {
  let randomNumberList = [];
  console.log(carList);
  for (let i = 0; i < carList.length; i++){
    randomNumberList.push(MissionUtils.Random.pickNumberInRange(0, 9));
  }
  return randomNumberList;
}
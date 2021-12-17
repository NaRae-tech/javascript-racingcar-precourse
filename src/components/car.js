export class Car{
  constructor(inputName) {
    this.name = inputName;
    this.count = 0;
  }
  upCount() {
    this.count++;
  }
}
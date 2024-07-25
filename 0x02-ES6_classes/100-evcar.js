// 100-evcar.js

import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // Override cloneCar to return an instance of Car
  cloneCar() {
    return super.cloneCar();  // Calls the Car's cloneCar method
  }

  // Getter for range
  get range() {
    return this._range;
  }
}

import Car from './10-car';

/**
 * Represents an Electric Vehicle (EV) Car that extends from the Car class.
 */
export default class EVCar extends Car {
  /**
   * Constructs a new EVCar object.
   * @param {String} brand - The brand of the EV car.
   * @param {String} motor - The motor type of the EV car.
   * @param {String} color - The color of the EV car.
   * @param {Number} range - The range (in miles or kilometers) of the EV car.
   */
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  /**
   * Getter for the range of the EV car.
   * @returns {Number} The range of the EV car.
   */
  get range() {
    return this._range;
  }

  /**
   * Setter for the range of the EV car.
   * @param {Number} value - The new range of the EV car.
   */
  set range(value) {
    this._range = value;
  }

  /**
   * Overrides the cloneCar method from the Car class to create and return a new instance of EVCar.
   * @returns {EVCar} A new instance of the EVCar class.
   */
  cloneCar() {
    const Species = super.constructor[Symbol.species];
    return new Species();
  }
}

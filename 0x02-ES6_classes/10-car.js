/**
 * Represents a Car object with brand, motor, and color attributes.
 */
export default class Car {
  /**
   * Constructs a new Car object.
   * @param {String} brand - The brand of the car.
   * @param {String} motor - The motor type of the car.
   * @param {String} color - The color of the car.
   */
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  /**
   * Getter for the brand of the car.
   * @returns {String} The brand of the car.
   */
  get brand() {
    return this._brand;
  }

  /**
   * Setter for the brand of the car.
   * @param {String} value - The new brand of the car.
   */
  set brand(value) {
    this._brand = value;
  }

  /**
   * Getter for the motor type of the car.
   * @returns {String} The motor type of the car.
   */
  get motor() {
    return this._motor;
  }

  /**
   * Setter for the motor type of the car.
   * @param {String} value - The new motor type of the car.
   */
  set motor(value) {
    this._motor = value;
  }

  /**
   * Getter for the color of the car.
   * @returns {String} The color of the car.
   */
  get color() {
    return this._color;
  }

  /**
   * Setter for the color of the car.
   * @param {String} value - The new color of the car.
   */
  set color(value) {
    this._color = value;
  }

  /**
   * Static getter for the Symbol.species property.
   * @returns {Function} The class constructor function itself.
   */
  static get [Symbol.species]() {
    return this;
  }

  /**
   * Creates and returns a new instance of the current class (species).
   * @returns {Object} A new instance of the current class (species).
   */
  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}


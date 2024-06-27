/**
 * Represents an Airport object.
 */
export default class Airport {
  /**
   * Constructs a new Airport object.
   * @param {String} name - The name of the airport.
   * @param {String} code - The airport code.
   */
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  /**
   * Getter for the airport name.
   * @returns {String} The airport name.
   */
  get name() {
    return this._name;
  }

  /**
   * Setter for the airport name.
   * @param {String} value - The new airport name.
   */
  set name(value) {
    this._name = value;
  }

  /**
   * Getter for the airport code.
   * @returns {String} The airport code.
   */
  get code() {
    return this._code;
  }

  /**
   * Setter for the airport code.
   * @param {String} value - The new airport code.
   */
  set code(value) {
    this._code = value;
  }

  /**
   * Custom method to define the object's default description string.
   * Uses the airport code as the default description.
   * @returns {String} The airport code.
   */
  get [Symbol.toStringTag]() {
    return this._code;
  }
}

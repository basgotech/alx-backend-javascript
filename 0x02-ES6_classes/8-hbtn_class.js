/**
 * Represents a HolbertonClass object.
 */
export default class HolbertonClass {
  /**
   * Constructs a new HolbertonClass object.
   * @param {Number} size - The size of the class.
   * @param {String} location - The location of the class.
   */
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  /**
   * Getter for the size of the class.
   * @returns {Number} The size of the class.
   */
  get size() {
    return this._size;
  }

  /**
   * Setter for the size of the class.
   * @param {Number} value - The new size of the class.
   */
  set size(value) {
    this._size = value;
  }

  /**
   * Getter for the location of the class.
   * @returns {String} The location of the class.
   */
  get location() {
    return this._location;
  }

  /**
   * Setter for the location of the class.
   * @param {String} value - The new location of the class.
   */
  set location(value) {
    this._location = value;
  }

  /**
   * Custom method to define the object's primitive value conversion behavior.
   * If hint is 'number', returns the size of the class.
   * If hint is 'string', returns the location of the class.
   * Otherwise, returns the object itself.
   * @param {String} hint - The hint for the conversion.
   * @returns {Number|String|Object} The converted value or the object itself.
   */
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this.size;
    }
    if (hint === 'string') {
      return this.location;
    }
    return this;
  }
}

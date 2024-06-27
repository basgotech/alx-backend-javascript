export default class Building {
  /**
   * Constructs a new Building object.
   * @param {Number} sqft - The square footage of the building.
   */
  constructor(sqft) {
    this._sqft = sqft;
  }

  /**
   * Getter for the square footage.
   * @returns {Number} The square footage.
   */
  get sqft() {
    return this._sqft;
  }

  /**
   * Abstract method that must be overridden by subclasses.
   * Throws an error if not overridden.
   */
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

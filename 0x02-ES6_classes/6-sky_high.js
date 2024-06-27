import Building from './5-building';

export default class SkyHighBuilding extends Building {
  /**
   * Constructs a new SkyHighBuilding object.
   * @param {Number} sqft - The square footage of the building.
   * @param {Number} floors - The number of floors in the building.
   */
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  /**
   * Getter for the number of floors.
   * @returns {Number} The number of floors.
   */
  get floors() {
    return this._floors;
  }

  set floors(value) {
    this._floors = value;
  }

  /**
   * Override of the evacuationWarningMessage method.
   * @returns {String} Evacuation message based on the number of floors.
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}

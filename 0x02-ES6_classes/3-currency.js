export default class Currency {
  /**
   * Constructs a new Currency object.
   * @param {String} code - The currency code.
   * @param {String} name - The name of the currency.
   */
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  /**
   * Getter for the currency code.
   * @returns {String} The currency code.
   */
  get code() {
    return this._code;
  }

  /**
   * Setter for the currency code.
   * @param {String} newCode - The new currency code.
   */
  set code(newCode) {
    this._code = newCode;
  }

  /**
   * Getter for the currency name.
   * @returns {String} The currency name.
   */
  get name() {
    return this._name;
  }

  /**
   * Setter for the currency name.
   * @param {String} newName - The new currency name.
   */
  set name(newName) {
    this._name = newName;
  }

  /**
   * Display the full currency details in the format: name (code).
   * @returns {String} The full currency details.
   */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

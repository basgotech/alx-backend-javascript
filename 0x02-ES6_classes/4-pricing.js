import Currency from './3-currency';

export default class Pricing {
  /**
   * Constructs a new Pricing object.
   * @param {Number} amount - The price amount.
   * @param {Currency} currency - The currency object.
   */
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  /**
   * Getter for the price amount.
   * @returns {Number} The price amount.
   */
  get amount() {
    return this._amount;
  }

  /**
   * Setter for the price amount.
   * @param {Number} newAmount - The new price amount.
   */
  set amount(newAmount) {
    this._amount = newAmount;
  }

  /**
   * Getter for the currency object.
   * @returns {Currency} The currency object.
   */
  get currency() {
    return this._currency;
  }

  /**
   * Setter for the currency object.
   * @param {Currency} newCurrency - The new currency object.
   */
  set currency(newCurrency) {
    this._currency = newCurrency;
  }

  /**
   * Display the full price details in the format: amount currency_name (currency_code).
   * @returns {String} The full price details.
   */
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  /**
   * Convert a price amount using a conversion rate.
   * @param {Number} amount - The amount to convert.
   * @param {Number} conversionRate - The conversion rate.
   * @returns {Number} The converted amount.
   */
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

import Currency from './3-currency';

class Pricing {
    /**
   * Constructs a new Pricing object.
   * @param {Number} amount - The price amount.
   * @param {Currency} currency - The currency object.
   */
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  /**
   * Getter for the price amount.
   * @param {Number} amount
   */
  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a Number');
    }
    this._amount = amount;
  }

  /**
   * Setter for the price amount.
   * @param {Number} newAmount - The new price amount.
   */
  get amount() {
    return this._amount;
  }

  /**
   * Getter for the currency object.
   * @param {Currency} The currency object.
   */
  set currency(currency) {
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw new TypeError('currency must be an instance of Currency');
    }
  }

  /**
   * Setter for the currency object.
   * @param {Currency} newCurrency - The new currency object.
   */
  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  /**
   * Convert a price amount using a conversion rate.
   * @param {Number} amount
   * @param {Number} conversionRate
   */
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }

    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }

    return amount * conversionRate;
  }
}

export default Pricing;

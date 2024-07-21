export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;

    if (typeof this._code !== 'string') {
      throw new TypeError('code must be a string');
    }

    if (typeof this._name !== 'string') {
      throw new TypeError('name must be a string');
    }
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

// 7-airport.js
export default class Airport {
  constructor(name, code) {
    // Validate input types
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }

    this._name = name;
    this._code = code;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Override toString method to provide the desired string description
  toString() {
    return `[object ${this._code}]`;
  }
}

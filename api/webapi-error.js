export default class WebapiError extends Error {
  constructor (message = '', statusCode) {
    super();
    this.name = this.constructor.name;
    this.message = message;
    this.statusCode = statusCode;
    this.stack = (new Error()).stack;
  }
}

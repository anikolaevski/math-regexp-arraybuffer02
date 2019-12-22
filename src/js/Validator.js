/* eslint-disable no-throw-literal */
export default class Validator {
  static validateUsername(name) {
    if (name.match(/[^a-zA-Z0-9_-]/) !== null) {
      throw (`Name "${name}": allowed only letters, numbers, underline and dash`);
    }
    if (name.match(/\d\d\d/) !== null) {
      throw (`Name "${name}": not allowed >=3 digits in a row`);
    }
    if (name.match(/^[a-zA-Z]/) == null) {
      throw (`Name "${name}": should be started with letter`);
    }
    if (name.match(/[a-zA-Z]$/) == null) {
      throw (`Name "${name}": should be concluded with letter`);
    }
    return name;
  }
}

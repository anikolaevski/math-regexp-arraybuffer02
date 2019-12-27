/* eslint-disable no-throw-literal */
export default class Validator {
  static validateUsername(name) {
    if (/[^a-z0-9_-]/i.test(name)) {
      throw (`Name "${name}": allowed only letters, numbers, underline and dash`);
    }
    if (/\d{3,}/.test(name)) {
      throw (`Name "${name}": not allowed >=3 digits in a row`);
    }
    if (!/^[a-z]/i.test(name)) {
      throw (`Name "${name}": should be started with letter`);
    }
    if (!/[a-z]$/i.test(name)) {
      throw (`Name "${name}": should be concluded with letter`);
    }
    return name;
  }
}

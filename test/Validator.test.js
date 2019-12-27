import Validator from '../src/js/Validator';

test('Test Validator ObiOne', () => {
  const sourceData = 'ObiOne';
  const result = Validator.validateUsername(sourceData);
  expect(result).toBe(sourceData);
});

test('Test Validator Obi_One', () => {
  const sourceData = 'Obi_One';
  const result = Validator.validateUsername(sourceData);
  expect(result).toBe(sourceData);
});

test('Test Validator Obi-One', () => {
  const sourceData = 'Obi-One';
  const result = Validator.validateUsername(sourceData);
  expect(result).toBe(sourceData);
});

test('Test Validator Obi+One', () => {
  const sourceData = 'Obi+One';
  const expected = `Name "${sourceData}": allowed only letters, numbers, underline and dash`;
  expect(() => {
    Validator.validateUsername(sourceData);
  }).toThrow(expected);
});

test('Test Validator Obi1One', () => {
  const sourceData = 'Obi1One';
  const result = Validator.validateUsername(sourceData);
  expect(result).toBe(sourceData);
});

test('Test Validator Obi12One', () => {
  const sourceData = 'Obi12One';
  const result = Validator.validateUsername(sourceData);
  expect(result).toBe(sourceData);
});

test('Test Validator Obi123One', () => {
  const sourceData = 'Obi123One';
  const expected = `Name "${sourceData}": not allowed >=3 digits in a row`;
  expect(() => {
    Validator.validateUsername(sourceData);
  }).toThrow(expected);
});

test('Test Validator _ObiOne', () => {
  const sourceData = '_ObiOne';
  const expected = `Name "${sourceData}": should be started with letter`;
  expect(() => {
    Validator.validateUsername(sourceData);
  }).toThrow(expected);
});

test('Test Validator Obi1', () => {
  const sourceData = 'Obi1';
  const expected = `Name "${sourceData}": should be concluded with letter`;
  expect(() => {
    Validator.validateUsername(sourceData);
  }).toThrow(expected);
});

test('Test Validator ObiOne_', () => {
  const sourceData = 'ObiOne_';
  const expected = `Name "${sourceData}": should be concluded with letter`;
  expect(() => {
    Validator.validateUsername(sourceData);
  }).toThrow(expected);
});

test('Test Validator ObiOne-', () => {
  const sourceData = 'ObiOne-';
  const expected = `Name "${sourceData}": should be concluded with letter`;
  expect(() => {
    Validator.validateUsername(sourceData);
  }).toThrow(expected);
});

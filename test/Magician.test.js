import Magician from '../src/js/Magician';

test('Test MPWP', () => {
  const sourceData = {
    name: 'Master_Yoda', health: 999, level: 999,
  };

  const result = new Magician(sourceData);

  const expected = {
    name: 'Master_Yoda',
    health: 999,
    level: 999,
    attack: 10,
    defense: 40,
    attackrange: 1,
    stonedParam: 0,
  };

  expect(result).toEqual(expected);
});

test('Test Magician range 5', () => {
  const sourceData = {
    name: 'Master_Yoda', health: 999, level: 999,
  };

  const result = new Magician(sourceData);
  result.range = 5;

  const expected = 6;

  expect(result.curAttack).toBe(expected);
});

test('Test Magician range 3 stoned', () => {
  const sourceData = {
    name: 'Master_Yoda', health: 999, level: 999,
  };

  const result = new Magician(sourceData);
  result.range = 3;
  result.stoned = 1;

  const expected = 2.075;

  expect(result.curAttack).toBeCloseTo(expected);
});

test('Test Magician range 5 stoned', () => {
  const sourceData = {
    name: 'Master_Yoda', health: 999, level: 999,
  };

  const result = new Magician(sourceData);
  result.range = 5;
  result.stoned = 1;

  const expected = 0;

  expect(result.curAttack).toBeCloseTo(expected);
});

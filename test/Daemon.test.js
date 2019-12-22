import Daemon from '../src/js/Daemon';

test('Test MPWP', () => {
  const sourceData = {
    name: 'Master_Yoda', health: 999, level: 999,
  };

  const result = new Daemon(sourceData);

  const expected = {
    name: 'Master_Yoda',
    health: 999,
    level: 999,
    attack: 20,
    defense: 60,
    attackrange: 1,
    stonedParam: 0,
  };

  expect(result).toEqual(expected);
});

test('Test Daemon range 5', () => {
  const sourceData = {
    name: 'Master_Yoda', health: 999, level: 999,
  };

  const result = new Daemon(sourceData);
  result.range = 5;

  const expected = 12;

  expect(result.curAttack).toBe(expected);
});

test('Test Daemon range 3 stoned', () => {
  const sourceData = {
    name: 'Master_Yoda', health: 999, level: 999,
  };

  const result = new Daemon(sourceData);
  result.range = 3;
  result.stoned = 1;

  const expected = 12.08;

  expect(result.curAttack).toBeCloseTo(expected);
});

test('Test Daemon range 5 stoned', () => {
  const sourceData = {
    name: 'Master_Yoda', health: 999, level: 999,
  };

  const result = new Daemon(sourceData);
  result.range = 5;
  result.stoned = 1;

  const expected = 8.39;

  expect(result.curAttack).toBeCloseTo(expected);
});

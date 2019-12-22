import MPWP from '../src/js/MPWP';

test('Test MPWP', () => {
  const sourceData = {
    name: 'Master_Yoda', health: 999, level: 999,
  };

  const result = new MPWP(sourceData);

  const expected = {
    name: 'Master_Yoda',
    health: 999,
    level: 999,
    attack: 5,
    defense: 5,
    attackrange: 1,
    stonedParam: 0,
  };

  expect(result).toEqual(expected);
});

test('Test MPWP curProps()', () => {
  const sourceData = {
    name: 'Master_Yoda', health: 999, level: 999,
  };

  const result = new MPWP(sourceData);

  const expected = {
    name: 'Master_Yoda',
    health: 999,
    level: 999,
    attack: 5,
    defense: 5,
    attackrange: 1,
  };

  expect(result.curProps()).toEqual(expected);
});

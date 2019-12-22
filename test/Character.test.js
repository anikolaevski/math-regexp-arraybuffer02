import Character from '../src/js/Character';

test('Test Character', () => {
  const sourceData = {
    name: 'Master_Yoda', health: 999, level: 999,
  };

  const result = new Character(sourceData);

  const expected = {
    name: 'Master_Yoda',
    health: 999,
    level: 999,
    attack: 5,
    defense: 5,
  };

  expect(result).toEqual(expected);
});

test('Test Character curProps()', () => {
  const sourceData = {
    name: 'Master_Yoda', health: 999, level: 999,
  };

  const result = new Character(sourceData);

  const expected = {
    name: 'Master_Yoda',
    health: 999,
    level: 999,
    attack: 5,
    defense: 5,
  };

  expect(result.curProps()).toEqual(expected);
});

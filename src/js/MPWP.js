import Character from './Character';

// Magic People Woodoo People
export default class MPWP extends Character {
  constructor(obj) {
    super(obj);
    this.attackrange = 1;
    this.stonedParam = 0;
  }

  get curAttack() {
    if (this.stonedParam !== 0) {
      return Math.max(0, this.attack - Math.log2(this.attackrange) * 5);
    }
    return this.attack * (1 - 0.1 * (this.attackrange - 1));
  }

  set range(range) {
    this.attackrange = range;
  }

  set stoned(val) {
    this.stonedParam = val;
  }

  curProps() {
    return {
      name: this.name,
      level: this.level,
      health: this.health,
      attack: this.curAttack,
      defense: this.defense,
      attackrange: this.attackrange,
    };
  }
}

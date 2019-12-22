import MPWP from './MPWP';

export default class Magician extends MPWP {
  constructor(obj) {
    super(obj);
    this.attack = 10;
    this.defense = 40;
  }
}

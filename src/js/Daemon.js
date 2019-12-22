import MPWP from './MPWP';

export default class Daemon extends MPWP {
  constructor(obj) {
    super(obj);
    this.attack = 20;
    this.defense = 60;
  }
}

/* eslint-disable no-console */
// TODO: write code here
import MPWP from './MPWP';
import Daemon from './Daemon';
import Magician from './Magician';

const Yoda = new MPWP({ name: 'Master_Yoda', health: 999, level: 999 });
const Obivan = new Magician({ name: 'Obivan_Kenobi', health: 999, level: 999 });
const DarthWader = new Daemon({ name: 'Anakin_Skywalker', health: 999, level: 999 });

console.log(Yoda.curProps());
console.log(Obivan.curProps());
console.log(DarthWader.curProps());
console.log(`${Obivan.name}: range = 5`);
Obivan.range = 5;
console.log(Obivan.curProps());

console.log(`${DarthWader.name}: stoned = 1, range = 5`);
DarthWader.range = 5;
DarthWader.stoned = 5;
console.log(DarthWader.curProps());

console.log(`${DarthWader.name}: stoned = 0, range = 5`);
DarthWader.range = 5;
DarthWader.stoned = 0;
console.log(DarthWader.curProps());

const Obivan2 = new Magician({ name: 'Obi123One', health: 999, level: 999 });
console.log(Obivan2.curProps());

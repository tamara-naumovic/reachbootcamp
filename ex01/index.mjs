import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const [ accTamara, accPetar ] =
  await stdlib.newTestAccounts(2, startingBalance);
console.log('Hello, Tamara and Petar!');

console.log('Launching...');
const ctcTamara = accTamara.contract(backend);
const ctcPetar = accPetar.contract(backend, ctcTamara.getInfo());

console.log('Starting backends...');
await Promise.all([
  backend.Tamara(ctcTamara, {
    ...stdlib.hasRandom,
    // implement Tamara's interact object here
  }),
  backend.Petar(ctcPetar, {
    ...stdlib.hasRandom,
    // implement Petar's interact object here
  }),
]);

console.log('Goodbye, Tamara and Petar!');

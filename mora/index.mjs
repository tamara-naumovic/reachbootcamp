import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const [ accMilica, accAleksa ] =
  await stdlib.newTestAccounts(2, startingBalance);
console.log('Hello, Milica and Aleksa!');

console.log('Launching...');
const ctcMilica = accMilica.contract(backend);
const ctcAleksa = accAleksa.contract(backend, ctcMilica.getInfo());

console.log('Starting backends...');
await Promise.all([
  backend.Milica(ctcMilica, {
  }),
  backend.Aleksa(ctcAleksa, {
  }),
]);

console.log('Goodbye, Milica and Aleksa!');

import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

const startingBalance = stdlib.parseCurrency(100);

const accAlice = await stdlib.newTestAccounts(startingBalance);
const accBob = await stdlib.newTestAccounts(startingBalance);
  
const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

await Promise.all([
  ctcAlice.p.Alice({
    //Alice code
  }),
  ctcBob.p.Bob({
    //Bob code
  })
]);

console.log('Goodbye, Alice and Bob!');

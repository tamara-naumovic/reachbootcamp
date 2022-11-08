import * as backend from '../build/index.main.mjs';
import {loadStdlib} from '@reach-sh/stdlib';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(1000);

const [ accOne, accTwo ] =
  await stdlib.newTestAccounts(2, startingBalance);

const ctcOne = accOne.contract(backend);
const ctcTwo = accTwo.contract(backend, ctcOne .getInfo());

const helper = (x) =>stdlib.formatCurrency(x, 3);
const getBalance = async (who)=>helper(await stdlib.balanceOf(who));
const balanceOne = await getBalance(accOne); 
const balanceTwo = await getBalance(accTwo); 

console.log(`Acc One balance ${balanceOne} `);
console.log(`Acc Two balance ${balanceTwo}`);
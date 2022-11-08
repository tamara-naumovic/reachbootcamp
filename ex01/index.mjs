//rock paper scissors with Tamara and Petar
import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const [ accTamara, accPetar ] =
  await stdlib.newTestAccounts(2, startingBalance);

const fmt = (x) =>stdlib.formatCurrency(x, 4); //formating from micro algo to algo
const getBalance = async (who)=>fmt(await stdlib.balanceOf(who)); //getting balance in previously defined format
const beforeTamara = await getBalance(accTamara); //before wagering
const beforePetar = await getBalance(accPetar); //before wagering


console.log('Hello, Tamara and Petar!');

const ctcTamara = accTamara.contract(backend);
const ctcPetar = accPetar.contract(backend, ctcTamara .getInfo());

console.log('Launching Rock Paper Scissors...');

const HAND = ['Rock', 'Paper', 'Scissors'];
const OUTCOME = ['Petar wins', 'Draw', 'Tamara wins'];
const Player = (Who) =>({
  getHand:()=>{
    const hand_num = Math.floor(Math.random()*3) //gives us 0 1 2, so we can know what did they choose in HAND array
    console.log(`${Who} played ${HAND[hand_num]}`);
    return hand_num; //.rsh says its a fun with no params [] and return UInt, so return hand_num needs to happen
  },
  seeOutcome:(outcome)=>{
    console.log(`${Who} saw outcome ${OUTCOME[outcome]}`)
  }
})

console.log('Starting backends...');
await Promise.all([
  ctcTamara.p.Tamara({
    // implement Tamara's interact object here

    ...Player('Tamara'),
    wager: stdlib.parseCurrency(5) //Tamara bets 5 micro algos > from algos to micro algos
  }),
  ctcPetar.p.Petar({
    // implement Petar's interact object here

    ...Player('Petar'),
    acceptwager: (amt)=>{
      console.log(`Petar accepts the wager of ${fmt(amt)}.`);
    },
  }),
]);

const afterTamara = await getBalance(accTamara);
const afterPetar = await getBalance(accPetar);

console.log(`Tamara went from ${beforeTamara} to ${afterTamara} `);
console.log(`Petar went from ${beforePetar} to ${afterPetar} `);
console.log('Goodbye, Tamara and Petar!');
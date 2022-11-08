//rock paper scissors with Tamara and Petar
import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const [ accTamara, accPetar ] =
  await stdlib.newTestAccounts(2, startingBalance);
console.log('Hello, Tamara and Petar!');

console.log('Launching Rock Paper Scissors...');
const HAND = ['Rock', 'Paper', 'Scissors'];
const OUTCOME = ['Tamara wins', 'Draw', 'Petar wins'];
const Player = (Who) =>({
  getHand:()=>{
    const hand_num = Math.floor(Math.random()*3) //gives us 0 1 2, so we can know what did they choose in HAND array
    console.log(`${Who} played ${HAND[hand_num]}`);
  },
  seeOutcome:(outcome)=>{
    console.log(`${Who} saw outcome ${OUTCOME[outcome]}`)
  }
})

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

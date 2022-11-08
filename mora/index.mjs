import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const [ accMilica, accAleksa ] =
  await stdlib.newTestAccounts(2, startingBalance);
console.log('Hello, Milica and Aleksa!');

//--for tracking wagers
const fmt = (x) =>stdlib.formatCurrency(x, 4); 
const getBalance = async (who)=>fmt(await stdlib.balanceOf(who));
const beforeMilica = await getBalance(accMilica); 
const beforeAleksa = await getBalance(accAleksa); 
//--

console.log('Launching Mora Game');
const ctcMilica = accMilica.contract(backend);
const ctcAleksa = accAleksa.contract(backend, ctcMilica.getInfo());


const HAND = [0, 1, 2, 3, 4, 5];
const RESULTS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const OUTCOME = ["Aleksa wins", "Draw", "Milica wins"];

const Player = (Who) => ({
  getHand: () => {
    const hand = Math.floor(Math.random() * 6); //get a number from 0 to 5
    console.log(`${Who} played ${HAND[hand]}`); //ex Aleksa played 2
    return hand; //hand needs to be returned, because of the backend deffinition of the getHand fun
  },
  getResult: () => {
    const result = Math.floor(Math.random() * 11); //guessing the total
    console.log(`${Who} expecting result: ${RESULTS[result]}`);
    return result; //returning the result to backend
  },
  seeOutcome: (outcome) => {
    console.log(`${Who} saw outcome ${OUTCOME[outcome]}`); //displaying the outcome to both parties
  },
});

console.log('Starting backends...');
await Promise.all([
  backend.Milica(ctcMilica, {
    ...Player("Milica"),
    wager: stdlib.parseCurrency(5),
  }),
  backend.Aleksa(ctcAleksa, {
    ...Player("Aleksa"),
    acceptwager: (amt)=>{
      console.log(`Aleksa accepts the wager of ${fmt(amt)}.`)
    }

  }),
]);

const afterMilica = await getBalance(accMilica);
const afterAleksa = await getBalance(accAleksa);

console.log(`Milica went from ${beforeMilica} to ${accMilica} `);
console.log(`Aleksa went from ${beforeAleksa} to ${accAleksa} `);
console.log('Goodbye, Milica and Aleksa!');

'reach 0.1';

const Player = {
  getHand: Fun([],UInt), //UInt unsigned int
  seeOutcome: Fun([UInt], Null)
}

export const main = Reach.App(() => {
  const T = Participant('Tamara', {
    // Specify Tamara's interact interface here
    ...Player, //inherit functions from player
    wager: UInt, //only Tamara can see the wager info - custom data
  });
  const P = Participant('Petar', {
    // Specify Petar's interact interface here
    ...Player,
    acceptwager: Fun([UInt], Null),
  });
  init();
  // Tamara's hand
  T.only(()=>{ //local step
    const amount = declassify(interact.wager); //wager from fronted declasified and stored into amount - needs to be published
    const handTamara = declassify(interact.getHand()); //decrypt info from the frontend
  });
  T.publish(handTamara, amount) //write this to the blockchain - consensus step
    .pay(amount) //paying into the contract
  commit() //commit transaction and go back to step

  //Petar's hand
  P.only(()=>{
    const handPetar = declassify(interact.getHand()) 
  });
  P.publish(handPetar);
  const outcome = (handTamara+(4-handPetar))%3; //find the outcome
  commit();

  each([T, P], ()=>{
    interact.seeOutcome(outcome);
  });
  
});

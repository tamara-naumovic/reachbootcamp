'reach 0.1';

const Player = {
  getHand: Fun([],UInt), //UInt unsigned int
  seeOutcome: Fun([UInt], Null)
}

export const main = Reach.App(() => {
  const A = Participant('Tamara', {
    // Specify Tamara's interact interface here
    ...Player, //inherit functions from player
    wager: UInt, //only Tamara can see the wager info - custom data
  });
  const B = Participant('Petar', {
    // Specify Petar's interact interface here
    ...Player,
    acceptwager: Fun([UInt], Null),
  });
  init();
  // Tamara's hand
  A.only(()=>{ //local step
    const handTamara = declassify(interact.getHand()) //decrypt info from the frontend
  });
  A.publish(handTamara) //write this to the blockchain - consensus step
  commit() //commit transaction and go back to step

  //Petar's hand
  B.only(()=>{
    const handPetar = declassify(interact.getHand()) 
  });
  B.publish(handPetar);
  const outcome = (handTamara+(4-handPetar))%3; //find the outcome
  commit();

  each([A, B], ()=>{
    interact.seeOutcome(outcome);
  });
  
});

'reach 0.1';

const Player = {
  getHand: Fun([],UInt), //UInt unsigned int
  seeOutcome: Fun([UInt], Null)
}

export const main = Reach.App(() => {
  const T = Participant('Tamara', {
    // Specify Tamara's interact interface here
    ...Player, //inherit functions from player
    wager: UInt //only Tamara can see the wager info - custom data
  });
  const P = Participant('Petar', {
    // Specify Petar's interact interface here
    ...Player,
    acceptwager: Fun([UInt], Null)
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
    interact.acceptwager(amount); //we dont need to declassify 
    const handPetar = declassify(interact.getHand()) 
  });
  P.publish(handPetar)
    .pay(amount)
  const outcome = (handTamara+(4-handPetar))%3; //find the outcome
  const [forTamara, forPetar] =
    outcome == 2?[2,0]: //if Tamara wins she gets 2*wager
    outcome == 0?[0,2]: //if Petar winds he gets 2*wager
                [1,1];  //if its a Draw they get what they wagered
    transfer(forTamara*amount).to(T); //transfering tokens of the wager
    transfer(forPetar*amount).to(P);
    commit();

  each([T, P], ()=>{
    interact.seeOutcome(outcome);
  });
  
});
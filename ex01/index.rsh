'reach 0.1';

//enumerations

const [isHand, ROCK, PAPER, SCISSORS] = makeEnum(3);
const [isOutcome, P_WINS, DRAW, T_WINS] = makeEnum(3); //this should be in the same order as on the front
const winner = (handTamara, handPetar)=>
  ((handTamara+(4-handPetar))%3);


assert(winner(ROCK, PAPER)==P_WINS);
assert(winner(PAPER, ROCK)==T_WINS);
assert(winner(ROCK, ROCK)==DRAW);

forall(UInt, handTamara=>
  forall(UInt, handPetar=>
    assert(isOutcome(winner(handTamara, handPetar)))));

forall(UInt, (hand)=>
assert(winner(hand, hand)==DRAW));

const Player = {
  ...hasRandom,
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
    // const handTamara = declassify(interact.getHand()); //decrypt info from the frontend
    const _handTamara = interact.getHand(); //keep it secret or declassify 
    const[_commitTamara, _saltTamara] = makeCommitment(interact, _handTamara) //nothing has changed
    const commitTamara = declassify(_commitTamara);
  });
  T.publish(commitTamara, amount) //we are publishing the commitment instead of the hand itselft
    .pay(amount) //paying into the contract
  commit() //commit transaction and go back to step

  unknowable(P, T(_handTamara, _saltTamara)); //proper ways to use verification engine
  

  //Petar's hand
  P.only(()=>{
    interact.acceptwager(amount); //we dont need to declassify 
    const handPetar = declassify(interact.getHand());
    // const handPetar = (handTamara+1)%3; 

  });
  P.publish(handPetar)
    .pay(amount)
  
  commit();

  //declassifying information from salt and hand and publishing it after Petar run his hand
  T.only(()=>{
    const saltTamara = declassify(_saltTamara);
    const handTamara = declassify(_handTamara);
  });
  T.publish(saltTamara, handTamara);
  checkCommitment(commitTamara, saltTamara, handTamara) //verify that these information havent been changed

  const outcome = winner(handTamara, handPetar); //find the outcome with new checker function
  // require(handPetar==(handTamara+1)%3);
  // assert(outcome==0); //asking reach to check my computing 
  const [forTamara, forPetar] =
    outcome == T_WINS?[2,0]: //if Tamara wins she gets 2*wager
    outcome == P_WINS?[0,2]: //if Petar winds he gets 2*wager
                [1,1];  //if its a Draw they get what they wagered
    transfer(forTamara*amount).to(T); //transfering tokens of the wager
    transfer(forPetar*amount).to(P);
    commit();

  each([T, P], ()=>{
    interact.seeOutcome(outcome);
  });
  
});
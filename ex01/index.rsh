'reach 0.1';

const Player = {
  getHand: Fun([],UInt), //UInt unsigned int
  seeOutcome: Fun([UInt], Null)
}

export const main = Reach.App(() => {
  const A = Participant('Tamara', {
    // Specify Alice's interact interface here
    ...Player, //inherit functions from player
  });
  const B = Participant('Petar', {
    // Specify Bob's interact interface here
    ...Player,
  });
  init();
  // The first one to publish deploys the contract
  A.publish();
  commit();
  // The second one to publish always attaches
  B.publish();
  commit();
  // write your program here
  exit();
});

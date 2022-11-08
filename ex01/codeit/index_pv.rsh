//codeit 1 pat vanna
'reach 0.1';

const Participant = {
  getChallenge: Fun([],UInt), //UInt unsigned int
  seeResult: Fun([UInt], Null)
}

export const main = Reach.App(() => {
  const A = Participant('Vanna', {
    // Vanna interface here
    ...Participant,
  });
  const B = Participant('Pat', {
    // Pat interface here
    ...Participant,
  });
  init();
  // The first one to publish deploys the contract
  A.only(()=>{
    const challengeVanna = declasify(interact.getChallenge())
  })
  A.publish(challengeVanna);
  commit();
  // The second one to publish always attaches
  B.only(()=>{
    const challengePat = declasify(interact.getChallenge())
  })
  B.publish(challengePat);
  commit();
  // write your program here
  exit();
});
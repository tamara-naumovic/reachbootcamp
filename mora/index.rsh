'reach 0.1';

const Player = {
  getHand: Fun([], UInt), //returns a number 0 to 5, as a number of fingers played by the player
  getResult: Fun([], UInt), // returns a number 0 to 10 as a posible result, guessed by the player
  seeOutcome: Fun([UInt], Null), //dispays the outcome
};

export const main = Reach.App(() => {
  const Player1 = Participant('Milica', {
    ...Player,
  });
  const Player2 = Participant('Aleksa', {
    ...Player,
  });
  init();

  Player1.only(() => {
    const handMilica = declassify(interact.getHand());
    const resultMilica = declassify(interact.getResult());
  });

  Player1.publish(handMilica, resultMilica);
  commit();

  Player2.only(() => {
    const handAleksa = declassify(interact.getHand());
    const resultAleksa = declassify(interact.getResult());
  });
  Player2.publish(handAleksa, resultAleksa);
  commit();

  each([Player1, Player2], () => {
    interact.seeOutcome(outcome);
  });
 
});

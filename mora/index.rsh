'reach 0.1';

const winner = (hMil, hAle, resMil, resAle) => {
  if (resMil == resAle) {
    return 1;
  } else if (hMil + hAle == resMil) {
    return 2;
  } else if (hMil + hAle == resAle) {
    return 0;
  } else {
    return 1;
  }
};


const Player = {
  getHand: Fun([], UInt), //returns a number 0 to 5, as a number of fingers played by the player
  getResult: Fun([], UInt), // returns a number 0 to 10 as a posible result, guessed by the player
  seeOutcome: Fun([UInt], Null), //dispays the outcome
};

export const main = Reach.App(() => {
  const Player1 = Participant('Milica', {
    ...Player,
    wager: UInt,
  });
  const Player2 = Participant('Aleksa', {
    ...Player,
    acceptwager:Fun([UInt], Null),
  });
  init();

  Player1.only(() => {
    const amount = declassify(interact.wager);
    const handMilica = declassify(interact.getHand());
    const resultMilica = declassify(interact.getResult());
  });

  Player1.publish(handMilica, resultMilica, amount)
    .pay(amount);
  commit();

  Player2.only(() => {
    interact.acceptwager(amount);
    const handAleksa = declassify(interact.getHand());
    const resultAleksa = declassify(interact.getResult());
  });
  Player2.publish(handAleksa, resultAleksa)
    .pay(amount);
  const outcome = winner(handMilica, handAleksa, resultMilica, resultAleksa);
  
  const [forMilica, forAleksa]=
    outcome==2?[2,0]:
    outcome==0?[0,2]:
              [1,1];
  transfer(forMilica*amount).to(Player1);
  transfer(forAleksa*amount).to(Player2);
  
  commit();

  each([Player1, Player2], () => {
    interact.seeOutcome(outcome);
  });
 
});

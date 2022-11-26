'reach 0.1';

const [isHand, HAND_ZERO, HAND_ONE, HAND_TWO, HAND_THREE, HAND_FOUR, HAND_FIVE] = makeEnum(6);
const [
  isResult,
  TOTAL_ZERO,
  TOTAL_ONE,
  TOTAL_TWO,
  TOTAL_THREE,
  TOTAL_FOUR,
  TOTAL_FIVE,
  TOTAL_SIX,
  TOTAL_SEVEN,
  TOTAL_EIGHT,
  TOTAL_NINE,
  TOTAL_TEN,
] = makeEnum(11);
const [isOutcome, A_WINS, DRAW, M_WINS] = makeEnum(3);


const winner = (hMil, hAle, resMil, resAle) => {
  if (resMil == resAle) {
    return DRAW;
  } else if (hMil + hAle == resMil) {
    return M_WINS;
  } else if (hMil + hAle == resAle) {
    return A_WINS;
  } else {
    return DRAW;
  }
};

assert(winner(HAND_ZERO, HAND_ZERO, TOTAL_ZERO, TOTAL_ZERO) == DRAW);
assert(winner(HAND_ZERO, HAND_ZERO, TOTAL_ONE, TOTAL_ZERO) == A_WINS);
assert(winner(HAND_ZERO, HAND_ZERO, TOTAL_ZERO, TOTAL_ONE) == M_WINS);

forall(UInt, (hMil) =>
  forall(UInt, (hAle) =>
    forall(UInt, (resMil) =>
      forall(UInt, (resAle) =>
        assert(
          isOutcome(winner(hMil, hAle, resMil, resAle))
        )
      )
    )
  )
);

forall(UInt, (hMil) =>
  forall(UInt, (hAle) =>
    forall(UInt, (result) =>
      assert(winner(hMil, hAle, result, result) == DRAW)
    )
  )
);


const Player = {
  ...hasRandom,
  getHand: Fun([], UInt), //returns a number 0 to 5, as a number of fingers played by the player
  getResult: Fun([], UInt), // returns a number 0 to 10 as a posible result, guessed by the player
  seeOutcome: Fun([UInt], Null), //dispays the outcome
  informTimeout: Fun([], Null), // loop timeout
};

export const main = Reach.App(() => {
  const Player1 = Participant('Milica', {
    ...Player,
    wager: UInt,
    deadline: UInt,
  });
  const Player2 = Participant('Aleksa', {
    ...Player,
    acceptwager:Fun([UInt], Null),
  });
  init();

  const informTimeout = () => {
    each([Player1, Player2], () => {
      interact.informTimeout();
    });
  };

  Player1.only(() => {
    const amount = declassify(interact.wager);
    const deadline = declassify(interact.deadline);

  });

  Player1.publish(amount, deadline).pay(amount);
  commit();

  Player2.only(()=>{
    interact.acceptwager(amount);
  });

  Player2.pay(amount)
    .timeout(relativeTime(deadline), ()=>closeTo(Player1, informTimeout));

  //Looping 
  var outcome = DRAW;
  invariant(balance() == 2 * amount && isOutcome(outcome));
  while (outcome == DRAW) {
    commit();
    Player1.only(() => {
      // const handMilica = declassify(interact.getHand());
      // const resultMilica = declassify(interact.getResult());
      //we need to hide Milica info, so Aleksa cant cheat
      const _handMilica = interact.getHand();
      const [_commitMilica, _saltMilica] = makeCommitment(interact, _handMilica);
      const commitMilica = declassify(_commitMilica);
  
      const _resMilica = interact.getResult();
      const [_commitResMilica, _saltResMilica] = makeCommitment(interact, _resMilica);
      const commitResMilica = declassify(_commitResMilica);
    });
  
    Player1.publish(commitMilica, commitResMilica)
      .timeout(relativeTime(deadline), ()=>{closeTo(Player2, informTimeout);});
    commit();

    unknowable(Player2, Player1(_handMilica, _saltMilica, _resMilica, _saltResMilica));
    
    Player2.only(() => {
      const handAleksa = declassify(interact.getHand());
      const resultAleksa = declassify(interact.getResult());
    });  
    Player2.publish(handAleksa, resultAleksa)
      .timeout(relativeTime(deadline), ()=>closeTo(Player1, informTimeout));
    commit(); //player2 commits, before player1 reveals its information

    Player1.only(()=>{
      const saltMilica = declassify(_saltMilica);
      const handMilica = declassify(_handMilica);
      const saltResMilica = declassify(_saltResMilica);
      const resMilica = declassify(_resMilica);
    })
    Player1.publish(handMilica, saltMilica, resMilica, saltResMilica)
      .timeout(relativeTime(deadline), ()=>closeTo(Player1, informTimeout));

    checkCommitment(commitMilica, saltMilica, handMilica);
    checkCommitment(commitResMilica, saltResMilica, resMilica);
  
    outcome = winner(handMilica, handAleksa, resMilica, resultAleksa);
    continue;
  }

  assert(outcome==A_WINS || outcome==M_WINS);
  
  // const [forMilica, forAleksa]=
  //   outcome==M_WINS?[2,0]:
  //   outcome==A_WINS?[0,2]:
  //             [1,1];
  // transfer(forMilica*amount).to(Player1);
  // transfer(forAleksa*amount).to(Player2);
  transfer(2*amount).to(outcome== A_WINS? Player1:Player2)
  commit();

  each([Player1, Player2], () => {
    interact.seeOutcome(outcome);
  });
 
});

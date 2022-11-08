//codeit 1 creator buyer bidder
'reach 0.1';

const Participant = {
  seePrice: Fun([],UInt), //UInt unsigned int
  getDescription: Fun([UInt], Bytes)
}

export const main = Reach.App(() => {
  const A = Participant('Creator', {
    // Creator interface here
  });
  const B = Participant('Bidder', {
    // Bidder interface here
  });
  
  const C = Participant('Buyer', {
    // Buyer interface here
  });
  init();
  B.only(()=>{
    const price = declasify(interact.seePrice())
  })
  B.publish(priceBidder);
  commit();
  // The second one to publish always attaches
  C.only(()=>{
    const decription = declasify(interact.getDescription())
  })
  C.publish(priceBuyer);
  commit();
  // write your program here
  exit();
});
// Automatically generated with Reach 0.1.12 (796d7fb3)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (796d7fb3)';
export const _backendVersion = 25;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Aleksa(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Aleksa expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Aleksa expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v346, v347], secs: v349, time: v348, didSend: v72, from: v345 } = txn1;
  ;
  const v358 = stdlib.safeAdd(v348, v347);
  stdlib.protect(ctc1, await interact.acceptwager(v346), {
    at: './index.rsh:94:25:application',
    fs: ['at ./index.rsh:93:15:application call to [unknown function] (defined at: ./index.rsh:93:18:function exp)'],
    msg: 'acceptwager',
    who: 'Aleksa'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v345, v346, v347, v358],
    evt_cnt: 0,
    funcNum: 1,
    lct: v348,
    onlyIf: true,
    out_tys: [],
    pay: [v346, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v364, time: v363, didSend: v81, from: v362 } = txn2;
      
      const v366 = stdlib.add(v346, v346);
      sim_r.txns.push({
        amt: v346,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v367 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v368 = v363;
      const v375 = v366;
      
      if (await (async () => {
        const v383 = stdlib.eq(v367, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v383;})()) {
        const v390 = stdlib.safeAdd(v368, v347);
        sim_r.isHalt = false;
        }
      else {
        const v508 = stdlib.eq(v367, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        const v511 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:156:12:decimal', stdlib.UInt_max, '2'), v346);
        const v513 = v508 ? v345 : v362;
        sim_r.txns.push({
          kind: 'from',
          to: v513,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v358],
    tys: [ctc3, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v345, v346, v347, v358],
      evt_cnt: 0,
      funcNum: 2,
      lct: v348,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v526, time: v525, didSend: v284, from: v524 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v345,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v526, time: v525, didSend: v284, from: v524 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:80:29:application',
      fs: ['at ./index.rsh:79:9:application call to [unknown function] (defined at: ./index.rsh:79:33:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:78:28:function exp)', 'at ./index.rsh:98:49:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Aleksa'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v364, time: v363, didSend: v81, from: v362 } = txn2;
    const v366 = stdlib.add(v346, v346);
    ;
    let v367 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v368 = v363;
    let v375 = v366;
    
    let txn3 = txn2;
    while (await (async () => {
      const v383 = stdlib.eq(v367, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v383;})()) {
      const v390 = stdlib.safeAdd(v368, v347);
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 4,
        out_tys: [ctc2, ctc2],
        timeoutAt: ['time', v390],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v345, v346, v347, v362, v375, v390],
          evt_cnt: 0,
          funcNum: 5,
          lct: v368,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v492, time: v491, didSend: v237, from: v490 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v362,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v492, time: v491, didSend: v237, from: v490 } = txn5;
        ;
        const v493 = stdlib.addressEq(v362, v490);
        const v494 = stdlib.addressEq(v345, v490);
        const v495 = v493 ? true : v494;
        stdlib.assert(v495, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:119:52:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Aleksa'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:80:29:application',
          fs: ['at ./index.rsh:79:9:application call to [unknown function] (defined at: ./index.rsh:79:33:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:78:28:function exp)', 'at ./index.rsh:119:52:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Aleksa'
          });
        
        return;
        
        }
      else {
        const {data: [v403, v404], secs: v406, time: v405, didSend: v113, from: v402 } = txn4;
        ;
        const v407 = stdlib.addressEq(v345, v402);
        stdlib.assert(v407, {
          at: './index.rsh:118:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Aleksa'
          });
        const v414 = stdlib.safeAdd(v405, v347);
        const v418 = stdlib.protect(ctc0, await interact.getHand(), {
          at: './index.rsh:125:53:application',
          fs: ['at ./index.rsh:124:17:application call to [unknown function] (defined at: ./index.rsh:124:21:function exp)'],
          msg: 'getHand',
          who: 'Aleksa'
          });
        const v419 = stdlib.protect(ctc0, await interact.getResult(), {
          at: './index.rsh:126:57:application',
          fs: ['at ./index.rsh:124:17:application call to [unknown function] (defined at: ./index.rsh:124:21:function exp)'],
          msg: 'getResult',
          who: 'Aleksa'
          });
        
        const txn5 = await (ctc.sendrecv({
          args: [v345, v346, v347, v362, v375, v403, v404, v414, v418, v419],
          evt_cnt: 2,
          funcNum: 6,
          lct: v405,
          onlyIf: true,
          out_tys: [ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:128:13:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v421, v422], secs: v424, time: v423, didSend: v125, from: v420 } = txn5;
            
            ;
            const v432 = stdlib.safeAdd(v423, v347);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v414],
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v345, v346, v347, v362, v375, v403, v404, v414],
            evt_cnt: 0,
            funcNum: 7,
            lct: v405,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v474, time: v473, didSend: v203, from: v472 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v345,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v474, time: v473, didSend: v203, from: v472 } = txn6;
          ;
          const v475 = stdlib.addressEq(v362, v472);
          const v476 = stdlib.addressEq(v345, v472);
          const v477 = v475 ? true : v476;
          stdlib.assert(v477, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:129:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Aleksa'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:80:29:application',
            fs: ['at ./index.rsh:79:9:application call to [unknown function] (defined at: ./index.rsh:79:33:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:78:28:function exp)', 'at ./index.rsh:129:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Aleksa'
            });
          
          return;
          
          }
        else {
          const {data: [v421, v422], secs: v424, time: v423, didSend: v125, from: v420 } = txn5;
          ;
          const v425 = stdlib.addressEq(v362, v420);
          stdlib.assert(v425, {
            at: './index.rsh:128:13:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Aleksa'
            });
          const v432 = stdlib.safeAdd(v423, v347);
          const txn6 = await (ctc.recv({
            didSend: false,
            evt_cnt: 4,
            funcNum: 8,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            timeoutAt: ['time', v432],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v345, v346, v347, v362, v375, v403, v404, v421, v422, v432],
              evt_cnt: 0,
              funcNum: 9,
              lct: v423,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v456, time: v455, didSend: v169, from: v454 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v345,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v456, time: v455, didSend: v169, from: v454 } = txn7;
            ;
            const v457 = stdlib.addressEq(v362, v454);
            const v458 = stdlib.addressEq(v345, v454);
            const v459 = v457 ? true : v458;
            stdlib.assert(v459, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:139:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Aleksa'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:80:29:application',
              fs: ['at ./index.rsh:79:9:application call to [unknown function] (defined at: ./index.rsh:79:33:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:78:28:function exp)', 'at ./index.rsh:139:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Aleksa'
              });
            
            return;
            
            }
          else {
            const {data: [v437, v438, v439, v440], secs: v442, time: v441, didSend: v137, from: v436 } = txn6;
            ;
            const v443 = stdlib.addressEq(v345, v436);
            stdlib.assert(v443, {
              at: './index.rsh:138:13:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Aleksa'
              });
            const v444 = stdlib.digest([ctc0, ctc0], [v438, v437]);
            const v445 = stdlib.digestEq(v403, v444);
            stdlib.assert(v445, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:141:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Aleksa'
              });
            const v446 = stdlib.digest([ctc0, ctc0], [v440, v439]);
            const v447 = stdlib.digestEq(v404, v446);
            stdlib.assert(v447, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:142:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Aleksa'
              });
            let v448;
            const v449 = stdlib.eq(v439, v422);
            if (v449) {
              v448 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              }
            else {
              const v450 = stdlib.safeAdd(v437, v421);
              const v451 = stdlib.eq(v450, v439);
              const v453 = stdlib.eq(v450, v422);
              const v541 = v453 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              const v542 = v451 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : v541;
              v448 = v542;
              }
            const cv367 = v448;
            const cv368 = v441;
            const cv375 = v375;
            
            v367 = cv367;
            v368 = cv368;
            v375 = cv375;
            
            txn3 = txn6;
            continue;}
          
          }
        
        }
      
      }
    const v508 = stdlib.eq(v367, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    const v511 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:156:12:decimal', stdlib.UInt_max, '2'), v346);
    const v513 = v508 ? v345 : v362;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v367), {
      at: './index.rsh:160:24:application',
      fs: ['at ./index.rsh:159:7:application call to [unknown function] (defined at: ./index.rsh:159:31:function exp)'],
      msg: 'seeOutcome',
      who: 'Aleksa'
      });
    
    return;
    }
  
  
  
  };
export async function Milica(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Milica expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Milica expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v341 = stdlib.protect(ctc0, interact.deadline, 'for Milica\'s interact field deadline');
  const v342 = stdlib.protect(ctc0, interact.wager, 'for Milica\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v342, v341],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:90:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v342, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v346, v347], secs: v349, time: v348, didSend: v72, from: v345 } = txn1;
      
      sim_r.txns.push({
        amt: v346,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v358 = stdlib.safeAdd(v348, v347);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v346, v347], secs: v349, time: v348, didSend: v72, from: v345 } = txn1;
  ;
  const v358 = stdlib.safeAdd(v348, v347);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v358],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v345, v346, v347, v358],
      evt_cnt: 0,
      funcNum: 2,
      lct: v348,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v526, time: v525, didSend: v284, from: v524 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v345,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v526, time: v525, didSend: v284, from: v524 } = txn3;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:80:29:application',
      fs: ['at ./index.rsh:79:9:application call to [unknown function] (defined at: ./index.rsh:79:33:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:78:28:function exp)', 'at ./index.rsh:98:49:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Milica'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v364, time: v363, didSend: v81, from: v362 } = txn2;
    const v366 = stdlib.add(v346, v346);
    ;
    let v367 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v368 = v363;
    let v375 = v366;
    
    let txn3 = txn2;
    while (await (async () => {
      const v383 = stdlib.eq(v367, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v383;})()) {
      const v390 = stdlib.safeAdd(v368, v347);
      const v394 = stdlib.protect(ctc0, await interact.getHand(), {
        at: './index.rsh:109:43:application',
        fs: ['at ./index.rsh:105:17:application call to [unknown function] (defined at: ./index.rsh:105:21:function exp)'],
        msg: 'getHand',
        who: 'Milica'
        });
      const v395 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:110:58:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:105:17:application call to [unknown function] (defined at: ./index.rsh:105:21:function exp)'],
        msg: 'random',
        who: 'Milica'
        });
      const v396 = stdlib.digest([ctc0, ctc0], [v395, v394]);
      const v398 = stdlib.protect(ctc0, await interact.getResult(), {
        at: './index.rsh:113:44:application',
        fs: ['at ./index.rsh:105:17:application call to [unknown function] (defined at: ./index.rsh:105:21:function exp)'],
        msg: 'getResult',
        who: 'Milica'
        });
      const v399 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:114:64:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:105:17:application call to [unknown function] (defined at: ./index.rsh:105:21:function exp)'],
        msg: 'random',
        who: 'Milica'
        });
      const v400 = stdlib.digest([ctc0, ctc0], [v399, v398]);
      
      const txn4 = await (ctc.sendrecv({
        args: [v345, v346, v347, v362, v375, v390, v396, v400],
        evt_cnt: 2,
        funcNum: 4,
        lct: v368,
        onlyIf: true,
        out_tys: [ctc1, ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:118:13:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v403, v404], secs: v406, time: v405, didSend: v113, from: v402 } = txn4;
          
          ;
          const v414 = stdlib.safeAdd(v405, v347);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v390],
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v345, v346, v347, v362, v375, v390],
          evt_cnt: 0,
          funcNum: 5,
          lct: v368,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v492, time: v491, didSend: v237, from: v490 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v362,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v492, time: v491, didSend: v237, from: v490 } = txn5;
        ;
        const v493 = stdlib.addressEq(v362, v490);
        const v494 = stdlib.addressEq(v345, v490);
        const v495 = v493 ? true : v494;
        stdlib.assert(v495, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:119:52:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Milica'
          });
        ;
        stdlib.protect(ctc2, await interact.informTimeout(), {
          at: './index.rsh:80:29:application',
          fs: ['at ./index.rsh:79:9:application call to [unknown function] (defined at: ./index.rsh:79:33:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:78:28:function exp)', 'at ./index.rsh:119:52:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Milica'
          });
        
        return;
        
        }
      else {
        const {data: [v403, v404], secs: v406, time: v405, didSend: v113, from: v402 } = txn4;
        ;
        const v407 = stdlib.addressEq(v345, v402);
        stdlib.assert(v407, {
          at: './index.rsh:118:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Milica'
          });
        const v414 = stdlib.safeAdd(v405, v347);
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 6,
          out_tys: [ctc0, ctc0],
          timeoutAt: ['time', v414],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v345, v346, v347, v362, v375, v403, v404, v414],
            evt_cnt: 0,
            funcNum: 7,
            lct: v405,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v474, time: v473, didSend: v203, from: v472 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v345,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v474, time: v473, didSend: v203, from: v472 } = txn6;
          ;
          const v475 = stdlib.addressEq(v362, v472);
          const v476 = stdlib.addressEq(v345, v472);
          const v477 = v475 ? true : v476;
          stdlib.assert(v477, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:129:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Milica'
            });
          ;
          stdlib.protect(ctc2, await interact.informTimeout(), {
            at: './index.rsh:80:29:application',
            fs: ['at ./index.rsh:79:9:application call to [unknown function] (defined at: ./index.rsh:79:33:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:78:28:function exp)', 'at ./index.rsh:129:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Milica'
            });
          
          return;
          
          }
        else {
          const {data: [v421, v422], secs: v424, time: v423, didSend: v125, from: v420 } = txn5;
          ;
          const v425 = stdlib.addressEq(v362, v420);
          stdlib.assert(v425, {
            at: './index.rsh:128:13:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Milica'
            });
          const v432 = stdlib.safeAdd(v423, v347);
          const txn6 = await (ctc.sendrecv({
            args: [v345, v346, v347, v362, v375, v403, v404, v421, v422, v432, v394, v395, v398, v399],
            evt_cnt: 4,
            funcNum: 8,
            lct: v423,
            onlyIf: true,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:138:13:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v437, v438, v439, v440], secs: v442, time: v441, didSend: v137, from: v436 } = txn6;
              
              ;
              let v448;
              const v449 = stdlib.eq(v439, v422);
              if (v449) {
                v448 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                }
              else {
                const v450 = stdlib.safeAdd(v437, v421);
                const v451 = stdlib.eq(v450, v439);
                const v453 = stdlib.eq(v450, v422);
                const v541 = v453 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                const v542 = v451 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : v541;
                v448 = v542;
                }
              const cv367 = v448;
              const cv368 = v441;
              const cv375 = v375;
              
              await (async () => {
                const v367 = cv367;
                const v368 = cv368;
                const v375 = cv375;
                
                if (await (async () => {
                  const v383 = stdlib.eq(v367, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                  
                  return v383;})()) {
                  const v390 = stdlib.safeAdd(v368, v347);
                  sim_r.isHalt = false;
                  }
                else {
                  const v508 = stdlib.eq(v367, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
                  const v511 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:156:12:decimal', stdlib.UInt_max, '2'), v346);
                  const v513 = v508 ? v345 : v362;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v513,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v432],
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v345, v346, v347, v362, v375, v403, v404, v421, v422, v432],
              evt_cnt: 0,
              funcNum: 9,
              lct: v423,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v456, time: v455, didSend: v169, from: v454 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v345,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v456, time: v455, didSend: v169, from: v454 } = txn7;
            ;
            const v457 = stdlib.addressEq(v362, v454);
            const v458 = stdlib.addressEq(v345, v454);
            const v459 = v457 ? true : v458;
            stdlib.assert(v459, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:139:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Milica'
              });
            ;
            stdlib.protect(ctc2, await interact.informTimeout(), {
              at: './index.rsh:80:29:application',
              fs: ['at ./index.rsh:79:9:application call to [unknown function] (defined at: ./index.rsh:79:33:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:78:28:function exp)', 'at ./index.rsh:139:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Milica'
              });
            
            return;
            
            }
          else {
            const {data: [v437, v438, v439, v440], secs: v442, time: v441, didSend: v137, from: v436 } = txn6;
            ;
            const v443 = stdlib.addressEq(v345, v436);
            stdlib.assert(v443, {
              at: './index.rsh:138:13:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Milica'
              });
            const v444 = stdlib.digest([ctc0, ctc0], [v438, v437]);
            const v445 = stdlib.digestEq(v403, v444);
            stdlib.assert(v445, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:141:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Milica'
              });
            const v446 = stdlib.digest([ctc0, ctc0], [v440, v439]);
            const v447 = stdlib.digestEq(v404, v446);
            stdlib.assert(v447, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:142:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Milica'
              });
            let v448;
            const v449 = stdlib.eq(v439, v422);
            if (v449) {
              v448 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              }
            else {
              const v450 = stdlib.safeAdd(v437, v421);
              const v451 = stdlib.eq(v450, v439);
              const v453 = stdlib.eq(v450, v422);
              const v541 = v453 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              const v542 = v451 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : v541;
              v448 = v542;
              }
            const cv367 = v448;
            const cv368 = v441;
            const cv375 = v375;
            
            v367 = cv367;
            v368 = cv368;
            v375 = cv375;
            
            txn3 = txn6;
            continue;}
          
          }
        
        }
      
      }
    const v508 = stdlib.eq(v367, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    const v511 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:156:12:decimal', stdlib.UInt_max, '2'), v346);
    const v513 = v508 ? v345 : v362;
    ;
    stdlib.protect(ctc2, await interact.seeOutcome(v367), {
      at: './index.rsh:160:24:application',
      fs: ['at ./index.rsh:159:7:application call to [unknown function] (defined at: ./index.rsh:159:31:function exp)'],
      msg: 'seeOutcome',
      who: 'Milica'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAOAAFQCAUJIAcCKJgBqAFYMCYDAQABAQAiNQAxGEEE/CpkSSJbNQElWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0khBAxAAolJIQcMQAF9SSUMQAEkSSEFDEAAViEFEkQhBTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABKIFZo6wMgY0AyELWw9ENANXMCAxABI0/zEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgQUSCEFNAESRDQESSISTDQCEhFEKGQpZFBJNQNJVwAgNf+BoAFbNf5JNQVJSiJbNf0lWzX8gRBbNfuBGFs1+oAEf6I7UjT9FlA0/BZQNPsWUDT6FlCwMgY0AyELWwxENP8xABJENANXWCA0/BY0/RZQARJENANXeCA0+hY0+xZQARJENPs0/hJBAAYjNflCABw0/TQDIQpbCDX4IyI0+DT+Ek0hCDT4NPsSTTX5NP80AyEGWzQDIQlbNANXMCA0+TIGNAMkW0IC7EghBzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABOIbs6mwMgY0AyEKWw9ENANXMCAxABI0/zEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgL6SYEGDEAArkghBzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSVcAIDX/IQZbNf4hCVs1/VcwIDX8JFs1+1dYIDX6V3ggNflJNQVJIls1+CVbNfeABEohy/w0+BZQNPcWULAyBjQDIQpbDEQ0/DEAEkQyBjT9CDX2NP80/hZQNP0WUDT8UDT7FlA0+lA0+VA0+BZQNPcWUDT2FlAoSwFXAH9nKUsBV38xZ0ghBTUBMgY1AkICYUghBDQBEkQ0BEkiEkw0AhIRRChkSTUDVzAgNf+ABMyZklywMgY0AyEMWw9ENP8xABI0A1cAIDEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgH1SSEIDEAA4EmBBAxAAJhIIQQ0ARJENARJIhJMNAISEUQoZEk1A0lKSVcAIDX/IQZbNf4hCVs1/VcwIDX8JFs1+0k1BUlXACA1+lcgIDX5gARgXaQrNPpQNPlQsDIGNAMhDFsMRDT/MQASRDIGNP0INfg0/zT+FlA0/RZQNPxQNPsWUDT6UDT5UDT4FlAoSwFXAH9nKUsBV38hZ0ghBzUBMgY1AkIBayEIEkQjNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbAyBjQDIQ1bD0SxIrIBNAMhBluyCCOyEDQDVwAgsgezQgEOSSMMQABISCM0ARJENARJIhJMNAISEUQoZEk1AyEGWzX/gASai5F0sDIGNAMhDVsMRDT/iAFGNANXACA0/zQDIQlbMQAjMgY0/0kIQgBfSIGgjQaIASYiNAESRDQESSISTDQCEhFESTUFSSJbNf8lWzX+gASs0R/DNP8WUDT+FlCwNP+IAPYyBjT+CDX9MQA0/xZQNP4WUDT9FlAoSwFXADhnSCM1ATIGNQJCAH01/zX+Nf01/DX7Nfo1+TT9IxJBAC80/jT7CDX4NPk0+hZQNPsWUDT8UDT/FlA0+BZQKEsBVwBgZ0ghBDUBMgY1AkIAObEisgEhCDT6C7III7IQNPw0+TT9IhJNsgezQgAAMRkhBBJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIEDMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 176,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v346",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v347",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v346",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v347",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v403",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v404",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v421",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v422",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v437",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v438",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v439",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v440",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v403",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v404",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v421",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v422",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v437",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v438",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v439",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v440",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001dc138038062001dc18339810160408190526200002691620002a9565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f90341460076200014a565b620000b9438360200151602001516200017560201b60201c565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a090910190935280519192620001409260029290910190620001cc565b505050506200036d565b81620001715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000184838262000309565b9150811015620001c65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000168565b92915050565b828054620001da9062000330565b90600052602060002090601f016020900481019282620001fe576000855562000249565b82601f106200021957805160ff191683800117855562000249565b8280016001018555821562000249579182015b82811115620002495782518255916020019190600101906200022c565b50620002579291506200025b565b5090565b5b808211156200025757600081556001016200025c565b604080519081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002bd57600080fd5b620002c762000272565b835181526040601f1983011215620002de57600080fd5b620002e862000272565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200032b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034557607f821691505b602082108114156200036757634e487b7160e01b600052602260045260246000fd5b50919050565b611a44806200037d6000396000f3fe60806040526004361061009a5760003560e01c80638e314769116100615780638e31476914610115578063ab53f2c614610128578063bf2c5b241461014b578063cc923b291461015e578063de73699814610171578063ebdbfdcc1461018457005b80631e93b0f1146100a357806321642639146100c75780632c10a159146100da5780637eea518c146100ed578063832307571461010057005b366100a157005b005b3480156100af57600080fd5b506003545b6040519081526020015b60405180910390f35b6100a16100d536600461152f565b610197565b6100a16100e8366004611552565b6103fc565b6100a16100fb366004611552565b61058b565b34801561010c57600080fd5b506001546100b4565b6100a1610123366004611552565b610709565b34801561013457600080fd5b5061013d6108a4565b6040516100be929190611564565b6100a1610159366004611552565b610941565b6100a161016c3660046115c1565b610ad8565b6100a161017f366004611552565b610dbf565b6100a161019236600461152f565b610f1a565b6101a7600760005414601c61118b565b6101c1813515806101ba57506001548235145b601d61118b565b6000808055600280546101d3906115d3565b80601f01602080910402602001604051908101604052809291908181526020018280546101ff906115d3565b801561024c5780601f106102215761010080835404028352916020019161024c565b820191906000526020600020905b81548152906001019060200180831161022f57829003601f168201915b5050505050806020019051810190610264919061165c565b905061027c6040518060200160405280600081525090565b61028d8260e001514310601e61118b565b7fb2a03f9306ab783007397921312164b54fbeead1388356342ff3ef55c8552b3f33846040516102be929190611708565b60405180910390a16102d23415601a61118b565b60608201516102ed906001600160a01b03163314601b61118b565b6102fb4383604001516111b1565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c080860151908401528581013560e084015285820135610100840152835161012084015260096000554360015590516103d191839101611739565b604051602081830303815290604052600290805190602001906103f59291906113e8565b5050505050565b61040c600160005414600961118b565b6104268135158061041f57506001548235145b600a61118b565b600080805560028054610438906115d3565b80601f0160208091040260200160405190810160405280929190818152602001828054610464906115d3565b80156104b15780601f10610486576101008083540402835291602001916104b1565b820191906000526020600020905b81548152906001019060200180831161049457829003601f168201915b50505050508060200190518101906104c991906117c0565b90506104dc81606001514310600b61118b565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161050d929190611839565b60405180910390a161052681602001513414600861118b565b61052e61146c565b815181516001600160a01b039091169052602080830180518351830152604080850151845190910152825133606090910152818301805160019052514392019190915251800160208201516040015261058681611204565b505050565b61059b600160005414600d61118b565b6105b5813515806105ae57506001548235145b600e61118b565b6000808055600280546105c7906115d3565b80601f01602080910402602001604051908101604052809291908181526020018280546105f3906115d3565b80156106405780601f1061061557610100808354040283529160200191610640565b820191906000526020600020905b81548152906001019060200180831161062357829003601f168201915b505050505080602001905181019061065891906117c0565b905061066c8160600151431015600f61118b565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338360405161069d929190611839565b60405180910390a16106b13415600c61118b565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156106ee573d6000803e3d6000fd5b5060008080556001819055610705906002906114c5565b5050565b610719600560005414601761118b565b6107338135158061072c57506001548235145b601861118b565b600080805560028054610745906115d3565b80601f0160208091040260200160405190810160405280929190818152602001828054610771906115d3565b80156107be5780601f10610793576101008083540402835291602001916107be565b820191906000526020600020905b8154815290600101906020018083116107a157829003601f168201915b50505050508060200190518101906107d69190611876565b90506107ea8160a00151431015601961118b565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d338360405161081b929190611839565b60405180910390a161082f3415601561118b565b6060810151610863906001600160a01b031633146108595781516001600160a01b0316331461085c565b60015b601661118b565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f193505050501580156106ee573d6000803e3d6000fd5b6000606060005460028080546108b9906115d3565b80601f01602080910402602001604051908101604052809291908181526020018280546108e5906115d3565b80156109325780601f1061090757610100808354040283529160200191610932565b820191906000526020600020905b81548152906001019060200180831161091557829003601f168201915b50505050509050915091509091565b610951600760005414602161118b565b61096b8135158061096457506001548235145b602261118b565b60008080556002805461097d906115d3565b80601f01602080910402602001604051908101604052809291908181526020018280546109a9906115d3565b80156109f65780601f106109cb576101008083540402835291602001916109f6565b820191906000526020600020905b8154815290600101906020018083116109d957829003601f168201915b5050505050806020019051810190610a0e919061165c565b9050610a228160e00151431015602361118b565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610a53929190611839565b60405180910390a1610a673415601f61118b565b6060810151610a9b906001600160a01b03163314610a915781516001600160a01b03163314610a94565b60015b602061118b565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156106ee573d6000803e3d6000fd5b610ae8600960005414602861118b565b610b0281351580610afb57506001548235145b602961118b565b600080805560028054610b14906115d3565b80601f0160208091040260200160405190810160405280929190818152602001828054610b40906115d3565b8015610b8d5780601f10610b6257610100808354040283529160200191610b8d565b820191906000526020600020905b815481529060010190602001808311610b7057829003601f168201915b5050505050806020019051810190610ba5919061190a565b9050610bc4604051806040016040528060008152602001600081525090565b610bd68261012001514310602a61118b565b604080513381528435602080830191909152850135818301529084013560608083019190915284013560808083019190915284013560a08201527fc7e07aa759791812e0e03fb583c5fbed2f43e8adb4535b4faa695e77e84ea4fe9060c00160405180910390a1610c493415602461118b565b8151610c61906001600160a01b03163314602561118b565b60408051610cae91610c889190860135906020808801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a0015114602661118b565b604080516080850135602080830191909152606080870135838501528351808403850181529201909252805191012060c0830151610cee9114602761118b565b61010082015160608401351415610d085760018152610d52565b610d1d83602001600001358360e001516111b1565b60208201819052606084013514610d4c57816101000151816020015114610d45576001610d4f565b6000610d4f565b60025b81525b610d5a61146c565b825181516001600160a01b039182169052602080850151835182015260408086015184518201526060808701518551941693019290925283518184018051919091528051439201919091526080850151905190910152610db981611204565b50505050565b610dcf600960005414602d61118b565b610de981351580610de257506001548235145b602e61118b565b600080805560028054610dfb906115d3565b80601f0160208091040260200160405190810160405280929190818152602001828054610e27906115d3565b8015610e745780601f10610e4957610100808354040283529160200191610e74565b820191906000526020600020905b815481529060010190602001808311610e5757829003601f168201915b5050505050806020019051810190610e8c919061190a565b9050610ea1816101200151431015602f61118b565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd3383604051610ed2929190611839565b60405180910390a1610ee63415602b61118b565b6060810151610a9b906001600160a01b03163314610f105781516001600160a01b03163314610f13565b60015b602c61118b565b610f2a600560005414601261118b565b610f4481351580610f3d57506001548235145b601361118b565b600080805560028054610f56906115d3565b80601f0160208091040260200160405190810160405280929190818152602001828054610f82906115d3565b8015610fcf5780601f10610fa457610100808354040283529160200191610fcf565b820191906000526020600020905b815481529060010190602001808311610fb257829003601f168201915b5050505050806020019051810190610fe79190611876565b9050610fff6040518060200160405280600081525090565b6110108260a001514310601461118b565b7fa8815bd11c35a4f9905db53f65c359036789c5fd334917c999c5b2420107265a3384604051611041929190611708565b60405180910390a16110553415601061118b565b815161106d906001600160a01b03163314601161118b565b61107b4383604001516111b1565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b039081168252602080850151818401526040808601518185015260608087015190931692840192909252608080860151908401528581013560a08401528582013560c0840152835160e084015260076000554360015590516103d19183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b816107055760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000826111be83826119b5565b91508110156111fe5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016111a8565b92915050565b604080516020810190915260008152602082015151600114156113285761123b8260200151602001518360000151604001516111b1565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b01518401516080808b019182528b5160a0808d019182526005600055436001558751998a019a909a529651958801959095529251918601919091525190951690830152925191810191909152905160c082015260e00160405160208183030381529060405260029080519060200190610db99291906113e8565b6020820151511561133e57815160600151611342565b8151515b6001600160a01b03166108fc6113616002856000015160200151611389565b6040518115909202916000818181858888f193505050501580156106ee573d6000803e3d6000fd5b60008115806113ad5750828261139f81836119cd565b92506113ab90836119ec565b145b6111fe5760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b60448201526064016111a8565b8280546113f4906115d3565b90600052602060002090601f016020900481019282611416576000855561145c565b82601f1061142f57805160ff191683800117855561145c565b8280016001018555821561145c579182015b8281111561145c578251825591602001919060010190611441565b50611468929150611502565b5090565b6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290819081526020016114c060405180606001604052806000815260200160008152602001600081525090565b905290565b5080546114d1906115d3565b6000825580601f106114e1575050565b601f0160209004906000526020600020908101906114ff9190611502565b50565b5b808211156114685760008155600101611503565b60006060828403121561152957600080fd5b50919050565b60006060828403121561154157600080fd5b61154b8383611517565b9392505050565b60006040828403121561152957600080fd5b82815260006020604081840152835180604085015260005b818110156115985785810183015185820160600152820161157c565b818111156115aa576000606083870101525b50601f01601f191692909201606001949350505050565b600060a0828403121561152957600080fd5b600181811c908216806115e757607f821691505b6020821081141561152957634e487b7160e01b600052602260045260246000fd5b604051610140810167ffffffffffffffff8111828210171561163a57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b038116811461165757600080fd5b919050565b600061010080838503121561167057600080fd5b6040519081019067ffffffffffffffff821181831017156116a157634e487b7160e01b600052604160045260246000fd5b816040526116ae84611640565b815260208401516020820152604084015160408201526116d060608501611640565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b6001600160a01b03831681526080810161154b60208301848035825260208082013590830152604090810135910152565b81516001600160a01b0316815261014081016020830151602083015260408301516040830152606083015161177960608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525092915050565b6000608082840312156117d257600080fd5b6040516080810181811067ffffffffffffffff8211171561180357634e487b7160e01b600052604160045260246000fd5b60405261180f83611640565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461186757600080fd5b80604085015250509392505050565b600060c0828403121561188857600080fd5b60405160c0810181811067ffffffffffffffff821117156118b957634e487b7160e01b600052604160045260246000fd5b6040526118c583611640565b815260208301516020820152604083015160408201526118e760608401611640565b60608201526080830151608082015260a083015160a08201528091505092915050565b6000610140828403121561191d57600080fd5b611925611608565b61192e83611640565b8152602083015160208201526040830151604082015261195060608401611640565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152508091505092915050565b634e487b7160e01b600052601160045260246000fd5b600082198211156119c8576119c861199f565b500190565b60008160001904831182151516156119e7576119e761199f565b500290565b600082611a0957634e487b7160e01b600052601260045260246000fd5b50049056fea264697066735822122010f54b6e1ba03a627c18d71526f502743188eb46d70104eb18186819502264f264736f6c634300080c0033`,
  BytecodeLen: 7617,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:91:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:98:49:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:157:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:104:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:119:52:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:120:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:129:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:130:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:139:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Aleksa": Aleksa,
  "Milica": Milica
  };
export const _APIs = {
  };

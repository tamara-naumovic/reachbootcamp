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
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc2],
      2: [ctc0, ctc1, ctc1, ctc2, ctc0, ctc2, ctc2]
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
  const ctc0 = stdlib.T_Digest;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v190, v191, v192], secs: v194, time: v193, didSend: v82, from: v189 } = txn1;
  ;
  stdlib.protect(ctc2, await interact.acceptwager(v192), {
    at: './index.rsh:97:25:application',
    fs: ['at ./index.rsh:96:15:application call to [unknown function] (defined at: ./index.rsh:96:19:function exp)'],
    msg: 'acceptwager',
    who: 'Aleksa'
    });
  const v199 = stdlib.protect(ctc1, await interact.getHand(), {
    at: './index.rsh:98:51:application',
    fs: ['at ./index.rsh:96:15:application call to [unknown function] (defined at: ./index.rsh:96:19:function exp)'],
    msg: 'getHand',
    who: 'Aleksa'
    });
  const v200 = stdlib.protect(ctc1, await interact.getResult(), {
    at: './index.rsh:99:55:application',
    fs: ['at ./index.rsh:96:15:application call to [unknown function] (defined at: ./index.rsh:96:19:function exp)'],
    msg: 'getResult',
    who: 'Aleksa'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v189, v190, v191, v192, v199, v200],
    evt_cnt: 2,
    funcNum: 1,
    lct: v193,
    onlyIf: true,
    out_tys: [ctc1, ctc1],
    pay: [v192, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v202, v203], secs: v205, time: v204, didSend: v95, from: v201 } = txn2;
      
      sim_r.txns.push({
        amt: v192,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0, ctc0, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v202, v203], secs: v205, time: v204, didSend: v95, from: v201 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 2,
    out_tys: [ctc1, ctc1, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v211, v212, v213, v214], secs: v216, time: v215, didSend: v107, from: v210 } = txn3;
  ;
  const v217 = stdlib.addressEq(v189, v210);
  stdlib.assert(v217, {
    at: './index.rsh:111:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Aleksa'
    });
  const v218 = stdlib.digest([ctc1, ctc1], [v212, v211]);
  const v219 = stdlib.digestEq(v190, v218);
  stdlib.assert(v219, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:112:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Aleksa'
    });
  const v220 = stdlib.digest([ctc1, ctc1], [v214, v213]);
  const v221 = stdlib.digestEq(v191, v220);
  stdlib.assert(v221, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:113:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Aleksa'
    });
  let v222;
  const v223 = stdlib.eq(v213, v203);
  if (v223) {
    v222 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    }
  else {
    const v224 = stdlib.safeAdd(v211, v202);
    const v225 = stdlib.eq(v224, v213);
    const v227 = stdlib.eq(v224, v203);
    const v255 = v227 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    const v256 = v225 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : v255;
    v222 = v256;
    }
  const v228 = stdlib.eq(v222, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
  const v229 = stdlib.eq(v222, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
  const v230 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
  const v231 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
  const v232 = v229 ? v230 : v231;
  const v233 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v234 = v228 ? v233 : v232;
  const v235 = v234[stdlib.checkedBigNumberify('./index.rsh:117:9:array', stdlib.UInt_max, '0')];
  const v236 = v234[stdlib.checkedBigNumberify('./index.rsh:117:9:array', stdlib.UInt_max, '1')];
  const v237 = stdlib.safeMul(v235, v192);
  ;
  const v242 = stdlib.safeMul(v236, v192);
  ;
  stdlib.protect(ctc2, await interact.seeOutcome(v222), {
    at: './index.rsh:127:24:application',
    fs: ['at ./index.rsh:126:7:application call to [unknown function] (defined at: ./index.rsh:126:31:function exp)'],
    msg: 'seeOutcome',
    who: 'Aleksa'
    });
  
  return;
  
  
  
  
  
  
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
  
  
  const v178 = stdlib.protect(ctc0, interact.wager, 'for Milica\'s interact field wager');
  
  const v181 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:81:41:application',
    fs: ['at ./index.rsh:76:15:application call to [unknown function] (defined at: ./index.rsh:76:19:function exp)'],
    msg: 'getHand',
    who: 'Milica'
    });
  const v182 = stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:82:56:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:76:15:application call to [unknown function] (defined at: ./index.rsh:76:19:function exp)'],
    msg: 'random',
    who: 'Milica'
    });
  const v183 = stdlib.digest([ctc0, ctc0], [v182, v181]);
  const v185 = stdlib.protect(ctc0, await interact.getResult(), {
    at: './index.rsh:85:42:application',
    fs: ['at ./index.rsh:76:15:application call to [unknown function] (defined at: ./index.rsh:76:19:function exp)'],
    msg: 'getResult',
    who: 'Milica'
    });
  const v186 = stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:86:62:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:76:15:application call to [unknown function] (defined at: ./index.rsh:76:19:function exp)'],
    msg: 'random',
    who: 'Milica'
    });
  const v187 = stdlib.digest([ctc0, ctc0], [v186, v185]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v183, v187, v178],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:90:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc1, ctc0],
    pay: [v178, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v190, v191, v192], secs: v194, time: v193, didSend: v82, from: v189 } = txn1;
      
      sim_r.txns.push({
        amt: v192,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v190, v191, v192], secs: v194, time: v193, didSend: v82, from: v189 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v202, v203], secs: v205, time: v204, didSend: v95, from: v201 } = txn2;
  ;
  const txn3 = await (ctc.sendrecv({
    args: [v189, v190, v191, v192, v201, v202, v203, v181, v182, v185, v186],
    evt_cnt: 4,
    funcNum: 2,
    lct: v204,
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:111:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v211, v212, v213, v214], secs: v216, time: v215, didSend: v107, from: v210 } = txn3;
      
      ;
      let v222;
      const v223 = stdlib.eq(v213, v203);
      if (v223) {
        v222 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        }
      else {
        const v224 = stdlib.safeAdd(v211, v202);
        const v225 = stdlib.eq(v224, v213);
        const v227 = stdlib.eq(v224, v203);
        const v255 = v227 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        const v256 = v225 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : v255;
        v222 = v256;
        }
      const v228 = stdlib.eq(v222, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
      const v229 = stdlib.eq(v222, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      const v230 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
      const v231 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      const v232 = v229 ? v230 : v231;
      const v233 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v234 = v228 ? v233 : v232;
      const v235 = v234[stdlib.checkedBigNumberify('./index.rsh:117:9:array', stdlib.UInt_max, '0')];
      const v236 = v234[stdlib.checkedBigNumberify('./index.rsh:117:9:array', stdlib.UInt_max, '1')];
      const v237 = stdlib.safeMul(v235, v192);
      sim_r.txns.push({
        kind: 'from',
        to: v189,
        tok: undefined /* Nothing */
        });
      const v242 = stdlib.safeMul(v236, v192);
      sim_r.txns.push({
        kind: 'from',
        to: v201,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc1, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v211, v212, v213, v214], secs: v216, time: v215, didSend: v107, from: v210 } = txn3;
  ;
  const v217 = stdlib.addressEq(v189, v210);
  stdlib.assert(v217, {
    at: './index.rsh:111:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Milica'
    });
  const v218 = stdlib.digest([ctc0, ctc0], [v212, v211]);
  const v219 = stdlib.digestEq(v190, v218);
  stdlib.assert(v219, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:112:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Milica'
    });
  const v220 = stdlib.digest([ctc0, ctc0], [v214, v213]);
  const v221 = stdlib.digestEq(v191, v220);
  stdlib.assert(v221, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:113:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Milica'
    });
  let v222;
  const v223 = stdlib.eq(v213, v203);
  if (v223) {
    v222 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    }
  else {
    const v224 = stdlib.safeAdd(v211, v202);
    const v225 = stdlib.eq(v224, v213);
    const v227 = stdlib.eq(v224, v203);
    const v255 = v227 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    const v256 = v225 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : v255;
    v222 = v256;
    }
  const v228 = stdlib.eq(v222, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
  const v229 = stdlib.eq(v222, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
  const v230 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
  const v231 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
  const v232 = v229 ? v230 : v231;
  const v233 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v234 = v228 ? v233 : v232;
  const v235 = v234[stdlib.checkedBigNumberify('./index.rsh:117:9:array', stdlib.UInt_max, '0')];
  const v236 = v234[stdlib.checkedBigNumberify('./index.rsh:117:9:array', stdlib.UInt_max, '1')];
  const v237 = stdlib.safeMul(v235, v192);
  ;
  const v242 = stdlib.safeMul(v236, v192);
  ;
  stdlib.protect(ctc2, await interact.seeOutcome(v222), {
    at: './index.rsh:127:24:application',
    fs: ['at ./index.rsh:126:7:application call to [unknown function] (defined at: ./index.rsh:126:31:function exp)'],
    msg: 'seeOutcome',
    who: 'Milica'
    });
  
  return;
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAFAAECCGAmAwEAAAEBIjUAMRhBAnopZEkiWzUBJVs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAAZ1JJAxAARskEkQkNAESRDQESSISTDQCEhFEKGQqZFBJNQNJSVcAIDX/IQRbNf6BkAFbNf1JNQVJSiJbNfwlWzX7gRBbNfqBGFs1+YAEuefdADT8FlA0+xZQNPoWUDT5FlCwNP8xABJENANXICA0+xY0/BZQARJENANXQCA0+RY0+hZQARJENPo0/RJBAAYjNfhCABw0/DQDgYgBWwg19yMiNPc0/RJNJDT3NPoSTTX4gBAAAAAAAAAAAQAAAAAAAAABgBAAAAAAAAAAAAAAAAAAAAACNPgiEk2AEAAAAAAAAAACAAAAAAAAAAA0+CQSTTX3sSKyATT3Ils0/guyCCOyEDT/sgezsSKyATT3JVs0/guyCCOyEDQDV2ggsgezQgDcSCM0ARJENARJIhJMNAISEUQoZEk1A0lKVwAgNf9XICA1/ldAIDX9IQRbNfxJNQVJIls1+yVbNfqABMe2CtU0+xZQNPoWULA0/IgA/jT/NP5QNP1QNPwWUDEAUDT7FlA0+hZQKEsBVwB/ZypLAVd/GWdIJDUBMgY1AkIAfEiBoI0GiADGIjQBEkQ0BEkiEkw0AhIRREk1BUlJVwAgNf9XICA1/oFAWzX9gAT3cC5PNP9QNP5QNP0WULA0/YgAjDEANP9QNP5QNP0WUChLAVcAaGdIIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAzE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 152,
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
                "name": "v190",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v191",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v192",
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
                "name": "v190",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v191",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v192",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v202",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v203",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v211",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v212",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v213",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v214",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v202",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v203",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v211",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v212",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v213",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v214",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000f6238038062000f6283398101604081905262000026916200025f565b600080554360035560408051338152825160208083019190915280840151805183850152908101516060830152820151608082015290517fe875e0d974175d3036d72bf8b57156a0f70f8e5f5279acd8e22aae589e0748e69181900360a00190a16020810151604001516200009f903414600762000158565b620000d4604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b338082526020838101805151828501908152815183015160408087019182529251830151606080880191825260016000819055439055845180870197909752925186850152905191850191909152516080808501919091528151808503909101815260a0909301905281516200014f92600292019062000182565b50505062000333565b816200017e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200019090620002f6565b90600052602060002090601f016020900481019282620001b45760008555620001ff565b82601f10620001cf57805160ff1916838001178555620001ff565b82800160010185558215620001ff579182015b82811115620001ff578251825591602001919060010190620001e2565b506200020d92915062000211565b5090565b5b808211156200020d576000815560010162000212565b604051606081016001600160401b03811182821017156200025957634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200027357600080fd5b604080519081016001600160401b0381118282101715620002a457634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002be57600080fd5b620002c862000228565b9150602084015182526040840151602083015260608401516040830152816020820152809250505092915050565b600181811c908216806200030b57607f821691505b602082108114156200032d57634e487b7160e01b600052602260045260246000fd5b50919050565b610c1f80620003436000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f11461005457806342ae229d14610078578063832307571461008b5780639aad84dd146100a0578063ab53f2c6146100b357005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b61005261008636600461098b565b6100d6565b34801561009757600080fd5b50600154610065565b6100526100ae3660046109a3565b61032d565b3480156100bf57600080fd5b506100c861069b565b60405161006f9291906109b5565b6100e66001600054146009610738565b610100813515806100f957506001548235145b600a610738565b60008080556002805461011290610a12565b80601f016020809104026020016040519081016040528092919081815260200182805461013e90610a12565b801561018b5780601f106101605761010080835404028352916020019161018b565b820191906000526020600020905b81548152906001019060200180831161016e57829003601f168201915b50505050508060200190518101906101a39190610a63565b604080513381528435602080830191909152850135818301529084013560608201529091507f28b3acbd60e1c88f58f9afc3e0ee7cd853273307e47898c088b04f6be7fbcd939060800160405180910390a1610206816060015134146008610738565b6102586040518060e0016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b81516001600160a01b031681526020808301518183015260408084015181840152606080850151908401523360808401528482013560a08401528481013560c0840152600260005543600155516103039183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151908301526080808401519091169082015260a0828101519082015260c0918201519181019190915260e00190565b60405160208183030381529060405260029080519060200190610327929190610814565b50505050565b61033d600260005414600f610738565b6103578135158061035057506001548235145b6010610738565b60008080556002805461036990610a12565b80601f016020809104026020016040519081016040528092919081815260200182805461039590610a12565b80156103e25780601f106103b7576101008083540402835291602001916103e2565b820191906000526020600020905b8154815290600101906020018083116103c557829003601f168201915b50505050508060200190518101906103fa9190610adc565b9050610404610898565b604080513381528435602080830191909152850135818301529084013560608083019190915284013560808083019190915284013560a08201527f6f154fd5b715ecf41fa770da8f116d6724d4843cd02ab82a721b1ac3e36d0d109060c00160405180910390a16104773415600b610738565b815161048f906001600160a01b03163314600c610738565b604080516104dc916104b69190860135906020808801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c836020015114600d610738565b604080516080850135602080830191909152606080870135838501528351808403850181529201835281519101209083015161051a9114600e610738565b60c082015160608401351415610533576001815261057c565b61054883602001600001358360a00151610762565b60208201819052606084013514610576578160c0015181602001511461056f576001610579565b6000610579565b60025b81525b604081018051600090819052905160026020918201819052606084018051600190819052905183015260808401805182905251909101919091528151146105d8578051156105ce5780606001516105de565b80604001516105de565b80608001515b60a082018190528251905160608401516001600160a01b03909216916108fc91610607916107b5565b6040518115909202916000818181858888f1935050505015801561062f573d6000803e3d6000fd5b5081608001516001600160a01b03166108fc6106578360a001516020015185606001516107b5565b6040518115909202916000818181858888f1935050505015801561067f573d6000803e3d6000fd5b506000808055600181905561069690600290610939565b505050565b6000606060005460028080546106b090610a12565b80601f01602080910402602001604051908101604052809291908181526020018280546106dc90610a12565b80156107295780601f106106fe57610100808354040283529160200191610729565b820191906000526020600020905b81548152906001019060200180831161070c57829003601f168201915b50505050509050915091509091565b8161075e5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008261076f8382610b90565b91508110156107af5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610755565b92915050565b60008115806107d9575082826107cb8183610ba8565b92506107d79083610bc7565b145b6107af5760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401610755565b82805461082090610a12565b90600052602060002090601f0160209004810192826108425760008555610888565b82601f1061085b57805160ff1916838001178555610888565b82800160010185558215610888579182015b8281111561088857825182559160200191906001019061086d565b50610894929150610976565b5090565b6040518060c0016040528060008152602001600081526020016108ce604051806040016040528060008152602001600081525090565b81526020016108f0604051806040016040528060008152602001600081525090565b8152602001610912604051806040016040528060008152602001600081525090565b8152602001610934604051806040016040528060008152602001600081525090565b905290565b50805461094590610a12565b6000825580601f10610955575050565b601f0160209004906000526020600020908101906109739190610976565b50565b5b808211156108945760008155600101610977565b60006060828403121561099d57600080fd5b50919050565b600060a0828403121561099d57600080fd5b82815260006020604081840152835180604085015260005b818110156109e9578581018301518582016060015282016109cd565b818111156109fb576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610a2657607f821691505b6020821081141561099d57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610a5e57600080fd5b919050565b600060808284031215610a7557600080fd5b6040516080810181811067ffffffffffffffff82111715610aa657634e487b7160e01b600052604160045260246000fd5b604052610ab283610a47565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b600060e08284031215610aee57600080fd5b60405160e0810181811067ffffffffffffffff82111715610b1f57634e487b7160e01b600052604160045260246000fd5b604052610b2b83610a47565b8152602083015160208201526040830151604082015260608301516060820152610b5760808401610a47565b608082015260a083015160a082015260c083015160c08201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610ba357610ba3610b7a565b500190565b6000816000190483118215151615610bc257610bc2610b7a565b500290565b600082610be457634e487b7160e01b600052601260045260246000fd5b50049056fea264697066735822122071867e356f8480c003c7cb2528dcfafe775b7c9511a50b8795529f113660f3e664736f6c634300080c0033`,
  BytecodeLen: 3938,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:92:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:104:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:124:11:after expr stmt semicolon',
    fs: [],
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

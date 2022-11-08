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
      1: [ctc0, ctc1, ctc2],
      2: [ctc0, ctc1, ctc2, ctc0, ctc2]
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
export async function Petar(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Petar expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Petar expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Digest;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v145, v146], secs: v148, time: v147, didSend: v60, from: v144 } = txn1;
  ;
  stdlib.protect(ctc2, await interact.acceptwager(v146), {
    at: './index.rsh:58:25:application',
    fs: ['at ./index.rsh:57:9:application call to [unknown function] (defined at: ./index.rsh:57:12:function exp)'],
    msg: 'acceptwager',
    who: 'Petar'
    });
  const v153 = stdlib.protect(ctc1, await interact.getHand(), {
    at: './index.rsh:59:50:application',
    fs: ['at ./index.rsh:57:9:application call to [unknown function] (defined at: ./index.rsh:57:12:function exp)'],
    msg: 'getHand',
    who: 'Petar'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v144, v145, v146, v153],
    evt_cnt: 1,
    funcNum: 1,
    lct: v147,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [v146, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v155], secs: v157, time: v156, didSend: v71, from: v154 } = txn2;
      
      sim_r.txns.push({
        amt: v146,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v155], secs: v157, time: v156, didSend: v71, from: v154 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 2,
    out_tys: [ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v163, v164], secs: v166, time: v165, didSend: v81, from: v162 } = txn3;
  ;
  const v167 = stdlib.addressEq(v144, v162);
  stdlib.assert(v167, {
    at: './index.rsh:73:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Petar'
    });
  const v168 = stdlib.digest([ctc1, ctc1], [v163, v164]);
  const v169 = stdlib.digestEq(v145, v168);
  stdlib.assert(v169, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:74:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Petar'
    });
  const v170 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:8:17:decimal', stdlib.UInt_max, '4'), v155);
  const v171 = stdlib.safeAdd(v164, v170);
  const v172 = stdlib.safeMod(v171, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, '3'));
  const v173 = stdlib.eq(v172, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
  const v174 = stdlib.eq(v172, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
  const v175 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
  const v176 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
  const v177 = v174 ? v175 : v176;
  const v178 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v179 = v173 ? v178 : v177;
  const v180 = v179[stdlib.checkedBigNumberify('./index.rsh:79:9:array', stdlib.UInt_max, '0')];
  const v181 = v179[stdlib.checkedBigNumberify('./index.rsh:79:9:array', stdlib.UInt_max, '1')];
  const v182 = stdlib.safeMul(v180, v146);
  ;
  const v187 = stdlib.safeMul(v181, v146);
  ;
  stdlib.protect(ctc2, await interact.seeOutcome(v172), {
    at: './index.rsh:88:24:application',
    fs: ['at ./index.rsh:87:7:application call to [unknown function] (defined at: ./index.rsh:87:18:function exp)'],
    msg: 'seeOutcome',
    who: 'Petar'
    });
  
  return;
  
  
  
  
  
  
  };
export async function Tamara(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Tamara expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Tamara expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v137 = stdlib.protect(ctc0, interact.wager, 'for Tamara\'s interact field wager');
  
  const v140 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:45:41:application',
    fs: ['at ./index.rsh:42:9:application call to [unknown function] (defined at: ./index.rsh:42:12:function exp)'],
    msg: 'getHand',
    who: 'Tamara'
    });
  const v141 = stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:46:55:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:42:9:application call to [unknown function] (defined at: ./index.rsh:42:12:function exp)'],
    msg: 'random',
    who: 'Tamara'
    });
  const v142 = stdlib.digest([ctc0, ctc0], [v141, v140]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v142, v137],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:49:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc0],
    pay: [v137, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v145, v146], secs: v148, time: v147, didSend: v60, from: v144 } = txn1;
      
      sim_r.txns.push({
        amt: v146,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v145, v146], secs: v148, time: v147, didSend: v60, from: v144 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v155], secs: v157, time: v156, didSend: v71, from: v154 } = txn2;
  ;
  const txn3 = await (ctc.sendrecv({
    args: [v144, v145, v146, v154, v155, v141, v140],
    evt_cnt: 2,
    funcNum: 2,
    lct: v156,
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:73:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v163, v164], secs: v166, time: v165, didSend: v81, from: v162 } = txn3;
      
      ;
      const v170 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:8:17:decimal', stdlib.UInt_max, '4'), v155);
      const v171 = stdlib.safeAdd(v164, v170);
      const v172 = stdlib.safeMod(v171, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, '3'));
      const v173 = stdlib.eq(v172, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
      const v174 = stdlib.eq(v172, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      const v175 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
      const v176 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      const v177 = v174 ? v175 : v176;
      const v178 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v179 = v173 ? v178 : v177;
      const v180 = v179[stdlib.checkedBigNumberify('./index.rsh:79:9:array', stdlib.UInt_max, '0')];
      const v181 = v179[stdlib.checkedBigNumberify('./index.rsh:79:9:array', stdlib.UInt_max, '1')];
      const v182 = stdlib.safeMul(v180, v146);
      sim_r.txns.push({
        kind: 'from',
        to: v144,
        tok: undefined /* Nothing */
        });
      const v187 = stdlib.safeMul(v181, v146);
      sim_r.txns.push({
        kind: 'from',
        to: v154,
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
    tys: [ctc3, ctc1, ctc0, ctc3, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v163, v164], secs: v166, time: v165, didSend: v81, from: v162 } = txn3;
  ;
  const v167 = stdlib.addressEq(v144, v162);
  stdlib.assert(v167, {
    at: './index.rsh:73:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Tamara'
    });
  const v168 = stdlib.digest([ctc0, ctc0], [v163, v164]);
  const v169 = stdlib.digestEq(v145, v168);
  stdlib.assert(v169, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:74:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Tamara'
    });
  const v170 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:8:17:decimal', stdlib.UInt_max, '4'), v155);
  const v171 = stdlib.safeAdd(v164, v170);
  const v172 = stdlib.safeMod(v171, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, '3'));
  const v173 = stdlib.eq(v172, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
  const v174 = stdlib.eq(v172, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
  const v175 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
  const v176 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
  const v177 = v174 ? v175 : v176;
  const v178 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v179 = v173 ? v178 : v177;
  const v180 = v179[stdlib.checkedBigNumberify('./index.rsh:79:9:array', stdlib.UInt_max, '0')];
  const v181 = v179[stdlib.checkedBigNumberify('./index.rsh:79:9:array', stdlib.UInt_max, '1')];
  const v182 = stdlib.safeMul(v180, v146);
  ;
  const v187 = stdlib.safeMul(v181, v146);
  ;
  stdlib.protect(ctc2, await interact.seeOutcome(v172), {
    at: './index.rsh:88:24:application',
    fs: ['at ./index.rsh:87:7:application call to [unknown function] (defined at: ./index.rsh:87:18:function exp)'],
    msg: 'seeOutcome',
    who: 'Tamara'
    });
  
  return;
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAFAAECCEAmAgEAACI1ADEYQQILKWRJIls1ASVbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSMMQAE6SSQMQADVJBJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/IQRbNf5JNQVJIls1/SVbNfyABPMtCgw0/RZQNPwWULA0/zEAEkQ0A1cgIDT9FjT8FlABEkQ0/IEENAOBaFsJCIEDGDX7gBAAAAAAAAAAAQAAAAAAAAABgBAAAAAAAAAAAAAAAAAAAAACNPsiEk2AEAAAAAAAAAACAAAAAAAAAAA0+yQSTTX6sSKyATT6Ils0/guyCCOyEDT/sgezsSKyATT6JVs0/guyCCOyEDQDV0ggsgezQgCzSCM0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf9XICA1/iEEWzX9STUFFzX8gATVFRkUNPwWULA0/YgA4zT/NP5QNP0WUDEAUDT8FlAoSwFXAHBnSCQ1ATIGNQJCAHBIgaCNBogAuSI0ARJENARJIhJMNAISEURJNQVJVwAgNf+BIFs1/oAE2/BFDzT/UDT+FlCwNP6IAIgxADT/UDT+FlAoSwFXAEhnSCM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEJDE1EkQiMTYSRCIxNxJEIjUBIjUCQv+vNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 112,
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
                "name": "v145",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v146",
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
                "name": "v145",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v146",
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
                "name": "v155",
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
                "name": "v163",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v164",
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
                "name": "v155",
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
                "name": "v163",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v164",
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
  Bytecode: `0x608060405260405162000ede38038062000ede833981016040819052620000269162000237565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a1602080820151015162000094903414600762000130565b620000c2604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b33808252602083810180515182850190815290518201516040808601918252600160008190554390558051808501959095529151848301525160608085019190915281518085039091018152608090930190528151620001279260029201906200015a565b505050620002d4565b81620001565760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001689062000297565b90600052602060002090601f0160209004810192826200018c5760008555620001d7565b82601f10620001a757805160ff1916838001178555620001d7565b82800160010185558215620001d7579182015b82811115620001d7578251825591602001919060010190620001ba565b50620001e5929150620001e9565b5090565b5b80821115620001e55760008155600101620001ea565b604080519081016001600160401b03811182821017156200023157634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200024b57600080fd5b6200025562000200565b835181526040601f19830112156200026c57600080fd5b6200027662000200565b60208581015182526040909501518582015293810193909352509092915050565b600181811c90821680620002ac57607f821691505b60208210811415620002ce57634e487b7160e01b600052602260045260246000fd5b50919050565b610bfa80620002e46000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f1146100545780638323075714610078578063873779a11461008d5780639014596a146100a0578063ab53f2c6146100b357005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b34801561008457600080fd5b50600154610065565b61005261009b366004610951565b6100d6565b6100526100ae366004610969565b6102ef565b3480156100bf57600080fd5b506100c86105cb565b60405161006f92919061097b565b6100e66001600054146009610668565b610100813515806100f957506001548235145b600a610668565b600080805560028054610112906109d8565b80601f016020809104026020016040519081016040528092919081815260200182805461013e906109d8565b801561018b5780601f106101605761010080835404028352916020019161018b565b820191906000526020600020905b81548152906001019060200180831161016e57829003601f168201915b50505050508060200190518101906101a39190610a29565b6040805133815284356020808301919091528501358183015290519192507f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f7225919081900360600190a16101fd816040015134146008610668565b6102416040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b81516001600160a01b031681526020808301518183015260408084015181840152336060840152848201356080840152600260005543600155516102c59183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080918201519181019190915260a00190565b604051602081830303815290604052600290805190602001906102e99291906107e1565b50505050565b6102ff600260005414600e610668565b6103198135158061031257506001548235145b600f610668565b60008080556002805461032b906109d8565b80601f0160208091040260200160405190810160405280929190818152602001828054610357906109d8565b80156103a45780601f10610379576101008083540402835291602001916103a4565b820191906000526020600020905b81548152906001019060200180831161038757829003601f168201915b50505050508060200190518101906103bc9190610a98565b90506103c6610865565b604080513381528435602080830191909152850135818301529084013560608201527feade97c60783e4c8b7590ebdcad0dcf3d731471c98f3f06328d9701c9d0e19699060800160405180910390a16104213415600b610668565b8151610439906001600160a01b03163314600c610668565b604080516104859161045f91602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c836020015114600d610668565b6104ae6104a784602001602001356104a260048660800151610692565b6106e7565b6003610734565b8152602080820180516000908190529051600290830181905260408401805160019081905290518401526060840180518290525190920152815114610508578051156104fe57806040015161050e565b806020015161050e565b80606001515b608082018190528251905160408401516001600160a01b03909216916108fc9161053791610782565b6040518115909202916000818181858888f1935050505015801561055f573d6000803e3d6000fd5b5081606001516001600160a01b03166108fc6105878360800151602001518560400151610782565b6040518115909202916000818181858888f193505050501580156105af573d6000803e3d6000fd5b50600080805560018190556105c6906002906108ff565b505050565b6000606060005460028080546105e0906109d8565b80601f016020809104026020016040519081016040528092919081815260200182805461060c906109d8565b80156106595780601f1061062e57610100808354040283529160200191610659565b820191906000526020600020905b81548152906001019060200180831161063c57829003601f168201915b50505050509050915091509091565b8161068e5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008261069f8382610b38565b91508111156106e15760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b6044820152606401610685565b92915050565b6000826106f48382610b4f565b91508110156106e15760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610685565b6000816107715760405162461bcd60e51b815260206004820152600b60248201526a646976206279207a65726f60a81b6044820152606401610685565b61077b8284610b7d565b9392505050565b60008115806107a6575082826107988183610b91565b92506107a49083610bb0565b145b6106e15760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401610685565b8280546107ed906109d8565b90600052602060002090601f01602090048101928261080f5760008555610855565b82601f1061082857805160ff1916838001178555610855565b82800160010185558215610855579182015b8281111561085557825182559160200191906001019061083a565b5061086192915061093c565b5090565b6040518060a0016040528060008152602001610894604051806040016040528060008152602001600081525090565b81526020016108b6604051806040016040528060008152602001600081525090565b81526020016108d8604051806040016040528060008152602001600081525090565b81526020016108fa604051806040016040528060008152602001600081525090565b905290565b50805461090b906109d8565b6000825580601f1061091b575050565b601f016020900490600052602060002090810190610939919061093c565b50565b5b80821115610861576000815560010161093d565b60006040828403121561096357600080fd5b50919050565b60006060828403121561096357600080fd5b82815260006020604081840152835180604085015260005b818110156109af57858101830151858201606001528201610993565b818111156109c1576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806109ec57607f821691505b6020821081141561096357634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610a2457600080fd5b919050565b600060608284031215610a3b57600080fd5b6040516060810181811067ffffffffffffffff82111715610a6c57634e487b7160e01b600052604160045260246000fd5b604052610a7883610a0d565b815260208301516020820152604083015160408201528091505092915050565b600060a08284031215610aaa57600080fd5b60405160a0810181811067ffffffffffffffff82111715610adb57634e487b7160e01b600052604160045260246000fd5b604052610ae783610a0d565b81526020830151602082015260408301516040820152610b0960608401610a0d565b6060820152608083015160808201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b600082821015610b4a57610b4a610b22565b500390565b60008219821115610b6257610b62610b22565b500190565b634e487b7160e01b600052601260045260246000fd5b600082610b8c57610b8c610b67565b500690565b6000816000190483118215151615610bab57610bab610b22565b500290565b600082610bbf57610bbf610b67565b50049056fea2646970667358221220ad8c6a535a3df979ea8cb182b8e5aacf8000be9cdf39f81e1b52dcdd2671b5d464736f6c634300080c0033`,
  BytecodeLen: 3806,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:51:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:66:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:85:13:after expr stmt semicolon',
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
  "Petar": Petar,
  "Tamara": Tamara
  };
export const _APIs = {
  };

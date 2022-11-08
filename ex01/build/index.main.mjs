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
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1]
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
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v86, v87], secs: v89, time: v88, didSend: v31, from: v85 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptwager(v87), {
    at: './index.rsh:32:25:application',
    fs: ['at ./index.rsh:31:9:application call to [unknown function] (defined at: ./index.rsh:31:12:function exp)'],
    msg: 'acceptwager',
    who: 'Petar'
    });
  const v94 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:33:50:application',
    fs: ['at ./index.rsh:31:9:application call to [unknown function] (defined at: ./index.rsh:31:12:function exp)'],
    msg: 'getHand',
    who: 'Petar'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v85, v86, v87, v94],
    evt_cnt: 1,
    funcNum: 1,
    lct: v88,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v87, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v96], secs: v98, time: v97, didSend: v42, from: v95 } = txn2;
      
      sim_r.txns.push({
        amt: v87,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v101 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:37:32:decimal', stdlib.UInt_max, '4'), v96);
      const v102 = stdlib.safeAdd(v86, v101);
      const v103 = stdlib.safeMod(v102, stdlib.checkedBigNumberify('./index.rsh:37:46:decimal', stdlib.UInt_max, '3'));
      const v104 = stdlib.eq(v103, stdlib.checkedBigNumberify('./index.rsh:39:16:decimal', stdlib.UInt_max, '2'));
      const v106 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
      const v107 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      const v108 = v104 ? v106 : v107;
      const v109 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v110 = v104 ? v109 : v108;
      const v111 = v110[stdlib.checkedBigNumberify('./index.rsh:38:9:array', stdlib.UInt_max, '0')];
      const v112 = v110[stdlib.checkedBigNumberify('./index.rsh:38:9:array', stdlib.UInt_max, '1')];
      const v113 = stdlib.safeMul(v111, v87);
      sim_r.txns.push({
        kind: 'from',
        to: v85,
        tok: undefined /* Nothing */
        });
      const v118 = stdlib.safeMul(v112, v87);
      sim_r.txns.push({
        kind: 'from',
        to: v95,
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
    tys: [ctc2, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v96], secs: v98, time: v97, didSend: v42, from: v95 } = txn2;
  ;
  const v101 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:37:32:decimal', stdlib.UInt_max, '4'), v96);
  const v102 = stdlib.safeAdd(v86, v101);
  const v103 = stdlib.safeMod(v102, stdlib.checkedBigNumberify('./index.rsh:37:46:decimal', stdlib.UInt_max, '3'));
  const v104 = stdlib.eq(v103, stdlib.checkedBigNumberify('./index.rsh:39:16:decimal', stdlib.UInt_max, '2'));
  const v106 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
  const v107 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
  const v108 = v104 ? v106 : v107;
  const v109 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v110 = v104 ? v109 : v108;
  const v111 = v110[stdlib.checkedBigNumberify('./index.rsh:38:9:array', stdlib.UInt_max, '0')];
  const v112 = v110[stdlib.checkedBigNumberify('./index.rsh:38:9:array', stdlib.UInt_max, '1')];
  const v113 = stdlib.safeMul(v111, v87);
  ;
  const v118 = stdlib.safeMul(v112, v87);
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(v103), {
    at: './index.rsh:47:24:application',
    fs: ['at ./index.rsh:46:7:application call to [unknown function] (defined at: ./index.rsh:46:18:function exp)'],
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
  const ctc1 = stdlib.T_Null;
  
  
  const v81 = stdlib.protect(ctc0, interact.wager, 'for Tamara\'s interact field wager');
  
  const v84 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:24:51:application',
    fs: ['at ./index.rsh:22:9:application call to [unknown function] (defined at: ./index.rsh:22:12:function exp)'],
    msg: 'getHand',
    who: 'Tamara'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v84, v81],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:26:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v81, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v86, v87], secs: v89, time: v88, didSend: v31, from: v85 } = txn1;
      
      sim_r.txns.push({
        amt: v87,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v86, v87], secs: v89, time: v88, didSend: v31, from: v85 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v96], secs: v98, time: v97, didSend: v42, from: v95 } = txn2;
  ;
  const v101 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:37:32:decimal', stdlib.UInt_max, '4'), v96);
  const v102 = stdlib.safeAdd(v86, v101);
  const v103 = stdlib.safeMod(v102, stdlib.checkedBigNumberify('./index.rsh:37:46:decimal', stdlib.UInt_max, '3'));
  const v104 = stdlib.eq(v103, stdlib.checkedBigNumberify('./index.rsh:39:16:decimal', stdlib.UInt_max, '2'));
  const v106 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
  const v107 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
  const v108 = v104 ? v106 : v107;
  const v109 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v110 = v104 ? v109 : v108;
  const v111 = v110[stdlib.checkedBigNumberify('./index.rsh:38:9:array', stdlib.UInt_max, '0')];
  const v112 = v110[stdlib.checkedBigNumberify('./index.rsh:38:9:array', stdlib.UInt_max, '1')];
  const v113 = stdlib.safeMul(v111, v87);
  ;
  const v118 = stdlib.safeMul(v112, v87);
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(v103), {
    at: './index.rsh:47:24:application',
    fs: ['at ./index.rsh:46:7:application call to [unknown function] (defined at: ./index.rsh:46:18:function exp)'],
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
  appApproval: `ByAEAAEIAiYCAAEAIjUAMRhBAYQoZEkiWzUBJFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAALMjEkQjNAESRDQESSISTDQCEhFEKWRJNQOBKFs1/0k1BRc1/oAE1RUZFDT+FlCwNP+IAUE0A4EgW4EENP4JCIEDGCUSNf2AEAAAAAAAAAABAAAAAAAAAAGAEAAAAAAAAAAAAAAAAAAAAAI0/U2AEAAAAAAAAAACAAAAAAAAAAA0/U01/LEisgE0/CJbNP8LsggjshA0A1cAILIHs7EisgE0/CRbNP8LsggjshAxALIHs0IAVEiBoI0GiAC5IjQBEkQ0BEkiEkw0AhIRREk1BUkiWzX/JFs1/oAErNEfwzT/FlA0/hZQsDT+iACJMQA0/xZQNP4WUClLAVcAMGdIIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCg0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQlMTUSRCIxNhJEIjE3EkQiNQEiNQJC/680AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 48,
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
                "name": "v86",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v87",
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
                "name": "v86",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v87",
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
                "name": "v96",
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
                "name": "v96",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000b1338038062000b13833981016040819052620000269162000237565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a1602080820151015162000094903414600762000130565b620000c2604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b33808252602083810180515182850190815290518201516040808601918252600160008190554390558051808501959095529151848301525160608085019190915281518085039091018152608090930190528151620001279260029201906200015a565b505050620002d4565b81620001565760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001689062000297565b90600052602060002090601f0160209004810192826200018c5760008555620001d7565b82601f10620001a757805160ff1916838001178555620001d7565b82800160010185558215620001d7579182015b82811115620001d7578251825591602001919060010190620001ba565b50620001e5929150620001e9565b5090565b5b80821115620001e55760008155600101620001ea565b604080519081016001600160401b03811182821017156200023157634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200024b57600080fd5b6200025562000200565b835181526040601f19830112156200026c57600080fd5b6200027662000200565b60208581015182526040909501518582015293810193909352509092915050565b600181811c90821680620002ac57607f821691505b60208210811415620002ce57634e487b7160e01b600052602260045260246000fd5b50919050565b61082f80620002e46000396000f3fe6080604052600436106100405760003560e01c80631e93b0f114610049578063832307571461006d578063873779a114610082578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b34801561007957600080fd5b5060015461005a565b610047610090366004610631565b6100b8565b3480156100a157600080fd5b506100aa610329565b604051610064929190610649565b6100c860016000541460096103c6565b6100e2813515806100db57506001548235145b600a6103c6565b6000808055600280546100f4906106a6565b80601f0160208091040260200160405190810160405280929190818152602001828054610120906106a6565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b505050505080602001905181019061018591906106db565b905061018f61053f565b6040805133815284356020808301919091528501358183015290517f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f72259181900360600190a16101e58260400151341460086103c6565b60026102106102098460200151610204600488602001600001356103f0565b610445565b6003610492565b14815260208082018051600090819052905160029083018190526040840180516001908190529051840152606084018051919091525190910152805161026a578051610260578060400151610270565b8060200151610270565b80606001515b608082018190528251905160408401516001600160a01b03909216916108fc91610299916104e0565b6040518115909202916000818181858888f193505050501580156102c1573d6000803e3d6000fd5b50336001600160a01b03166108fc6102e583608001516020015185604001516104e0565b6040518115909202916000818181858888f1935050505015801561030d573d6000803e3d6000fd5b5060008080556001819055610324906002906105db565b505050565b60006060600054600280805461033e906106a6565b80601f016020809104026020016040519081016040528092919081815260200182805461036a906106a6565b80156103b75780601f1061038c576101008083540402835291602001916103b7565b820191906000526020600020905b81548152906001019060200180831161039a57829003601f168201915b50505050509050915091509091565b816103ec5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b6000826103fd838261076d565b915081111561043f5760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b60448201526064016103e3565b92915050565b6000826104528382610784565b915081101561043f5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016103e3565b6000816104cf5760405162461bcd60e51b815260206004820152600b60248201526a646976206279207a65726f60a81b60448201526064016103e3565b6104d982846107b2565b9392505050565b6000811580610504575082826104f681836107c6565b925061050290836107e5565b145b61043f5760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b60448201526064016103e3565b6040518060a00160405280600015158152602001610570604051806040016040528060008152602001600081525090565b8152602001610592604051806040016040528060008152602001600081525090565b81526020016105b4604051806040016040528060008152602001600081525090565b81526020016105d6604051806040016040528060008152602001600081525090565b905290565b5080546105e7906106a6565b6000825580601f106105f7575050565b601f0160209004906000526020600020908101906106159190610618565b50565b5b8082111561062d5760008155600101610619565b5090565b60006040828403121561064357600080fd5b50919050565b82815260006020604081840152835180604085015260005b8181101561067d57858101830151858201606001528201610661565b8181111561068f576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806106ba57607f821691505b6020821081141561064357634e487b7160e01b600052602260045260246000fd5b6000606082840312156106ed57600080fd5b6040516060810181811067ffffffffffffffff8211171561071e57634e487b7160e01b600052604160045260246000fd5b60405282516001600160a01b038116811461073857600080fd5b8152602083810151908201526040928301519281019290925250919050565b634e487b7160e01b600052601160045260246000fd5b60008282101561077f5761077f610757565b500390565b6000821982111561079757610797610757565b500190565b634e487b7160e01b600052601260045260246000fd5b6000826107c1576107c161079c565b500690565b60008160001904831182151516156107e0576107e0610757565b500290565b6000826107f4576107f461079c565b50049056fea2646970667358221220c464205a5ea20f57c6f4205c6526fb50e92aea5e5d2e590d9cf296badab273cb64736f6c634300080c0033`,
  BytecodeLen: 2835,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:28:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:44:13:after expr stmt semicolon',
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

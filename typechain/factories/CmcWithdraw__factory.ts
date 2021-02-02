/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { CmcWithdraw } from "../CmcWithdraw";

export class CmcWithdraw__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<CmcWithdraw> {
    return super.deploy(overrides || {}) as Promise<CmcWithdraw>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CmcWithdraw {
    return super.attach(address) as CmcWithdraw;
  }
  connect(signer: Signer): CmcWithdraw__factory {
    return super.connect(signer) as CmcWithdraw__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CmcWithdraw {
    return new Contract(address, _abi, signerOrProvider) as CmcWithdraw;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "assetId",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "recipient",
        type: "address",
      },
    ],
    name: "exit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAlice",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBob",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "assetId",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "getExitableAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "assetId",
        type: "address",
      },
    ],
    name: "getTotalTransferred",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "channelAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "assetId",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "callTo",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct WithdrawData",
        name: "wd",
        type: "tuple",
      },
    ],
    name: "getWithdrawalTransactionRecord",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_alice",
        type: "address",
      },
      {
        internalType: "address",
        name: "_bob",
        type: "address",
      },
    ],
    name: "setup",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "channelAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "assetId",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "callTo",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct WithdrawData",
        name: "wd",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "aliceSignature",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "bobSignature",
        type: "bytes",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b5030606081901b60805261177d6100546000398061016152806101e55280610419528061052f52806106a6528061073a52806107c3528061085c525061177d6000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80638c048fc2116100665780638c048fc2146100f1578063cefa512214610111578063e985256914610131578063eeb30fea14610144578063f83d08ba1461014c57610093565b8063241686a0146100985780632c889aa1146100b65780632d34ba79146100cb5780635bc9d96d146100de575b600080fd5b6100a0610154565b6040516100ad9190611258565b60405180910390f35b6100c96100c436600461106e565b6101da565b005b6100c96100d9366004610f99565b61040e565b6100c96100ec366004610fd1565b610524565b6101046100ff36600461103b565b610699565b6040516100ad9190611285565b61012461011f366004610f7d565b61072d565b6040516100ad91906116f6565b61012461013f366004610f99565b6107b6565b6100a061084f565b6101246108cc565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156101a85760405162461bcd60e51b815260040161019f9061168a565b60405180910390fd5b6001600054146101ca5760405162461bcd60e51b815260040161019f9061158c565b506002546001600160a01b031690565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156102235760405162461bcd60e51b815260040161019f9061168a565b6001600054146102455760405162461bcd60e51b815260040161019f9061158c565b600260005584306102596020830183610f7d565b6001600160a01b03161461027f5760405162461bcd60e51b815260040161019f90611330565b600061028a876108d2565b90506102998187878787610902565b60008181526005602052604090205460ff16156102c85760405162461bcd60e51b815260040161019f906114e8565b6000818152600560209081526040808320805460ff19166001179055610300916102f6918b01908b01610f7d565b8960600135610a0c565b9050600081118061032a5750600061031e60c08a0160a08b01610f7d565b6001600160a01b031614155b6103465760405162461bcd60e51b815260040161019f90611367565b61036f61035960408a0160208b01610f7d565b61036960608b0160408c01610f7d565b83610a27565b600061038160c08a0160a08b01610f7d565b6001600160a01b0316146103ff5761039f60c0890160a08a01610f7d565b6001600160a01b031663f50cd32c89836040518363ffffffff1660e01b81526004016103cc9291906116d4565b600060405180830381600087803b1580156103e657600080fd5b505af11580156103fa573d6000803e3d6000fd5b505050505b50506001600055505050505050565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156104575760405162461bcd60e51b815260040161019f9061168a565b6001546001600160a01b0316156104805760405162461bcd60e51b815260040161019f9061165a565b6001600160a01b038216158015906104a057506001600160a01b03811615155b6104bc5760405162461bcd60e51b815260040161019f906114b1565b806001600160a01b0316826001600160a01b031614156104ee5760405162461bcd60e51b815260040161019f906113ca565b6104f6610a5d565b600180546001600160a01b039384166001600160a01b03199182161790915560028054929093169116179055565b306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016141561056d5760405162461bcd60e51b815260040161019f9061168a565b60016000541461058f5760405162461bcd60e51b815260040161019f9061158c565b6002600055336001600160a01b03831614806105bc5750806001600160a01b0316826001600160a01b0316145b6105d85760405162461bcd60e51b815260040161019f90611623565b6001600160a01b03808416600090815260046020908152604080832093861683529290529081205461060b908590610a0c565b90506000811161062d5760405162461bcd60e51b815260040161019f906115c3565b6001600160a01b0380851660009081526004602090815260408083209387168352929052205461065d9082610a64565b6001600160a01b0380861660009081526004602090815260408083209388168352929052205561068e848383610a27565b505060016000555050565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156106e45760405162461bcd60e51b815260040161019f9061168a565b6001600054146107065760405162461bcd60e51b815260040161019f9061158c565b60056000610713846108d2565b815260208101919091526040016000205460ff1692915050565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156107785760405162461bcd60e51b815260040161019f9061168a565b60016000541461079a5760405162461bcd60e51b815260040161019f9061158c565b506001600160a01b031660009081526003602052604090205490565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156108015760405162461bcd60e51b815260040161019f9061168a565b6001600054146108235760405162461bcd60e51b815260040161019f9061158c565b506001600160a01b03918216600090815260046020908152604080832093909416825291909152205490565b6000306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016141561089a5760405162461bcd60e51b815260040161019f9061168a565b6001600054146108bc5760405162461bcd60e51b815260040161019f9061158c565b506001546001600160a01b031690565b60005481565b6000816040516020016108e591906116c1565b604051602081830303815290604052805190602001209050919050565b60006001866040516020016109189291906112ae565b60405160208183030381529060405280519060200120905061097e85858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050600154859392506001600160a01b03169050610aa6565b61099a5760405162461bcd60e51b815260040161019f906115ec565b6109e883838080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050600254859392506001600160a01b03169050610aa6565b610a045760405162461bcd60e51b815260040161019f9061147a565b505050505050565b6000610a2082610a1b85610ace565b610b53565b9392505050565b610a318382610b69565b610a3c838383610b8b565b610a585760405162461bcd60e51b815260040161019f90611401565b505050565b6001600055565b6000610a2083836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610bbc565b6000816001600160a01b0316610abc8585610be8565b6001600160a01b031614949350505050565b6040516370a0823160e01b81526000906001600160a01b038316906370a0823190610afd903090600401611258565b60206040518083038186803b158015610b1557600080fd5b505afa158015610b29573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b4d91906110ff565b92915050565b6000818310610b625781610a20565b5090919050565b6001600160a01b03909116600090815260036020526040902080549091019055565b6000610b9684610c00565b610baa57610ba5848484610c0d565b610bb4565b610bb48383610c1a565b949350505050565b60008184841115610be05760405162461bcd60e51b815260040161019f91906112c6565b505050900390565b600080610bf484610c92565b9050610bb48184610ca5565b6001600160a01b03161590565b6000610bb4848484610dd3565b6000806060846001600160a01b031684604051610c3690611255565b60006040518083038185875af1925050503d8060008114610c73576040519150601f19603f3d011682016040523d82523d6000602084013e610c78565b606091505b5091509150610c878282610e1b565b506001949350505050565b6000816040516020016108e59190611224565b60008151604114610cc85760405162461bcd60e51b815260040161019f90611393565b60208201516040830151606084015160001a7f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0821115610d1a5760405162461bcd60e51b815260040161019f90611438565b8060ff16601b14158015610d3257508060ff16601c14155b15610d4f5760405162461bcd60e51b815260040161019f9061151f565b600060018783868660405160008152602001604052604051610d749493929190611290565b6020604051602081039080840390855afa158015610d96573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610dc95760405162461bcd60e51b815260040161019f906112f9565b9695505050505050565b6000610bb4848484604051602401610dec92919061126c565b60408051601f198184030181529190526020810180516001600160e01b031663a9059cbb60e01b179052610e2c565b81610e2857805160208201fd5b5050565b6000610e3783610ee6565b610e535760405162461bcd60e51b815260040161019f90611561565b60006060846001600160a01b031684604051610e6f9190611208565b6000604051808303816000865af19150503d8060008114610eac576040519150601f19603f3d011682016040523d82523d6000602084013e610eb1565b606091505b5091509150610ec08282610e1b565b80511580610edd575080806020019051810190610edd919061101b565b95945050505050565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470818114801590610bb4575050151592915050565b60008083601f840112610f30578182fd5b50813567ffffffffffffffff811115610f47578182fd5b602083019150836020828501011115610f5f57600080fd5b9250929050565b600060e08284031215610f77578081fd5b50919050565b600060208284031215610f8e578081fd5b8135610a208161172f565b60008060408385031215610fab578081fd5b8235610fb68161172f565b91506020830135610fc68161172f565b809150509250929050565b600080600060608486031215610fe5578081fd5b8335610ff08161172f565b925060208401356110008161172f565b915060408401356110108161172f565b809150509250925092565b60006020828403121561102c578081fd5b81518015158114610a20578182fd5b60006020828403121561104c578081fd5b813567ffffffffffffffff811115611062578182fd5b610bb484828501610f66565b600080600080600060608688031215611085578081fd5b853567ffffffffffffffff8082111561109c578283fd5b6110a889838a01610f66565b965060208801359150808211156110bd578283fd5b6110c989838a01610f1f565b909650945060408801359150808211156110e1578283fd5b506110ee88828901610f1f565b969995985093965092949392505050565b600060208284031215611110578081fd5b5051919050565b60008284528282602086013780602084860101526020601f19601f85011685010190509392505050565b6000813561114e8161172f565b6001600160a01b03908116845260208301359061116a8261172f565b90811660208501526040830135906111818261172f565b8082166040860152606084013560608601526080840135608086015260a084013591506111ad8261172f565b1660a084015260c082013536839003601e190181126111ca578182fd5b8201803567ffffffffffffffff8111156111e2578283fd5b8036038413156111f0578283fd5b60e060c0860152610edd60e086018260208501611117565b6000825161121a8184602087016116ff565b9190910192915050565b7f16566563746f72205369676e6564204d6573736167653a0a33320000000000008152601a810191909152603a0190565b90565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b93845260ff9290921660208401526040830152606082015260800190565b60408101600284106112bc57fe5b9281526020015290565b60006020825282518060208401526112e58160408501602087016116ff565b601f01601f19169190910160400192915050565b60208082526018908201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604082015260600190565b6020808252601d908201527f434d4357697468647261773a204348414e4e454c5f4d49534d41544348000000604082015260600190565b6020808252601290820152710434d4357697468647261773a204e4f5f4f560741b604082015260600190565b6020808252601f908201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604082015260600190565b6020808252601f908201527f434d43436f72653a204944454e544943414c5f5041525449434950414e545300604082015260600190565b60208082526019908201527f434d4341737365743a205452414e534645525f4641494c454400000000000000604082015260600190565b60208082526022908201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604082015261756560f01b606082015260800190565b6020808252601c908201527f434d4357697468647261773a20494e56414c49445f424f425f53494700000000604082015260600190565b6020808252601c908201527f434d43436f72653a20494e56414c49445f5041525449434950414e5400000000604082015260600190565b6020808252601d908201527f434d4357697468647261773a20414c52454144595f4558454355544544000000604082015260600190565b60208082526022908201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604082015261756560f01b606082015260800190565b6020808252601190820152704c696245524332303a204e4f5f434f444560781b604082015260600190565b6020808252601f908201527f5265656e7472616e637947756172643a205245454e5452414e545f43414c4c00604082015260600190565b6020808252600f908201526e0434d4341737365743a204e4f5f4f5608c1b604082015260600190565b6020808252601e908201527f434d4357697468647261773a20494e56414c49445f414c4943455f5349470000604082015260600190565b60208082526018908201527f434d4341737365743a204f574e45525f4d49534d415443480000000000000000604082015260600190565b6020808252601690820152750434d43436f72653a20414c52454144595f53455455560541b604082015260600190565b6020808252601a908201527f4d6173746572636f70793a204f4e4c595f5649415f50524f5859000000000000604082015260600190565b600060208252610a206020830184611141565b6000604082526116e76040830185611141565b90508260208301529392505050565b90815260200190565b60005b8381101561171a578181015183820152602001611702565b83811115611729576000848401525b50505050565b6001600160a01b038116811461174457600080fd5b5056fea26469706673582212201941f919d11b9e045bc8f2536467ca1f0e0998b212c4edb11861ba49f3ae549d64736f6c63430007030033";

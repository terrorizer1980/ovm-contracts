/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IcmcAdjudicatorInterface extends ethers.utils.Interface {
  functions: {
    "defundChannel(tuple,address[],uint256[])": FunctionFragment;
    "defundTransfer(tuple,bytes,bytes,bytes)": FunctionFragment;
    "disputeChannel(tuple,bytes,bytes)": FunctionFragment;
    "disputeTransfer(tuple,bytes32[])": FunctionFragment;
    "getChannelDispute()": FunctionFragment;
    "getDefundNonce(address)": FunctionFragment;
    "getTransferDispute(bytes32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "defundChannel",
    values: [
      {
        channelAddress: string;
        alice: string;
        bob: string;
        assetIds: string[];
        balances: {
          amount: [BigNumberish, BigNumberish];
          to: [string, string];
        }[];
        processedDepositsA: BigNumberish[];
        processedDepositsB: BigNumberish[];
        defundNonces: BigNumberish[];
        timeout: BigNumberish;
        nonce: BigNumberish;
        merkleRoot: BytesLike;
      },
      string[],
      BigNumberish[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "defundTransfer",
    values: [
      {
        channelAddress: string;
        transferId: BytesLike;
        transferDefinition: string;
        initiator: string;
        responder: string;
        assetId: string;
        balance: { amount: [BigNumberish, BigNumberish]; to: [string, string] };
        transferTimeout: BigNumberish;
        initialStateHash: BytesLike;
      },
      BytesLike,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "disputeChannel",
    values: [
      {
        channelAddress: string;
        alice: string;
        bob: string;
        assetIds: string[];
        balances: {
          amount: [BigNumberish, BigNumberish];
          to: [string, string];
        }[];
        processedDepositsA: BigNumberish[];
        processedDepositsB: BigNumberish[];
        defundNonces: BigNumberish[];
        timeout: BigNumberish;
        nonce: BigNumberish;
        merkleRoot: BytesLike;
      },
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "disputeTransfer",
    values: [
      {
        channelAddress: string;
        transferId: BytesLike;
        transferDefinition: string;
        initiator: string;
        responder: string;
        assetId: string;
        balance: { amount: [BigNumberish, BigNumberish]; to: [string, string] };
        transferTimeout: BigNumberish;
        initialStateHash: BytesLike;
      },
      BytesLike[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getChannelDispute",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDefundNonce",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getTransferDispute",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "defundChannel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "defundTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "disputeChannel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "disputeTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getChannelDispute",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDefundNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTransferDispute",
    data: BytesLike
  ): Result;

  events: {
    "ChannelDefunded(address,tuple,tuple,address[])": EventFragment;
    "ChannelDisputed(address,tuple,tuple)": EventFragment;
    "TransferDefunded(address,tuple,tuple,bytes,bytes,tuple)": EventFragment;
    "TransferDisputed(address,tuple,tuple)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ChannelDefunded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ChannelDisputed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferDefunded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferDisputed"): EventFragment;
}

export class IcmcAdjudicator extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IcmcAdjudicatorInterface;

  functions: {
    defundChannel(
      ccs: {
        channelAddress: string;
        alice: string;
        bob: string;
        assetIds: string[];
        balances: {
          amount: [BigNumberish, BigNumberish];
          to: [string, string];
        }[];
        processedDepositsA: BigNumberish[];
        processedDepositsB: BigNumberish[];
        defundNonces: BigNumberish[];
        timeout: BigNumberish;
        nonce: BigNumberish;
        merkleRoot: BytesLike;
      },
      assetIds: string[],
      indices: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "defundChannel(tuple,address[],uint256[])"(
      ccs: {
        channelAddress: string;
        alice: string;
        bob: string;
        assetIds: string[];
        balances: {
          amount: [BigNumberish, BigNumberish];
          to: [string, string];
        }[];
        processedDepositsA: BigNumberish[];
        processedDepositsB: BigNumberish[];
        defundNonces: BigNumberish[];
        timeout: BigNumberish;
        nonce: BigNumberish;
        merkleRoot: BytesLike;
      },
      assetIds: string[],
      indices: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    defundTransfer(
      cts: {
        channelAddress: string;
        transferId: BytesLike;
        transferDefinition: string;
        initiator: string;
        responder: string;
        assetId: string;
        balance: { amount: [BigNumberish, BigNumberish]; to: [string, string] };
        transferTimeout: BigNumberish;
        initialStateHash: BytesLike;
      },
      encodedInitialTransferState: BytesLike,
      encodedTransferResolver: BytesLike,
      responderSignature: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "defundTransfer(tuple,bytes,bytes,bytes)"(
      cts: {
        channelAddress: string;
        transferId: BytesLike;
        transferDefinition: string;
        initiator: string;
        responder: string;
        assetId: string;
        balance: { amount: [BigNumberish, BigNumberish]; to: [string, string] };
        transferTimeout: BigNumberish;
        initialStateHash: BytesLike;
      },
      encodedInitialTransferState: BytesLike,
      encodedTransferResolver: BytesLike,
      responderSignature: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    disputeChannel(
      ccs: {
        channelAddress: string;
        alice: string;
        bob: string;
        assetIds: string[];
        balances: {
          amount: [BigNumberish, BigNumberish];
          to: [string, string];
        }[];
        processedDepositsA: BigNumberish[];
        processedDepositsB: BigNumberish[];
        defundNonces: BigNumberish[];
        timeout: BigNumberish;
        nonce: BigNumberish;
        merkleRoot: BytesLike;
      },
      aliceSignature: BytesLike,
      bobSignature: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "disputeChannel(tuple,bytes,bytes)"(
      ccs: {
        channelAddress: string;
        alice: string;
        bob: string;
        assetIds: string[];
        balances: {
          amount: [BigNumberish, BigNumberish];
          to: [string, string];
        }[];
        processedDepositsA: BigNumberish[];
        processedDepositsB: BigNumberish[];
        defundNonces: BigNumberish[];
        timeout: BigNumberish;
        nonce: BigNumberish;
        merkleRoot: BytesLike;
      },
      aliceSignature: BytesLike,
      bobSignature: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    disputeTransfer(
      cts: {
        channelAddress: string;
        transferId: BytesLike;
        transferDefinition: string;
        initiator: string;
        responder: string;
        assetId: string;
        balance: { amount: [BigNumberish, BigNumberish]; to: [string, string] };
        transferTimeout: BigNumberish;
        initialStateHash: BytesLike;
      },
      merkleProofData: BytesLike[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "disputeTransfer(tuple,bytes32[])"(
      cts: {
        channelAddress: string;
        transferId: BytesLike;
        transferDefinition: string;
        initiator: string;
        responder: string;
        assetId: string;
        balance: { amount: [BigNumberish, BigNumberish]; to: [string, string] };
        transferTimeout: BigNumberish;
        initialStateHash: BytesLike;
      },
      merkleProofData: BytesLike[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getChannelDispute(
      overrides?: CallOverrides
    ): Promise<{
      0: {
        channelStateHash: string;
        nonce: BigNumber;
        merkleRoot: string;
        consensusExpiry: BigNumber;
        defundExpiry: BigNumber;
        0: string;
        1: BigNumber;
        2: string;
        3: BigNumber;
        4: BigNumber;
      };
    }>;

    "getChannelDispute()"(
      overrides?: CallOverrides
    ): Promise<{
      0: {
        channelStateHash: string;
        nonce: BigNumber;
        merkleRoot: string;
        consensusExpiry: BigNumber;
        defundExpiry: BigNumber;
        0: string;
        1: BigNumber;
        2: string;
        3: BigNumber;
        4: BigNumber;
      };
    }>;

    getDefundNonce(
      assetId: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getDefundNonce(address)"(
      assetId: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getTransferDispute(
      transferId: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: {
        transferStateHash: string;
        transferDisputeExpiry: BigNumber;
        isDefunded: boolean;
        0: string;
        1: BigNumber;
        2: boolean;
      };
    }>;

    "getTransferDispute(bytes32)"(
      transferId: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: {
        transferStateHash: string;
        transferDisputeExpiry: BigNumber;
        isDefunded: boolean;
        0: string;
        1: BigNumber;
        2: boolean;
      };
    }>;
  };

  defundChannel(
    ccs: {
      channelAddress: string;
      alice: string;
      bob: string;
      assetIds: string[];
      balances: {
        amount: [BigNumberish, BigNumberish];
        to: [string, string];
      }[];
      processedDepositsA: BigNumberish[];
      processedDepositsB: BigNumberish[];
      defundNonces: BigNumberish[];
      timeout: BigNumberish;
      nonce: BigNumberish;
      merkleRoot: BytesLike;
    },
    assetIds: string[],
    indices: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "defundChannel(tuple,address[],uint256[])"(
    ccs: {
      channelAddress: string;
      alice: string;
      bob: string;
      assetIds: string[];
      balances: {
        amount: [BigNumberish, BigNumberish];
        to: [string, string];
      }[];
      processedDepositsA: BigNumberish[];
      processedDepositsB: BigNumberish[];
      defundNonces: BigNumberish[];
      timeout: BigNumberish;
      nonce: BigNumberish;
      merkleRoot: BytesLike;
    },
    assetIds: string[],
    indices: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  defundTransfer(
    cts: {
      channelAddress: string;
      transferId: BytesLike;
      transferDefinition: string;
      initiator: string;
      responder: string;
      assetId: string;
      balance: { amount: [BigNumberish, BigNumberish]; to: [string, string] };
      transferTimeout: BigNumberish;
      initialStateHash: BytesLike;
    },
    encodedInitialTransferState: BytesLike,
    encodedTransferResolver: BytesLike,
    responderSignature: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "defundTransfer(tuple,bytes,bytes,bytes)"(
    cts: {
      channelAddress: string;
      transferId: BytesLike;
      transferDefinition: string;
      initiator: string;
      responder: string;
      assetId: string;
      balance: { amount: [BigNumberish, BigNumberish]; to: [string, string] };
      transferTimeout: BigNumberish;
      initialStateHash: BytesLike;
    },
    encodedInitialTransferState: BytesLike,
    encodedTransferResolver: BytesLike,
    responderSignature: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  disputeChannel(
    ccs: {
      channelAddress: string;
      alice: string;
      bob: string;
      assetIds: string[];
      balances: {
        amount: [BigNumberish, BigNumberish];
        to: [string, string];
      }[];
      processedDepositsA: BigNumberish[];
      processedDepositsB: BigNumberish[];
      defundNonces: BigNumberish[];
      timeout: BigNumberish;
      nonce: BigNumberish;
      merkleRoot: BytesLike;
    },
    aliceSignature: BytesLike,
    bobSignature: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "disputeChannel(tuple,bytes,bytes)"(
    ccs: {
      channelAddress: string;
      alice: string;
      bob: string;
      assetIds: string[];
      balances: {
        amount: [BigNumberish, BigNumberish];
        to: [string, string];
      }[];
      processedDepositsA: BigNumberish[];
      processedDepositsB: BigNumberish[];
      defundNonces: BigNumberish[];
      timeout: BigNumberish;
      nonce: BigNumberish;
      merkleRoot: BytesLike;
    },
    aliceSignature: BytesLike,
    bobSignature: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  disputeTransfer(
    cts: {
      channelAddress: string;
      transferId: BytesLike;
      transferDefinition: string;
      initiator: string;
      responder: string;
      assetId: string;
      balance: { amount: [BigNumberish, BigNumberish]; to: [string, string] };
      transferTimeout: BigNumberish;
      initialStateHash: BytesLike;
    },
    merkleProofData: BytesLike[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "disputeTransfer(tuple,bytes32[])"(
    cts: {
      channelAddress: string;
      transferId: BytesLike;
      transferDefinition: string;
      initiator: string;
      responder: string;
      assetId: string;
      balance: { amount: [BigNumberish, BigNumberish]; to: [string, string] };
      transferTimeout: BigNumberish;
      initialStateHash: BytesLike;
    },
    merkleProofData: BytesLike[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getChannelDispute(
    overrides?: CallOverrides
  ): Promise<{
    channelStateHash: string;
    nonce: BigNumber;
    merkleRoot: string;
    consensusExpiry: BigNumber;
    defundExpiry: BigNumber;
    0: string;
    1: BigNumber;
    2: string;
    3: BigNumber;
    4: BigNumber;
  }>;

  "getChannelDispute()"(
    overrides?: CallOverrides
  ): Promise<{
    channelStateHash: string;
    nonce: BigNumber;
    merkleRoot: string;
    consensusExpiry: BigNumber;
    defundExpiry: BigNumber;
    0: string;
    1: BigNumber;
    2: string;
    3: BigNumber;
    4: BigNumber;
  }>;

  getDefundNonce(
    assetId: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getDefundNonce(address)"(
    assetId: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTransferDispute(
    transferId: BytesLike,
    overrides?: CallOverrides
  ): Promise<{
    transferStateHash: string;
    transferDisputeExpiry: BigNumber;
    isDefunded: boolean;
    0: string;
    1: BigNumber;
    2: boolean;
  }>;

  "getTransferDispute(bytes32)"(
    transferId: BytesLike,
    overrides?: CallOverrides
  ): Promise<{
    transferStateHash: string;
    transferDisputeExpiry: BigNumber;
    isDefunded: boolean;
    0: string;
    1: BigNumber;
    2: boolean;
  }>;

  callStatic: {
    defundChannel(
      ccs: {
        channelAddress: string;
        alice: string;
        bob: string;
        assetIds: string[];
        balances: {
          amount: [BigNumberish, BigNumberish];
          to: [string, string];
        }[];
        processedDepositsA: BigNumberish[];
        processedDepositsB: BigNumberish[];
        defundNonces: BigNumberish[];
        timeout: BigNumberish;
        nonce: BigNumberish;
        merkleRoot: BytesLike;
      },
      assetIds: string[],
      indices: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    "defundChannel(tuple,address[],uint256[])"(
      ccs: {
        channelAddress: string;
        alice: string;
        bob: string;
        assetIds: string[];
        balances: {
          amount: [BigNumberish, BigNumberish];
          to: [string, string];
        }[];
        processedDepositsA: BigNumberish[];
        processedDepositsB: BigNumberish[];
        defundNonces: BigNumberish[];
        timeout: BigNumberish;
        nonce: BigNumberish;
        merkleRoot: BytesLike;
      },
      assetIds: string[],
      indices: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    defundTransfer(
      cts: {
        channelAddress: string;
        transferId: BytesLike;
        transferDefinition: string;
        initiator: string;
        responder: string;
        assetId: string;
        balance: { amount: [BigNumberish, BigNumberish]; to: [string, string] };
        transferTimeout: BigNumberish;
        initialStateHash: BytesLike;
      },
      encodedInitialTransferState: BytesLike,
      encodedTransferResolver: BytesLike,
      responderSignature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "defundTransfer(tuple,bytes,bytes,bytes)"(
      cts: {
        channelAddress: string;
        transferId: BytesLike;
        transferDefinition: string;
        initiator: string;
        responder: string;
        assetId: string;
        balance: { amount: [BigNumberish, BigNumberish]; to: [string, string] };
        transferTimeout: BigNumberish;
        initialStateHash: BytesLike;
      },
      encodedInitialTransferState: BytesLike,
      encodedTransferResolver: BytesLike,
      responderSignature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    disputeChannel(
      ccs: {
        channelAddress: string;
        alice: string;
        bob: string;
        assetIds: string[];
        balances: {
          amount: [BigNumberish, BigNumberish];
          to: [string, string];
        }[];
        processedDepositsA: BigNumberish[];
        processedDepositsB: BigNumberish[];
        defundNonces: BigNumberish[];
        timeout: BigNumberish;
        nonce: BigNumberish;
        merkleRoot: BytesLike;
      },
      aliceSignature: BytesLike,
      bobSignature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "disputeChannel(tuple,bytes,bytes)"(
      ccs: {
        channelAddress: string;
        alice: string;
        bob: string;
        assetIds: string[];
        balances: {
          amount: [BigNumberish, BigNumberish];
          to: [string, string];
        }[];
        processedDepositsA: BigNumberish[];
        processedDepositsB: BigNumberish[];
        defundNonces: BigNumberish[];
        timeout: BigNumberish;
        nonce: BigNumberish;
        merkleRoot: BytesLike;
      },
      aliceSignature: BytesLike,
      bobSignature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    disputeTransfer(
      cts: {
        channelAddress: string;
        transferId: BytesLike;
        transferDefinition: string;
        initiator: string;
        responder: string;
        assetId: string;
        balance: { amount: [BigNumberish, BigNumberish]; to: [string, string] };
        transferTimeout: BigNumberish;
        initialStateHash: BytesLike;
      },
      merkleProofData: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    "disputeTransfer(tuple,bytes32[])"(
      cts: {
        channelAddress: string;
        transferId: BytesLike;
        transferDefinition: string;
        initiator: string;
        responder: string;
        assetId: string;
        balance: { amount: [BigNumberish, BigNumberish]; to: [string, string] };
        transferTimeout: BigNumberish;
        initialStateHash: BytesLike;
      },
      merkleProofData: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    getChannelDispute(
      overrides?: CallOverrides
    ): Promise<{
      channelStateHash: string;
      nonce: BigNumber;
      merkleRoot: string;
      consensusExpiry: BigNumber;
      defundExpiry: BigNumber;
      0: string;
      1: BigNumber;
      2: string;
      3: BigNumber;
      4: BigNumber;
    }>;

    "getChannelDispute()"(
      overrides?: CallOverrides
    ): Promise<{
      channelStateHash: string;
      nonce: BigNumber;
      merkleRoot: string;
      consensusExpiry: BigNumber;
      defundExpiry: BigNumber;
      0: string;
      1: BigNumber;
      2: string;
      3: BigNumber;
      4: BigNumber;
    }>;

    getDefundNonce(
      assetId: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getDefundNonce(address)"(
      assetId: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTransferDispute(
      transferId: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      transferStateHash: string;
      transferDisputeExpiry: BigNumber;
      isDefunded: boolean;
      0: string;
      1: BigNumber;
      2: boolean;
    }>;

    "getTransferDispute(bytes32)"(
      transferId: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      transferStateHash: string;
      transferDisputeExpiry: BigNumber;
      isDefunded: boolean;
      0: string;
      1: BigNumber;
      2: boolean;
    }>;
  };

  filters: {
    ChannelDefunded(
      defunder: null,
      state: null,
      dispute: null,
      assetIds: null
    ): EventFilter;

    ChannelDisputed(disputer: null, state: null, dispute: null): EventFilter;

    TransferDefunded(
      defunder: null,
      state: null,
      dispute: null,
      encodedInitialState: null,
      encodedResolver: null,
      balance: null
    ): EventFilter;

    TransferDisputed(disputer: null, state: null, dispute: null): EventFilter;
  };

  estimateGas: {
    defundChannel(
      ccs: {
        channelAddress: string;
        alice: string;
        bob: string;
        assetIds: string[];
        balances: {
          amount: [BigNumberish, BigNumberish];
          to: [string, string];
        }[];
        processedDepositsA: BigNumberish[];
        processedDepositsB: BigNumberish[];
        defundNonces: BigNumberish[];
        timeout: BigNumberish;
        nonce: BigNumberish;
        merkleRoot: BytesLike;
      },
      assetIds: string[],
      indices: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "defundChannel(tuple,address[],uint256[])"(
      ccs: {
        channelAddress: string;
        alice: string;
        bob: string;
        assetIds: string[];
        balances: {
          amount: [BigNumberish, BigNumberish];
          to: [string, string];
        }[];
        processedDepositsA: BigNumberish[];
        processedDepositsB: BigNumberish[];
        defundNonces: BigNumberish[];
        timeout: BigNumberish;
        nonce: BigNumberish;
        merkleRoot: BytesLike;
      },
      assetIds: string[],
      indices: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    defundTransfer(
      cts: {
        channelAddress: string;
        transferId: BytesLike;
        transferDefinition: string;
        initiator: string;
        responder: string;
        assetId: string;
        balance: { amount: [BigNumberish, BigNumberish]; to: [string, string] };
        transferTimeout: BigNumberish;
        initialStateHash: BytesLike;
      },
      encodedInitialTransferState: BytesLike,
      encodedTransferResolver: BytesLike,
      responderSignature: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "defundTransfer(tuple,bytes,bytes,bytes)"(
      cts: {
        channelAddress: string;
        transferId: BytesLike;
        transferDefinition: string;
        initiator: string;
        responder: string;
        assetId: string;
        balance: { amount: [BigNumberish, BigNumberish]; to: [string, string] };
        transferTimeout: BigNumberish;
        initialStateHash: BytesLike;
      },
      encodedInitialTransferState: BytesLike,
      encodedTransferResolver: BytesLike,
      responderSignature: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    disputeChannel(
      ccs: {
        channelAddress: string;
        alice: string;
        bob: string;
        assetIds: string[];
        balances: {
          amount: [BigNumberish, BigNumberish];
          to: [string, string];
        }[];
        processedDepositsA: BigNumberish[];
        processedDepositsB: BigNumberish[];
        defundNonces: BigNumberish[];
        timeout: BigNumberish;
        nonce: BigNumberish;
        merkleRoot: BytesLike;
      },
      aliceSignature: BytesLike,
      bobSignature: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "disputeChannel(tuple,bytes,bytes)"(
      ccs: {
        channelAddress: string;
        alice: string;
        bob: string;
        assetIds: string[];
        balances: {
          amount: [BigNumberish, BigNumberish];
          to: [string, string];
        }[];
        processedDepositsA: BigNumberish[];
        processedDepositsB: BigNumberish[];
        defundNonces: BigNumberish[];
        timeout: BigNumberish;
        nonce: BigNumberish;
        merkleRoot: BytesLike;
      },
      aliceSignature: BytesLike,
      bobSignature: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    disputeTransfer(
      cts: {
        channelAddress: string;
        transferId: BytesLike;
        transferDefinition: string;
        initiator: string;
        responder: string;
        assetId: string;
        balance: { amount: [BigNumberish, BigNumberish]; to: [string, string] };
        transferTimeout: BigNumberish;
        initialStateHash: BytesLike;
      },
      merkleProofData: BytesLike[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "disputeTransfer(tuple,bytes32[])"(
      cts: {
        channelAddress: string;
        transferId: BytesLike;
        transferDefinition: string;
        initiator: string;
        responder: string;
        assetId: string;
        balance: { amount: [BigNumberish, BigNumberish]; to: [string, string] };
        transferTimeout: BigNumberish;
        initialStateHash: BytesLike;
      },
      merkleProofData: BytesLike[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    getChannelDispute(overrides?: CallOverrides): Promise<BigNumber>;

    "getChannelDispute()"(overrides?: CallOverrides): Promise<BigNumber>;

    getDefundNonce(
      assetId: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getDefundNonce(address)"(
      assetId: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTransferDispute(
      transferId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getTransferDispute(bytes32)"(
      transferId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    defundChannel(
      ccs: {
        channelAddress: string;
        alice: string;
        bob: string;
        assetIds: string[];
        balances: {
          amount: [BigNumberish, BigNumberish];
          to: [string, string];
        }[];
        processedDepositsA: BigNumberish[];
        processedDepositsB: BigNumberish[];
        defundNonces: BigNumberish[];
        timeout: BigNumberish;
        nonce: BigNumberish;
        merkleRoot: BytesLike;
      },
      assetIds: string[],
      indices: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "defundChannel(tuple,address[],uint256[])"(
      ccs: {
        channelAddress: string;
        alice: string;
        bob: string;
        assetIds: string[];
        balances: {
          amount: [BigNumberish, BigNumberish];
          to: [string, string];
        }[];
        processedDepositsA: BigNumberish[];
        processedDepositsB: BigNumberish[];
        defundNonces: BigNumberish[];
        timeout: BigNumberish;
        nonce: BigNumberish;
        merkleRoot: BytesLike;
      },
      assetIds: string[],
      indices: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    defundTransfer(
      cts: {
        channelAddress: string;
        transferId: BytesLike;
        transferDefinition: string;
        initiator: string;
        responder: string;
        assetId: string;
        balance: { amount: [BigNumberish, BigNumberish]; to: [string, string] };
        transferTimeout: BigNumberish;
        initialStateHash: BytesLike;
      },
      encodedInitialTransferState: BytesLike,
      encodedTransferResolver: BytesLike,
      responderSignature: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "defundTransfer(tuple,bytes,bytes,bytes)"(
      cts: {
        channelAddress: string;
        transferId: BytesLike;
        transferDefinition: string;
        initiator: string;
        responder: string;
        assetId: string;
        balance: { amount: [BigNumberish, BigNumberish]; to: [string, string] };
        transferTimeout: BigNumberish;
        initialStateHash: BytesLike;
      },
      encodedInitialTransferState: BytesLike,
      encodedTransferResolver: BytesLike,
      responderSignature: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    disputeChannel(
      ccs: {
        channelAddress: string;
        alice: string;
        bob: string;
        assetIds: string[];
        balances: {
          amount: [BigNumberish, BigNumberish];
          to: [string, string];
        }[];
        processedDepositsA: BigNumberish[];
        processedDepositsB: BigNumberish[];
        defundNonces: BigNumberish[];
        timeout: BigNumberish;
        nonce: BigNumberish;
        merkleRoot: BytesLike;
      },
      aliceSignature: BytesLike,
      bobSignature: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "disputeChannel(tuple,bytes,bytes)"(
      ccs: {
        channelAddress: string;
        alice: string;
        bob: string;
        assetIds: string[];
        balances: {
          amount: [BigNumberish, BigNumberish];
          to: [string, string];
        }[];
        processedDepositsA: BigNumberish[];
        processedDepositsB: BigNumberish[];
        defundNonces: BigNumberish[];
        timeout: BigNumberish;
        nonce: BigNumberish;
        merkleRoot: BytesLike;
      },
      aliceSignature: BytesLike,
      bobSignature: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    disputeTransfer(
      cts: {
        channelAddress: string;
        transferId: BytesLike;
        transferDefinition: string;
        initiator: string;
        responder: string;
        assetId: string;
        balance: { amount: [BigNumberish, BigNumberish]; to: [string, string] };
        transferTimeout: BigNumberish;
        initialStateHash: BytesLike;
      },
      merkleProofData: BytesLike[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "disputeTransfer(tuple,bytes32[])"(
      cts: {
        channelAddress: string;
        transferId: BytesLike;
        transferDefinition: string;
        initiator: string;
        responder: string;
        assetId: string;
        balance: { amount: [BigNumberish, BigNumberish]; to: [string, string] };
        transferTimeout: BigNumberish;
        initialStateHash: BytesLike;
      },
      merkleProofData: BytesLike[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getChannelDispute(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getChannelDispute()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDefundNonce(
      assetId: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getDefundNonce(address)"(
      assetId: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTransferDispute(
      transferId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getTransferDispute(bytes32)"(
      transferId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

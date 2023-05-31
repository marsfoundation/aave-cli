export const POLYGON_BRIDGE_EXECUTOR_ABI = [
  {
    inputs: [
      { internalType: "address", name: "fxRootSender", type: "address" },
      { internalType: "address", name: "fxChild", type: "address" },
      { internalType: "uint256", name: "delay", type: "uint256" },
      { internalType: "uint256", name: "gracePeriod", type: "uint256" },
      { internalType: "uint256", name: "minimumDelay", type: "uint256" },
      { internalType: "uint256", name: "maximumDelay", type: "uint256" },
      { internalType: "address", name: "guardian", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint256", name: "id", type: "uint256" },
    ],
    name: "ActionsSetCanceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint256", name: "id", type: "uint256" },
      {
        indexed: true,
        internalType: "address",
        name: "initiatorExecution",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes[]",
        name: "returnedData",
        type: "bytes[]",
      },
    ],
    name: "ActionsSetExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint256", name: "id", type: "uint256" },
      {
        indexed: false,
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "string[]",
        name: "signatures",
        type: "string[]",
      },
      {
        indexed: false,
        internalType: "bytes[]",
        name: "calldatas",
        type: "bytes[]",
      },
      {
        indexed: false,
        internalType: "bool[]",
        name: "withDelegatecalls",
        type: "bool[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "executionTime",
        type: "uint256",
      },
    ],
    name: "ActionsSetQueued",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "previousDelay",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newDelay",
        type: "uint256",
      },
    ],
    name: "DelayUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousFxChild",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newFxChild",
        type: "address",
      },
    ],
    name: "FxChildUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousFxRootSender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newFxRootSender",
        type: "address",
      },
    ],
    name: "FxRootSenderUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "previousGracePeriod",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newGracePeriod",
        type: "uint256",
      },
    ],
    name: "GracePeriodUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousGuardian",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newGuardian",
        type: "address",
      },
    ],
    name: "GuardianUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "previousMaximumDelay",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newMaximumDelay",
        type: "uint256",
      },
    ],
    name: "MaximumDelayUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "previousMinimumDelay",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newMinimumDelay",
        type: "uint256",
      },
    ],
    name: "MinimumDelayUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "NewAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "bridge",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "initiatorChange",
        type: "address",
      },
    ],
    name: "NewBridge",
    type: "event",
  },
  {
    inputs: [
      { internalType: "uint256", name: "actionsSetId", type: "uint256" },
    ],
    name: "cancel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "actionsSetId", type: "uint256" },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "target", type: "address" },
      { internalType: "bytes", name: "data", type: "bytes" },
    ],
    name: "executeDelegateCall",
    outputs: [
      { internalType: "bool", name: "", type: "bool" },
      { internalType: "bytes", name: "", type: "bytes" },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "actionsSetId", type: "uint256" },
    ],
    name: "getActionsSetById",
    outputs: [
      {
        components: [
          { internalType: "address[]", name: "targets", type: "address[]" },
          { internalType: "uint256[]", name: "values", type: "uint256[]" },
          { internalType: "string[]", name: "signatures", type: "string[]" },
          { internalType: "bytes[]", name: "calldatas", type: "bytes[]" },
          { internalType: "bool[]", name: "withDelegatecalls", type: "bool[]" },
          { internalType: "uint256", name: "executionTime", type: "uint256" },
          { internalType: "bool", name: "executed", type: "bool" },
          { internalType: "bool", name: "canceled", type: "bool" },
        ],
        internalType: "struct IBridgeExecutor.ActionsSet",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getActionsSetCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "actionsSetId", type: "uint256" },
    ],
    name: "getCurrentState",
    outputs: [
      {
        internalType: "enum IBridgeExecutor.ActionsSetState",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDelay",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getFxChild",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getFxRootSender",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getGracePeriod",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getGuardian",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMaximumDelay",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMinimumDelay",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "actionHash", type: "bytes32" }],
    name: "isActionQueued",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "stateId", type: "uint256" },
      { internalType: "address", name: "rootMessageSender", type: "address" },
      { internalType: "bytes", name: "data", type: "bytes" },
    ],
    name: "processMessageFromRoot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "receiveFunds",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "delay", type: "uint256" }],
    name: "updateDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "fxChild", type: "address" }],
    name: "updateFxChild",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "fxRootSender", type: "address" },
    ],
    name: "updateFxRootSender",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "gracePeriod", type: "uint256" }],
    name: "updateGracePeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "guardian", type: "address" }],
    name: "updateGuardian",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "maximumDelay", type: "uint256" },
    ],
    name: "updateMaximumDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "minimumDelay", type: "uint256" },
    ],
    name: "updateMinimumDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

// block when the bridge executor was deployed
export const POLYGON_BRIDGE_EXECUTOR_START_BLOCK = 20939532n;

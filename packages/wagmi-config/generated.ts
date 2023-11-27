import {
  useNetwork,
  useChainId,
  useContractWrite,
  Address,
  UseContractWriteConfig,
  usePrepareContractWrite,
  UsePrepareContractWriteConfig,
  useContractEvent,
  UseContractEventConfig,
  useContractRead,
  UseContractReadConfig,
} from 'wagmi'
import {
  WriteContractMode,
  PrepareWriteContractResult,
  ReadContractResult,
} from 'wagmi/actions'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AccountProxy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x55266d75D1a14E4572138116aF39863Ed6596E7F)
 * -
 */
export const accountProxyABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: '_guardian', internalType: 'address', type: 'address' },
      {
        name: '_initialImplementation',
        internalType: 'address',
        type: 'address',
      },
    ],
  },
  { type: 'error', inputs: [], name: 'AlreadyInitialized' },
  { type: 'error', inputs: [], name: 'InvalidImplementation' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'beacon',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'BeaconUpgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  { stateMutability: 'payable', type: 'fallback' },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'implementation', internalType: 'address', type: 'address' },
    ],
    name: 'initialize',
    outputs: [],
  },
  { stateMutability: 'payable', type: 'receive' },
] as const

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x55266d75D1a14E4572138116aF39863Ed6596E7F)
 * -
 */
export const accountProxyAddress = {
  5: '0x55266d75D1a14E4572138116aF39863Ed6596E7F',
  1337: '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9',
} as const

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x55266d75D1a14E4572138116aF39863Ed6596E7F)
 * -
 */
export const accountProxyConfig = {
  address: accountProxyAddress,
  abi: accountProxyABI,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20ABI = [
  {
    type: 'event',
    inputs: [
      { name: 'owner', type: 'address', indexed: true },
      { name: 'spender', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    inputs: [
      { name: 'from', type: 'address', indexed: true },
      { name: 'to', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ type: 'uint8' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'sender', type: 'address' },
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'addedValue', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    outputs: [{ type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'subtractedValue', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    outputs: [{ type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC6551Registry
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x000000006551c19487814612e58FE06813775758)
 * -
 */
export const erc6551RegistryABI = [
  { type: 'error', inputs: [], name: 'AccountCreationFailed' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'salt',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'chainId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'tokenContract',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'ERC6551AccountCreated',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'implementation', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenContract', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'account',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'implementation', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenContract', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'createAccount',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
] as const

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x000000006551c19487814612e58FE06813775758)
 * -
 */
export const erc6551RegistryAddress = {
  5: '0x000000006551c19487814612e58FE06813775758',
  1337: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
} as const

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x000000006551c19487814612e58FE06813775758)
 * -
 */
export const erc6551RegistryConfig = {
  address: erc6551RegistryAddress,
  abi: erc6551RegistryABI,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc721ABI = [
  {
    type: 'event',
    inputs: [
      { name: 'owner', type: 'address', indexed: true },
      { name: 'spender', type: 'address', indexed: true },
      { name: 'tokenId', type: 'uint256', indexed: true },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    inputs: [
      { name: 'owner', type: 'address', indexed: true },
      { name: 'operator', type: 'address', indexed: true },
      { name: 'approved', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    inputs: [
      { name: 'from', type: 'address', indexed: true },
      { name: 'to', type: 'address', indexed: true },
      { name: 'tokenId', type: 'uint256', indexed: true },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'tokenId', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'operator', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', type: 'address' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'from', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'tokenId', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'id', type: 'uint256' },
      { name: 'data', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', type: 'address' },
      { name: 'approved', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'index', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'index', type: 'uint256' },
    ],
    name: 'tokenByIndex',
    outputs: [{ name: 'tokenId', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ type: 'uint256' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'sender', type: 'address' },
      { name: 'recipient', type: 'address' },
      { name: 'tokenId', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC6551Registry
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc6551RegistryABI = [
  { type: 'error', inputs: [], name: 'AccountCreationFailed' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'salt',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'chainId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'tokenContract',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'ERC6551AccountCreated',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'implementation', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenContract', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'account',
    outputs: [{ name: 'account', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'implementation', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenContract', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'createAccount',
    outputs: [{ name: 'account', internalType: 'address', type: 'address' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Map
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x39Bd51dF4995C9eC14a16c15e4D832B3dd42D339)
 * -
 */
export const mapABI = [
  { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
  { type: 'error', inputs: [], name: 'accountNotSender' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'beacon',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'BeaconUpgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'version', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tileAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'geohash',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'LocalRecordDeployed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tileAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'geohash',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'creator',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'LocalRecordTokenDeployed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'stateAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'verifier',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'creator',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'baseURI',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'TileCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'TILE_CREATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'registry', internalType: 'address', type: 'address' },
      { name: 'accountProxy', internalType: 'address', type: 'address' },
      { name: 'implementation', internalType: 'address', type: 'address' },
    ],
    name: '__ERC6551AccountCreator__init',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'config',
        internalType: 'struct RecordTileFactoryConfig',
        type: 'tuple',
        components: [
          { name: 'registry', internalType: 'address', type: 'address' },
          { name: 'accountProxy', internalType: 'address', type: 'address' },
          { name: 'implementation', internalType: 'address', type: 'address' },
        ],
      },
    ],
    name: '__RecordTileFactory__init',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'geohash', internalType: 'string', type: 'string' },
    ],
    name: 'computeLocalRecord',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'geohash', internalType: 'string', type: 'string' }],
    name: 'computeRecordTileAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'verifier', internalType: 'address', type: 'address' },
      { name: 'baseURI', internalType: 'string', type: 'string' },
    ],
    name: 'createState',
    outputs: [
      { name: 'tileAddress', internalType: 'address', type: 'address' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'stateBeacon', internalType: 'address', type: 'address' },
      {
        name: 'recordTileConfiguration',
        internalType: 'struct RecordTileFactoryConfig',
        type: 'tuple',
        components: [
          { name: 'registry', internalType: 'address', type: 'address' },
          { name: 'accountProxy', internalType: 'address', type: 'address' },
          { name: 'implementation', internalType: 'address', type: 'address' },
        ],
      },
      { name: 'minPrecision', internalType: 'uint256', type: 'uint256' },
      { name: 'maxPrecision', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'initialize',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'state', internalType: 'address', type: 'address' },
      { name: 'geohash', internalType: 'string', type: 'string' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'move',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
    ],
    name: 'upgradeTo',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
  },
] as const

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x39Bd51dF4995C9eC14a16c15e4D832B3dd42D339)
 * -
 */
export const mapAddress = {
  5: '0x39Bd51dF4995C9eC14a16c15e4D832B3dd42D339',
  1337: '0x8A791620dd6260079BF849Dc5567aDC3F2FdC318',
} as const

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x39Bd51dF4995C9eC14a16c15e4D832B3dd42D339)
 * -
 */
export const mapConfig = { address: mapAddress, abi: mapABI } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// StateTile
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x1837faFcbc3E53479E05bAd424a2d477cbc94836)
 * -
 */
export const stateTileABI = [
  { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
  { type: 'error', inputs: [], name: 'accountNotSender' },
  { type: 'error', inputs: [], name: 'movingToSameLocation' },
  { type: 'error', inputs: [], name: 'nonTransferable' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'version', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'state',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'previousGeohash',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'nextGeohash',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'StateMove',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'ids',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'values',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'TransferBatch',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'TransferSingle',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'value', internalType: 'string', type: 'string', indexed: false },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'URI',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'accountPosition',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'accounts', internalType: 'address[]', type: 'address[]' },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'balanceOfBatch',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_map', internalType: 'address', type: 'address' },
      { name: '_verifier', internalType: 'address', type: 'address' },
      { name: '_baseURI', internalType: 'string', type: 'string' },
    ],
    name: 'initialize',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'map',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'geohash', internalType: 'string', type: 'string' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'move',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'amounts', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeBatchTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'uri',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'verifier',
    outputs: [
      {
        name: '',
        internalType: 'contract IStateTileVerifier',
        type: 'address',
      },
    ],
  },
] as const

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x1837faFcbc3E53479E05bAd424a2d477cbc94836)
 * -
 */
export const stateTileAddress = {
  5: '0x1837faFcbc3E53479E05bAd424a2d477cbc94836',
  1337: '0x8aCd85898458400f7Db866d53FCFF6f0D49741FF',
} as const

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x1837faFcbc3E53479E05bAd424a2d477cbc94836)
 * -
 */
export const stateTileConfig = {
  address: stateTileAddress,
  abi: stateTileABI,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link accountProxyABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x55266d75D1a14E4572138116aF39863Ed6596E7F)
 * -
 */
export function useAccountProxyWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof accountProxyAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof accountProxyABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      > & { address?: Address; chainId?: TChainId }
    : UseContractWriteConfig<typeof accountProxyABI, TFunctionName, TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof accountProxyABI, TFunctionName, TMode>({
    abi: accountProxyABI,
    address: accountProxyAddress[chainId as keyof typeof accountProxyAddress],
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link accountProxyABI}__ and `functionName` set to `"initialize"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x55266d75D1a14E4572138116aF39863Ed6596E7F)
 * -
 */
export function useAccountProxyInitialize<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof accountProxyAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof accountProxyABI,
          'initialize'
        >['request']['abi'],
        'initialize',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'initialize' }
    : UseContractWriteConfig<typeof accountProxyABI, 'initialize', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'initialize'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof accountProxyABI, 'initialize', TMode>({
    abi: accountProxyABI,
    address: accountProxyAddress[chainId as keyof typeof accountProxyAddress],
    functionName: 'initialize',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link accountProxyABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x55266d75D1a14E4572138116aF39863Ed6596E7F)
 * -
 */
export function usePrepareAccountProxyWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof accountProxyABI, TFunctionName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof accountProxyAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: accountProxyABI,
    address: accountProxyAddress[chainId as keyof typeof accountProxyAddress],
    ...config,
  } as UsePrepareContractWriteConfig<typeof accountProxyABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link accountProxyABI}__ and `functionName` set to `"initialize"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x55266d75D1a14E4572138116aF39863Ed6596E7F)
 * -
 */
export function usePrepareAccountProxyInitialize(
  config: Omit<
    UsePrepareContractWriteConfig<typeof accountProxyABI, 'initialize'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof accountProxyAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: accountProxyABI,
    address: accountProxyAddress[chainId as keyof typeof accountProxyAddress],
    functionName: 'initialize',
    ...config,
  } as UsePrepareContractWriteConfig<typeof accountProxyABI, 'initialize'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link accountProxyABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x55266d75D1a14E4572138116aF39863Ed6596E7F)
 * -
 */
export function useAccountProxyEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof accountProxyABI, TEventName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof accountProxyAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: accountProxyABI,
    address: accountProxyAddress[chainId as keyof typeof accountProxyAddress],
    ...config,
  } as UseContractEventConfig<typeof accountProxyABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link accountProxyABI}__ and `eventName` set to `"AdminChanged"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x55266d75D1a14E4572138116aF39863Ed6596E7F)
 * -
 */
export function useAccountProxyAdminChangedEvent(
  config: Omit<
    UseContractEventConfig<typeof accountProxyABI, 'AdminChanged'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof accountProxyAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: accountProxyABI,
    address: accountProxyAddress[chainId as keyof typeof accountProxyAddress],
    eventName: 'AdminChanged',
    ...config,
  } as UseContractEventConfig<typeof accountProxyABI, 'AdminChanged'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link accountProxyABI}__ and `eventName` set to `"BeaconUpgraded"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x55266d75D1a14E4572138116aF39863Ed6596E7F)
 * -
 */
export function useAccountProxyBeaconUpgradedEvent(
  config: Omit<
    UseContractEventConfig<typeof accountProxyABI, 'BeaconUpgraded'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof accountProxyAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: accountProxyABI,
    address: accountProxyAddress[chainId as keyof typeof accountProxyAddress],
    eventName: 'BeaconUpgraded',
    ...config,
  } as UseContractEventConfig<typeof accountProxyABI, 'BeaconUpgraded'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link accountProxyABI}__ and `eventName` set to `"Upgraded"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x55266d75D1a14E4572138116aF39863Ed6596E7F)
 * -
 */
export function useAccountProxyUpgradedEvent(
  config: Omit<
    UseContractEventConfig<typeof accountProxyABI, 'Upgraded'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof accountProxyAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: accountProxyABI,
    address: accountProxyAddress[chainId as keyof typeof accountProxyAddress],
    eventName: 'Upgraded',
    ...config,
  } as UseContractEventConfig<typeof accountProxyABI, 'Upgraded'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
 */
export function useErc20Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({ abi: erc20ABI, ...config } as UseContractReadConfig<
    typeof erc20ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"allowance"`.
 */
export function useErc20Allowance<
  TFunctionName extends 'allowance',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: 'allowance',
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useErc20BalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"decimals"`.
 */
export function useErc20Decimals<
  TFunctionName extends 'decimals',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: 'decimals',
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"name"`.
 */
export function useErc20Name<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"symbol"`.
 */
export function useErc20Symbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: 'symbol',
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"totalSupply"`.
 */
export function useErc20TotalSupply<
  TFunctionName extends 'totalSupply',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: 'totalSupply',
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__.
 */
export function useErc20Write<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof erc20ABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof erc20ABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof erc20ABI, TFunctionName, TMode>({
    abi: erc20ABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"approve"`.
 */
export function useErc20Approve<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20ABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof erc20ABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof erc20ABI, 'approve', TMode>({
    abi: erc20ABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transfer"`.
 */
export function useErc20Transfer<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20ABI,
          'transfer'
        >['request']['abi'],
        'transfer',
        TMode
      > & { functionName?: 'transfer' }
    : UseContractWriteConfig<typeof erc20ABI, 'transfer', TMode> & {
        abi?: never
        functionName?: 'transfer'
      } = {} as any,
) {
  return useContractWrite<typeof erc20ABI, 'transfer', TMode>({
    abi: erc20ABI,
    functionName: 'transfer',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useErc20TransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20ABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<typeof erc20ABI, 'transferFrom', TMode> & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof erc20ABI, 'transferFrom', TMode>({
    abi: erc20ABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"increaseAllowance"`.
 */
export function useErc20IncreaseAllowance<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20ABI,
          'increaseAllowance'
        >['request']['abi'],
        'increaseAllowance',
        TMode
      > & { functionName?: 'increaseAllowance' }
    : UseContractWriteConfig<typeof erc20ABI, 'increaseAllowance', TMode> & {
        abi?: never
        functionName?: 'increaseAllowance'
      } = {} as any,
) {
  return useContractWrite<typeof erc20ABI, 'increaseAllowance', TMode>({
    abi: erc20ABI,
    functionName: 'increaseAllowance',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"decreaseAllowance"`.
 */
export function useErc20DecreaseAllowance<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20ABI,
          'decreaseAllowance'
        >['request']['abi'],
        'decreaseAllowance',
        TMode
      > & { functionName?: 'decreaseAllowance' }
    : UseContractWriteConfig<typeof erc20ABI, 'decreaseAllowance', TMode> & {
        abi?: never
        functionName?: 'decreaseAllowance'
      } = {} as any,
) {
  return useContractWrite<typeof erc20ABI, 'decreaseAllowance', TMode>({
    abi: erc20ABI,
    functionName: 'decreaseAllowance',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__.
 */
export function usePrepareErc20Write<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20ABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20ABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20ABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareErc20Approve(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20ABI, 'approve'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20ABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20ABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transfer"`.
 */
export function usePrepareErc20Transfer(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20ABI, 'transfer'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20ABI,
    functionName: 'transfer',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20ABI, 'transfer'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareErc20TransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20ABI, 'transferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20ABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20ABI, 'transferFrom'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"increaseAllowance"`.
 */
export function usePrepareErc20IncreaseAllowance(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20ABI, 'increaseAllowance'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20ABI,
    functionName: 'increaseAllowance',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20ABI, 'increaseAllowance'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"decreaseAllowance"`.
 */
export function usePrepareErc20DecreaseAllowance(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20ABI, 'decreaseAllowance'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20ABI,
    functionName: 'decreaseAllowance',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20ABI, 'decreaseAllowance'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc20ABI}__.
 */
export function useErc20Event<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof erc20ABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc20ABI,
    ...config,
  } as UseContractEventConfig<typeof erc20ABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc20ABI}__ and `eventName` set to `"Approval"`.
 */
export function useErc20ApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof erc20ABI, 'Approval'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc20ABI,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof erc20ABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc20ABI}__ and `eventName` set to `"Transfer"`.
 */
export function useErc20TransferEvent(
  config: Omit<
    UseContractEventConfig<typeof erc20ABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc20ABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof erc20ABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc6551RegistryABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x000000006551c19487814612e58FE06813775758)
 * -
 */
export function useErc6551RegistryRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof erc6551RegistryABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof erc6551RegistryABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address'
  > & { chainId?: keyof typeof erc6551RegistryAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: erc6551RegistryABI,
    address:
      erc6551RegistryAddress[chainId as keyof typeof erc6551RegistryAddress],
    ...config,
  } as UseContractReadConfig<
    typeof erc6551RegistryABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc6551RegistryABI}__ and `functionName` set to `"account"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x000000006551c19487814612e58FE06813775758)
 * -
 */
export function useErc6551RegistryAccount<
  TFunctionName extends 'account',
  TSelectData = ReadContractResult<typeof erc6551RegistryABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof erc6551RegistryABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof erc6551RegistryAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: erc6551RegistryABI,
    address:
      erc6551RegistryAddress[chainId as keyof typeof erc6551RegistryAddress],
    functionName: 'account',
    ...config,
  } as UseContractReadConfig<
    typeof erc6551RegistryABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc6551RegistryABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x000000006551c19487814612e58FE06813775758)
 * -
 */
export function useErc6551RegistryWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof erc6551RegistryAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc6551RegistryABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      > & { address?: Address; chainId?: TChainId }
    : UseContractWriteConfig<
        typeof erc6551RegistryABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof erc6551RegistryABI, TFunctionName, TMode>({
    abi: erc6551RegistryABI,
    address:
      erc6551RegistryAddress[chainId as keyof typeof erc6551RegistryAddress],
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc6551RegistryABI}__ and `functionName` set to `"createAccount"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x000000006551c19487814612e58FE06813775758)
 * -
 */
export function useErc6551RegistryCreateAccount<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof erc6551RegistryAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc6551RegistryABI,
          'createAccount'
        >['request']['abi'],
        'createAccount',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'createAccount'
      }
    : UseContractWriteConfig<
        typeof erc6551RegistryABI,
        'createAccount',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'createAccount'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof erc6551RegistryABI, 'createAccount', TMode>({
    abi: erc6551RegistryABI,
    address:
      erc6551RegistryAddress[chainId as keyof typeof erc6551RegistryAddress],
    functionName: 'createAccount',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc6551RegistryABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x000000006551c19487814612e58FE06813775758)
 * -
 */
export function usePrepareErc6551RegistryWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc6551RegistryABI, TFunctionName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof erc6551RegistryAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: erc6551RegistryABI,
    address:
      erc6551RegistryAddress[chainId as keyof typeof erc6551RegistryAddress],
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc6551RegistryABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc6551RegistryABI}__ and `functionName` set to `"createAccount"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x000000006551c19487814612e58FE06813775758)
 * -
 */
export function usePrepareErc6551RegistryCreateAccount(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc6551RegistryABI, 'createAccount'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof erc6551RegistryAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: erc6551RegistryABI,
    address:
      erc6551RegistryAddress[chainId as keyof typeof erc6551RegistryAddress],
    functionName: 'createAccount',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof erc6551RegistryABI,
    'createAccount'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc6551RegistryABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x000000006551c19487814612e58FE06813775758)
 * -
 */
export function useErc6551RegistryEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof erc6551RegistryABI, TEventName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof erc6551RegistryAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: erc6551RegistryABI,
    address:
      erc6551RegistryAddress[chainId as keyof typeof erc6551RegistryAddress],
    ...config,
  } as UseContractEventConfig<typeof erc6551RegistryABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc6551RegistryABI}__ and `eventName` set to `"ERC6551AccountCreated"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x000000006551c19487814612e58FE06813775758)
 * -
 */
export function useErc6551RegistryErc6551AccountCreatedEvent(
  config: Omit<
    UseContractEventConfig<typeof erc6551RegistryABI, 'ERC6551AccountCreated'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof erc6551RegistryAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: erc6551RegistryABI,
    address:
      erc6551RegistryAddress[chainId as keyof typeof erc6551RegistryAddress],
    eventName: 'ERC6551AccountCreated',
    ...config,
  } as UseContractEventConfig<
    typeof erc6551RegistryABI,
    'ERC6551AccountCreated'
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__.
 */
export function useErc721Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({ abi: erc721ABI, ...config } as UseContractReadConfig<
    typeof erc721ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useErc721BalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"getApproved"`.
 */
export function useErc721GetApproved<
  TFunctionName extends 'getApproved',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'getApproved',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"isApprovedForAll"`.
 */
export function useErc721IsApprovedForAll<
  TFunctionName extends 'isApprovedForAll',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'isApprovedForAll',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"name"`.
 */
export function useErc721Name<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"ownerOf"`.
 */
export function useErc721OwnerOf<
  TFunctionName extends 'ownerOf',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'ownerOf',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"symbol"`.
 */
export function useErc721Symbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'symbol',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"tokenByIndex"`.
 */
export function useErc721TokenByIndex<
  TFunctionName extends 'tokenByIndex',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'tokenByIndex',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"tokenURI"`.
 */
export function useErc721TokenUri<
  TFunctionName extends 'tokenURI',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'tokenURI',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"totalSupply"`.
 */
export function useErc721TotalSupply<
  TFunctionName extends 'totalSupply',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'totalSupply',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__.
 */
export function useErc721Write<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof erc721ABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof erc721ABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof erc721ABI, TFunctionName, TMode>({
    abi: erc721ABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"approve"`.
 */
export function useErc721Approve<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc721ABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof erc721ABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof erc721ABI, 'approve', TMode>({
    abi: erc721ABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function useErc721SafeTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc721ABI,
          'safeTransferFrom'
        >['request']['abi'],
        'safeTransferFrom',
        TMode
      > & { functionName?: 'safeTransferFrom' }
    : UseContractWriteConfig<typeof erc721ABI, 'safeTransferFrom', TMode> & {
        abi?: never
        functionName?: 'safeTransferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof erc721ABI, 'safeTransferFrom', TMode>({
    abi: erc721ABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function useErc721SetApprovalForAll<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc721ABI,
          'setApprovalForAll'
        >['request']['abi'],
        'setApprovalForAll',
        TMode
      > & { functionName?: 'setApprovalForAll' }
    : UseContractWriteConfig<typeof erc721ABI, 'setApprovalForAll', TMode> & {
        abi?: never
        functionName?: 'setApprovalForAll'
      } = {} as any,
) {
  return useContractWrite<typeof erc721ABI, 'setApprovalForAll', TMode>({
    abi: erc721ABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useErc721TransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc721ABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<typeof erc721ABI, 'transferFrom', TMode> & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof erc721ABI, 'transferFrom', TMode>({
    abi: erc721ABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__.
 */
export function usePrepareErc721Write<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc721ABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721ABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc721ABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareErc721Approve(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc721ABI, 'approve'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721ABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc721ABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function usePrepareErc721SafeTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc721ABI, 'safeTransferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721ABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc721ABI, 'safeTransferFrom'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function usePrepareErc721SetApprovalForAll(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc721ABI, 'setApprovalForAll'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721ABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc721ABI, 'setApprovalForAll'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareErc721TransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc721ABI, 'transferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721ABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc721ABI, 'transferFrom'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721ABI}__.
 */
export function useErc721Event<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof erc721ABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc721ABI,
    ...config,
  } as UseContractEventConfig<typeof erc721ABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721ABI}__ and `eventName` set to `"Approval"`.
 */
export function useErc721ApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof erc721ABI, 'Approval'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc721ABI,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof erc721ABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721ABI}__ and `eventName` set to `"ApprovalForAll"`.
 */
export function useErc721ApprovalForAllEvent(
  config: Omit<
    UseContractEventConfig<typeof erc721ABI, 'ApprovalForAll'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc721ABI,
    eventName: 'ApprovalForAll',
    ...config,
  } as UseContractEventConfig<typeof erc721ABI, 'ApprovalForAll'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721ABI}__ and `eventName` set to `"Transfer"`.
 */
export function useErc721TransferEvent(
  config: Omit<
    UseContractEventConfig<typeof erc721ABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc721ABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof erc721ABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc6551RegistryABI}__.
 */
export function useIerc6551RegistryRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof ierc6551RegistryABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc6551RegistryABI,
      TFunctionName,
      TSelectData
    >,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc6551RegistryABI,
    ...config,
  } as UseContractReadConfig<
    typeof ierc6551RegistryABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc6551RegistryABI}__ and `functionName` set to `"account"`.
 */
export function useIerc6551RegistryAccount<
  TFunctionName extends 'account',
  TSelectData = ReadContractResult<typeof ierc6551RegistryABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc6551RegistryABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc6551RegistryABI,
    functionName: 'account',
    ...config,
  } as UseContractReadConfig<
    typeof ierc6551RegistryABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc6551RegistryABI}__.
 */
export function useIerc6551RegistryWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc6551RegistryABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<
        typeof ierc6551RegistryABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof ierc6551RegistryABI, TFunctionName, TMode>({
    abi: ierc6551RegistryABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc6551RegistryABI}__ and `functionName` set to `"createAccount"`.
 */
export function useIerc6551RegistryCreateAccount<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc6551RegistryABI,
          'createAccount'
        >['request']['abi'],
        'createAccount',
        TMode
      > & { functionName?: 'createAccount' }
    : UseContractWriteConfig<
        typeof ierc6551RegistryABI,
        'createAccount',
        TMode
      > & {
        abi?: never
        functionName?: 'createAccount'
      } = {} as any,
) {
  return useContractWrite<typeof ierc6551RegistryABI, 'createAccount', TMode>({
    abi: ierc6551RegistryABI,
    functionName: 'createAccount',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc6551RegistryABI}__.
 */
export function usePrepareIerc6551RegistryWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc6551RegistryABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc6551RegistryABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc6551RegistryABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc6551RegistryABI}__ and `functionName` set to `"createAccount"`.
 */
export function usePrepareIerc6551RegistryCreateAccount(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc6551RegistryABI, 'createAccount'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc6551RegistryABI,
    functionName: 'createAccount',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof ierc6551RegistryABI,
    'createAccount'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc6551RegistryABI}__.
 */
export function useIerc6551RegistryEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof ierc6551RegistryABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc6551RegistryABI,
    ...config,
  } as UseContractEventConfig<typeof ierc6551RegistryABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc6551RegistryABI}__ and `eventName` set to `"ERC6551AccountCreated"`.
 */
export function useIerc6551RegistryErc6551AccountCreatedEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc6551RegistryABI, 'ERC6551AccountCreated'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc6551RegistryABI,
    eventName: 'ERC6551AccountCreated',
    ...config,
  } as UseContractEventConfig<
    typeof ierc6551RegistryABI,
    'ERC6551AccountCreated'
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mapABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x39Bd51dF4995C9eC14a16c15e4D832B3dd42D339)
 * -
 */
export function useMapRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof mapABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mapABI, TFunctionName, TSelectData>,
    'abi' | 'address'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    ...config,
  } as UseContractReadConfig<typeof mapABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x39Bd51dF4995C9eC14a16c15e4D832B3dd42D339)
 * -
 */
export function useMapDefaultAdminRole<
  TFunctionName extends 'DEFAULT_ADMIN_ROLE',
  TSelectData = ReadContractResult<typeof mapABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mapABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'DEFAULT_ADMIN_ROLE',
    ...config,
  } as UseContractReadConfig<typeof mapABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"TILE_CREATOR"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x39Bd51dF4995C9eC14a16c15e4D832B3dd42D339)
 * -
 */
export function useMapTileCreator<
  TFunctionName extends 'TILE_CREATOR',
  TSelectData = ReadContractResult<typeof mapABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mapABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'TILE_CREATOR',
    ...config,
  } as UseContractReadConfig<typeof mapABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"computeLocalRecord"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x39Bd51dF4995C9eC14a16c15e4D832B3dd42D339)
 * -
 */
export function useMapComputeLocalRecord<
  TFunctionName extends 'computeLocalRecord',
  TSelectData = ReadContractResult<typeof mapABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mapABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'computeLocalRecord',
    ...config,
  } as UseContractReadConfig<typeof mapABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"computeRecordTileAddress"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x39Bd51dF4995C9eC14a16c15e4D832B3dd42D339)
 * -
 */
export function useMapComputeRecordTileAddress<
  TFunctionName extends 'computeRecordTileAddress',
  TSelectData = ReadContractResult<typeof mapABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mapABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'computeRecordTileAddress',
    ...config,
  } as UseContractReadConfig<typeof mapABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"getRoleAdmin"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x39Bd51dF4995C9eC14a16c15e4D832B3dd42D339)
 * -
 */
export function useMapGetRoleAdmin<
  TFunctionName extends 'getRoleAdmin',
  TSelectData = ReadContractResult<typeof mapABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mapABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'getRoleAdmin',
    ...config,
  } as UseContractReadConfig<typeof mapABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"hasRole"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x39Bd51dF4995C9eC14a16c15e4D832B3dd42D339)
 * -
 */
export function useMapHasRole<
  TFunctionName extends 'hasRole',
  TSelectData = ReadContractResult<typeof mapABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mapABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'hasRole',
    ...config,
  } as UseContractReadConfig<typeof mapABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"proxiableUUID"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x39Bd51dF4995C9eC14a16c15e4D832B3dd42D339)
 * -
 */
export function useMapProxiableUuid<
  TFunctionName extends 'proxiableUUID',
  TSelectData = ReadContractResult<typeof mapABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mapABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'proxiableUUID',
    ...config,
  } as UseContractReadConfig<typeof mapABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"supportsInterface"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x39Bd51dF4995C9eC14a16c15e4D832B3dd42D339)
 * -
 */
export function useMapSupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof mapABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mapABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<typeof mapABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mapABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x39Bd51dF4995C9eC14a16c15e4D832B3dd42D339)
 * -
 */
export function useMapWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof mapAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof mapABI, string>['request']['abi'],
        TFunctionName,
        TMode
      > & { address?: Address; chainId?: TChainId }
    : UseContractWriteConfig<typeof mapABI, TFunctionName, TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof mapABI, TFunctionName, TMode>({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"__ERC6551AccountCreator__init"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x39Bd51dF4995C9eC14a16c15e4D832B3dd42D339)
 * -
 */
export function useMapErc6551AccountCreatorInit<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof mapAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mapABI,
          '__ERC6551AccountCreator__init'
        >['request']['abi'],
        '__ERC6551AccountCreator__init',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: '__ERC6551AccountCreator__init'
      }
    : UseContractWriteConfig<
        typeof mapABI,
        '__ERC6551AccountCreator__init',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: '__ERC6551AccountCreator__init'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<
    typeof mapABI,
    '__ERC6551AccountCreator__init',
    TMode
  >({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: '__ERC6551AccountCreator__init',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"__RecordTileFactory__init"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x39Bd51dF4995C9eC14a16c15e4D832B3dd42D339)
 * -
 */
export function useMapRecordTileFactoryInit<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof mapAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mapABI,
          '__RecordTileFactory__init'
        >['request']['abi'],
        '__RecordTileFactory__init',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: '__RecordTileFactory__init'
      }
    : UseContractWriteConfig<
        typeof mapABI,
        '__RecordTileFactory__init',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: '__RecordTileFactory__init'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof mapABI, '__RecordTileFactory__init', TMode>({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: '__RecordTileFactory__init',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"createState"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x39Bd51dF4995C9eC14a16c15e4D832B3dd42D339)
 * -
 */
export function useMapCreateState<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof mapAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mapABI,
          'createState'
        >['request']['abi'],
        'createState',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'createState'
      }
    : UseContractWriteConfig<typeof mapABI, 'createState', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'createState'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof mapABI, 'createState', TMode>({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'createState',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"grantRole"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x39Bd51dF4995C9eC14a16c15e4D832B3dd42D339)
 * -
 */
export function useMapGrantRole<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof mapAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mapABI,
          'grantRole'
        >['request']['abi'],
        'grantRole',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'grantRole' }
    : UseContractWriteConfig<typeof mapABI, 'grantRole', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'grantRole'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof mapABI, 'grantRole', TMode>({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'grantRole',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"initialize"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x39Bd51dF4995C9eC14a16c15e4D832B3dd42D339)
 * -
 */
export function useMapInitialize<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof mapAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mapABI,
          'initialize'
        >['request']['abi'],
        'initialize',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'initialize' }
    : UseContractWriteConfig<typeof mapABI, 'initialize', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'initialize'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof mapABI, 'initialize', TMode>({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'initialize',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"move"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x39Bd51dF4995C9eC14a16c15e4D832B3dd42D339)
 * -
 */
export function useMapMove<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof mapAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof mapABI, 'move'>['request']['abi'],
        'move',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'move' }
    : UseContractWriteConfig<typeof mapABI, 'move', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'move'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof mapABI, 'move', TMode>({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'move',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"renounceRole"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x39Bd51dF4995C9eC14a16c15e4D832B3dd42D339)
 * -
 */
export function useMapRenounceRole<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof mapAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mapABI,
          'renounceRole'
        >['request']['abi'],
        'renounceRole',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'renounceRole'
      }
    : UseContractWriteConfig<typeof mapABI, 'renounceRole', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'renounceRole'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof mapABI, 'renounceRole', TMode>({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'renounceRole',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"revokeRole"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x39Bd51dF4995C9eC14a16c15e4D832B3dd42D339)
 * -
 */
export function useMapRevokeRole<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof mapAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mapABI,
          'revokeRole'
        >['request']['abi'],
        'revokeRole',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'revokeRole' }
    : UseContractWriteConfig<typeof mapABI, 'revokeRole', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'revokeRole'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof mapABI, 'revokeRole', TMode>({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'revokeRole',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"upgradeTo"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x39Bd51dF4995C9eC14a16c15e4D832B3dd42D339)
 * -
 */
export function useMapUpgradeTo<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof mapAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mapABI,
          'upgradeTo'
        >['request']['abi'],
        'upgradeTo',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'upgradeTo' }
    : UseContractWriteConfig<typeof mapABI, 'upgradeTo', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'upgradeTo'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof mapABI, 'upgradeTo', TMode>({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'upgradeTo',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"upgradeToAndCall"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x39Bd51dF4995C9eC14a16c15e4D832B3dd42D339)
 * -
 */
export function useMapUpgradeToAndCall<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof mapAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mapABI,
          'upgradeToAndCall'
        >['request']['abi'],
        'upgradeToAndCall',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'upgradeToAndCall'
      }
    : UseContractWriteConfig<typeof mapABI, 'upgradeToAndCall', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'upgradeToAndCall'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof mapABI, 'upgradeToAndCall', TMode>({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'upgradeToAndCall',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mapABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x39Bd51dF4995C9eC14a16c15e4D832B3dd42D339)
 * -
 */
export function usePrepareMapWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mapABI, TFunctionName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    ...config,
  } as UsePrepareContractWriteConfig<typeof mapABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"__ERC6551AccountCreator__init"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x39Bd51dF4995C9eC14a16c15e4D832B3dd42D339)
 * -
 */
export function usePrepareMapErc6551AccountCreatorInit(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof mapABI,
      '__ERC6551AccountCreator__init'
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: '__ERC6551AccountCreator__init',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof mapABI,
    '__ERC6551AccountCreator__init'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"__RecordTileFactory__init"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x39Bd51dF4995C9eC14a16c15e4D832B3dd42D339)
 * -
 */
export function usePrepareMapRecordTileFactoryInit(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mapABI, '__RecordTileFactory__init'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: '__RecordTileFactory__init',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof mapABI,
    '__RecordTileFactory__init'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"createState"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x39Bd51dF4995C9eC14a16c15e4D832B3dd42D339)
 * -
 */
export function usePrepareMapCreateState(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mapABI, 'createState'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'createState',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mapABI, 'createState'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"grantRole"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x39Bd51dF4995C9eC14a16c15e4D832B3dd42D339)
 * -
 */
export function usePrepareMapGrantRole(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mapABI, 'grantRole'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'grantRole',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mapABI, 'grantRole'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"initialize"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x39Bd51dF4995C9eC14a16c15e4D832B3dd42D339)
 * -
 */
export function usePrepareMapInitialize(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mapABI, 'initialize'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'initialize',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mapABI, 'initialize'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"move"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x39Bd51dF4995C9eC14a16c15e4D832B3dd42D339)
 * -
 */
export function usePrepareMapMove(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mapABI, 'move'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'move',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mapABI, 'move'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"renounceRole"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x39Bd51dF4995C9eC14a16c15e4D832B3dd42D339)
 * -
 */
export function usePrepareMapRenounceRole(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mapABI, 'renounceRole'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'renounceRole',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mapABI, 'renounceRole'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"revokeRole"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x39Bd51dF4995C9eC14a16c15e4D832B3dd42D339)
 * -
 */
export function usePrepareMapRevokeRole(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mapABI, 'revokeRole'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'revokeRole',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mapABI, 'revokeRole'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"upgradeTo"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x39Bd51dF4995C9eC14a16c15e4D832B3dd42D339)
 * -
 */
export function usePrepareMapUpgradeTo(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mapABI, 'upgradeTo'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'upgradeTo',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mapABI, 'upgradeTo'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"upgradeToAndCall"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x39Bd51dF4995C9eC14a16c15e4D832B3dd42D339)
 * -
 */
export function usePrepareMapUpgradeToAndCall(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mapABI, 'upgradeToAndCall'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'upgradeToAndCall',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mapABI, 'upgradeToAndCall'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mapABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x39Bd51dF4995C9eC14a16c15e4D832B3dd42D339)
 * -
 */
export function useMapEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof mapABI, TEventName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    ...config,
  } as UseContractEventConfig<typeof mapABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mapABI}__ and `eventName` set to `"AdminChanged"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x39Bd51dF4995C9eC14a16c15e4D832B3dd42D339)
 * -
 */
export function useMapAdminChangedEvent(
  config: Omit<
    UseContractEventConfig<typeof mapABI, 'AdminChanged'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    eventName: 'AdminChanged',
    ...config,
  } as UseContractEventConfig<typeof mapABI, 'AdminChanged'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mapABI}__ and `eventName` set to `"BeaconUpgraded"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x39Bd51dF4995C9eC14a16c15e4D832B3dd42D339)
 * -
 */
export function useMapBeaconUpgradedEvent(
  config: Omit<
    UseContractEventConfig<typeof mapABI, 'BeaconUpgraded'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    eventName: 'BeaconUpgraded',
    ...config,
  } as UseContractEventConfig<typeof mapABI, 'BeaconUpgraded'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mapABI}__ and `eventName` set to `"Initialized"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x39Bd51dF4995C9eC14a16c15e4D832B3dd42D339)
 * -
 */
export function useMapInitializedEvent(
  config: Omit<
    UseContractEventConfig<typeof mapABI, 'Initialized'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    eventName: 'Initialized',
    ...config,
  } as UseContractEventConfig<typeof mapABI, 'Initialized'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mapABI}__ and `eventName` set to `"LocalRecordDeployed"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x39Bd51dF4995C9eC14a16c15e4D832B3dd42D339)
 * -
 */
export function useMapLocalRecordDeployedEvent(
  config: Omit<
    UseContractEventConfig<typeof mapABI, 'LocalRecordDeployed'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    eventName: 'LocalRecordDeployed',
    ...config,
  } as UseContractEventConfig<typeof mapABI, 'LocalRecordDeployed'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mapABI}__ and `eventName` set to `"LocalRecordTokenDeployed"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x39Bd51dF4995C9eC14a16c15e4D832B3dd42D339)
 * -
 */
export function useMapLocalRecordTokenDeployedEvent(
  config: Omit<
    UseContractEventConfig<typeof mapABI, 'LocalRecordTokenDeployed'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    eventName: 'LocalRecordTokenDeployed',
    ...config,
  } as UseContractEventConfig<typeof mapABI, 'LocalRecordTokenDeployed'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mapABI}__ and `eventName` set to `"RoleAdminChanged"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x39Bd51dF4995C9eC14a16c15e4D832B3dd42D339)
 * -
 */
export function useMapRoleAdminChangedEvent(
  config: Omit<
    UseContractEventConfig<typeof mapABI, 'RoleAdminChanged'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    eventName: 'RoleAdminChanged',
    ...config,
  } as UseContractEventConfig<typeof mapABI, 'RoleAdminChanged'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mapABI}__ and `eventName` set to `"RoleGranted"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x39Bd51dF4995C9eC14a16c15e4D832B3dd42D339)
 * -
 */
export function useMapRoleGrantedEvent(
  config: Omit<
    UseContractEventConfig<typeof mapABI, 'RoleGranted'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    eventName: 'RoleGranted',
    ...config,
  } as UseContractEventConfig<typeof mapABI, 'RoleGranted'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mapABI}__ and `eventName` set to `"RoleRevoked"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x39Bd51dF4995C9eC14a16c15e4D832B3dd42D339)
 * -
 */
export function useMapRoleRevokedEvent(
  config: Omit<
    UseContractEventConfig<typeof mapABI, 'RoleRevoked'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    eventName: 'RoleRevoked',
    ...config,
  } as UseContractEventConfig<typeof mapABI, 'RoleRevoked'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mapABI}__ and `eventName` set to `"TileCreated"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x39Bd51dF4995C9eC14a16c15e4D832B3dd42D339)
 * -
 */
export function useMapTileCreatedEvent(
  config: Omit<
    UseContractEventConfig<typeof mapABI, 'TileCreated'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    eventName: 'TileCreated',
    ...config,
  } as UseContractEventConfig<typeof mapABI, 'TileCreated'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mapABI}__ and `eventName` set to `"Upgraded"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x39Bd51dF4995C9eC14a16c15e4D832B3dd42D339)
 * -
 */
export function useMapUpgradedEvent(
  config: Omit<
    UseContractEventConfig<typeof mapABI, 'Upgraded'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    eventName: 'Upgraded',
    ...config,
  } as UseContractEventConfig<typeof mapABI, 'Upgraded'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stateTileABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x1837faFcbc3E53479E05bAd424a2d477cbc94836)
 * -
 */
export function useStateTileRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof stateTileABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stateTileABI, TFunctionName, TSelectData>,
    'abi' | 'address'
  > & { chainId?: keyof typeof stateTileAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    ...config,
  } as UseContractReadConfig<typeof stateTileABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stateTileABI}__ and `functionName` set to `"accountPosition"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x1837faFcbc3E53479E05bAd424a2d477cbc94836)
 * -
 */
export function useStateTileAccountPosition<
  TFunctionName extends 'accountPosition',
  TSelectData = ReadContractResult<typeof stateTileABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stateTileABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stateTileAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    functionName: 'accountPosition',
    ...config,
  } as UseContractReadConfig<typeof stateTileABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stateTileABI}__ and `functionName` set to `"balanceOf"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x1837faFcbc3E53479E05bAd424a2d477cbc94836)
 * -
 */
export function useStateTileBalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof stateTileABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stateTileABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stateTileAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<typeof stateTileABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stateTileABI}__ and `functionName` set to `"balanceOfBatch"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x1837faFcbc3E53479E05bAd424a2d477cbc94836)
 * -
 */
export function useStateTileBalanceOfBatch<
  TFunctionName extends 'balanceOfBatch',
  TSelectData = ReadContractResult<typeof stateTileABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stateTileABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stateTileAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    functionName: 'balanceOfBatch',
    ...config,
  } as UseContractReadConfig<typeof stateTileABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stateTileABI}__ and `functionName` set to `"isApprovedForAll"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x1837faFcbc3E53479E05bAd424a2d477cbc94836)
 * -
 */
export function useStateTileIsApprovedForAll<
  TFunctionName extends 'isApprovedForAll',
  TSelectData = ReadContractResult<typeof stateTileABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stateTileABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stateTileAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    functionName: 'isApprovedForAll',
    ...config,
  } as UseContractReadConfig<typeof stateTileABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stateTileABI}__ and `functionName` set to `"map"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x1837faFcbc3E53479E05bAd424a2d477cbc94836)
 * -
 */
export function useStateTileMap<
  TFunctionName extends 'map',
  TSelectData = ReadContractResult<typeof stateTileABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stateTileABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stateTileAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    functionName: 'map',
    ...config,
  } as UseContractReadConfig<typeof stateTileABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stateTileABI}__ and `functionName` set to `"supportsInterface"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x1837faFcbc3E53479E05bAd424a2d477cbc94836)
 * -
 */
export function useStateTileSupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof stateTileABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stateTileABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stateTileAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<typeof stateTileABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stateTileABI}__ and `functionName` set to `"uri"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x1837faFcbc3E53479E05bAd424a2d477cbc94836)
 * -
 */
export function useStateTileUri<
  TFunctionName extends 'uri',
  TSelectData = ReadContractResult<typeof stateTileABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stateTileABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stateTileAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    functionName: 'uri',
    ...config,
  } as UseContractReadConfig<typeof stateTileABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stateTileABI}__ and `functionName` set to `"verifier"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x1837faFcbc3E53479E05bAd424a2d477cbc94836)
 * -
 */
export function useStateTileVerifier<
  TFunctionName extends 'verifier',
  TSelectData = ReadContractResult<typeof stateTileABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stateTileABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stateTileAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    functionName: 'verifier',
    ...config,
  } as UseContractReadConfig<typeof stateTileABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link stateTileABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x1837faFcbc3E53479E05bAd424a2d477cbc94836)
 * -
 */
export function useStateTileWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof stateTileAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof stateTileABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      > & { address?: Address; chainId?: TChainId }
    : UseContractWriteConfig<typeof stateTileABI, TFunctionName, TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof stateTileABI, TFunctionName, TMode>({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link stateTileABI}__ and `functionName` set to `"initialize"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x1837faFcbc3E53479E05bAd424a2d477cbc94836)
 * -
 */
export function useStateTileInitialize<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof stateTileAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof stateTileABI,
          'initialize'
        >['request']['abi'],
        'initialize',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'initialize' }
    : UseContractWriteConfig<typeof stateTileABI, 'initialize', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'initialize'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof stateTileABI, 'initialize', TMode>({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    functionName: 'initialize',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link stateTileABI}__ and `functionName` set to `"move"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x1837faFcbc3E53479E05bAd424a2d477cbc94836)
 * -
 */
export function useStateTileMove<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof stateTileAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof stateTileABI,
          'move'
        >['request']['abi'],
        'move',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'move' }
    : UseContractWriteConfig<typeof stateTileABI, 'move', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'move'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof stateTileABI, 'move', TMode>({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    functionName: 'move',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link stateTileABI}__ and `functionName` set to `"safeBatchTransferFrom"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x1837faFcbc3E53479E05bAd424a2d477cbc94836)
 * -
 */
export function useStateTileSafeBatchTransferFrom<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof stateTileAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof stateTileABI,
          'safeBatchTransferFrom'
        >['request']['abi'],
        'safeBatchTransferFrom',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'safeBatchTransferFrom'
      }
    : UseContractWriteConfig<
        typeof stateTileABI,
        'safeBatchTransferFrom',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'safeBatchTransferFrom'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof stateTileABI, 'safeBatchTransferFrom', TMode>({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    functionName: 'safeBatchTransferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link stateTileABI}__ and `functionName` set to `"safeTransferFrom"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x1837faFcbc3E53479E05bAd424a2d477cbc94836)
 * -
 */
export function useStateTileSafeTransferFrom<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof stateTileAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof stateTileABI,
          'safeTransferFrom'
        >['request']['abi'],
        'safeTransferFrom',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'safeTransferFrom'
      }
    : UseContractWriteConfig<typeof stateTileABI, 'safeTransferFrom', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'safeTransferFrom'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof stateTileABI, 'safeTransferFrom', TMode>({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    functionName: 'safeTransferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link stateTileABI}__ and `functionName` set to `"setApprovalForAll"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x1837faFcbc3E53479E05bAd424a2d477cbc94836)
 * -
 */
export function useStateTileSetApprovalForAll<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof stateTileAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof stateTileABI,
          'setApprovalForAll'
        >['request']['abi'],
        'setApprovalForAll',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'setApprovalForAll'
      }
    : UseContractWriteConfig<
        typeof stateTileABI,
        'setApprovalForAll',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setApprovalForAll'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof stateTileABI, 'setApprovalForAll', TMode>({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    functionName: 'setApprovalForAll',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link stateTileABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x1837faFcbc3E53479E05bAd424a2d477cbc94836)
 * -
 */
export function usePrepareStateTileWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof stateTileABI, TFunctionName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof stateTileAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    ...config,
  } as UsePrepareContractWriteConfig<typeof stateTileABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link stateTileABI}__ and `functionName` set to `"initialize"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x1837faFcbc3E53479E05bAd424a2d477cbc94836)
 * -
 */
export function usePrepareStateTileInitialize(
  config: Omit<
    UsePrepareContractWriteConfig<typeof stateTileABI, 'initialize'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stateTileAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    functionName: 'initialize',
    ...config,
  } as UsePrepareContractWriteConfig<typeof stateTileABI, 'initialize'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link stateTileABI}__ and `functionName` set to `"move"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x1837faFcbc3E53479E05bAd424a2d477cbc94836)
 * -
 */
export function usePrepareStateTileMove(
  config: Omit<
    UsePrepareContractWriteConfig<typeof stateTileABI, 'move'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stateTileAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    functionName: 'move',
    ...config,
  } as UsePrepareContractWriteConfig<typeof stateTileABI, 'move'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link stateTileABI}__ and `functionName` set to `"safeBatchTransferFrom"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x1837faFcbc3E53479E05bAd424a2d477cbc94836)
 * -
 */
export function usePrepareStateTileSafeBatchTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof stateTileABI, 'safeBatchTransferFrom'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stateTileAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    functionName: 'safeBatchTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof stateTileABI,
    'safeBatchTransferFrom'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link stateTileABI}__ and `functionName` set to `"safeTransferFrom"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x1837faFcbc3E53479E05bAd424a2d477cbc94836)
 * -
 */
export function usePrepareStateTileSafeTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof stateTileABI, 'safeTransferFrom'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stateTileAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    functionName: 'safeTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof stateTileABI, 'safeTransferFrom'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link stateTileABI}__ and `functionName` set to `"setApprovalForAll"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x1837faFcbc3E53479E05bAd424a2d477cbc94836)
 * -
 */
export function usePrepareStateTileSetApprovalForAll(
  config: Omit<
    UsePrepareContractWriteConfig<typeof stateTileABI, 'setApprovalForAll'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stateTileAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    functionName: 'setApprovalForAll',
    ...config,
  } as UsePrepareContractWriteConfig<typeof stateTileABI, 'setApprovalForAll'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link stateTileABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x1837faFcbc3E53479E05bAd424a2d477cbc94836)
 * -
 */
export function useStateTileEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof stateTileABI, TEventName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof stateTileAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    ...config,
  } as UseContractEventConfig<typeof stateTileABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link stateTileABI}__ and `eventName` set to `"ApprovalForAll"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x1837faFcbc3E53479E05bAd424a2d477cbc94836)
 * -
 */
export function useStateTileApprovalForAllEvent(
  config: Omit<
    UseContractEventConfig<typeof stateTileABI, 'ApprovalForAll'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof stateTileAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    eventName: 'ApprovalForAll',
    ...config,
  } as UseContractEventConfig<typeof stateTileABI, 'ApprovalForAll'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link stateTileABI}__ and `eventName` set to `"Initialized"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x1837faFcbc3E53479E05bAd424a2d477cbc94836)
 * -
 */
export function useStateTileInitializedEvent(
  config: Omit<
    UseContractEventConfig<typeof stateTileABI, 'Initialized'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof stateTileAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    eventName: 'Initialized',
    ...config,
  } as UseContractEventConfig<typeof stateTileABI, 'Initialized'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link stateTileABI}__ and `eventName` set to `"StateMove"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x1837faFcbc3E53479E05bAd424a2d477cbc94836)
 * -
 */
export function useStateTileStateMoveEvent(
  config: Omit<
    UseContractEventConfig<typeof stateTileABI, 'StateMove'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof stateTileAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    eventName: 'StateMove',
    ...config,
  } as UseContractEventConfig<typeof stateTileABI, 'StateMove'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link stateTileABI}__ and `eventName` set to `"TransferBatch"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x1837faFcbc3E53479E05bAd424a2d477cbc94836)
 * -
 */
export function useStateTileTransferBatchEvent(
  config: Omit<
    UseContractEventConfig<typeof stateTileABI, 'TransferBatch'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof stateTileAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    eventName: 'TransferBatch',
    ...config,
  } as UseContractEventConfig<typeof stateTileABI, 'TransferBatch'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link stateTileABI}__ and `eventName` set to `"TransferSingle"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x1837faFcbc3E53479E05bAd424a2d477cbc94836)
 * -
 */
export function useStateTileTransferSingleEvent(
  config: Omit<
    UseContractEventConfig<typeof stateTileABI, 'TransferSingle'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof stateTileAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    eventName: 'TransferSingle',
    ...config,
  } as UseContractEventConfig<typeof stateTileABI, 'TransferSingle'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link stateTileABI}__ and `eventName` set to `"URI"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x1837faFcbc3E53479E05bAd424a2d477cbc94836)
 * -
 */
export function useStateTileUriEvent(
  config: Omit<
    UseContractEventConfig<typeof stateTileABI, 'URI'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof stateTileAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    eventName: 'URI',
    ...config,
  } as UseContractEventConfig<typeof stateTileABI, 'URI'>)
}

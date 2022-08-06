import { BigNumber } from "bignumber.js"

export let net = "testnet";

export const REQUEST_ENDPOINT = "https://seashell-app-cmf7v.ondigitalocean.app/";

export const balanceInfo: BigNumber[] = [
  new BigNumber(0), new BigNumber(0), new BigNumber(0), new BigNumber(0),
  new BigNumber(0), new BigNumber(0), new BigNumber(0), new BigNumber(0)];
export const priceInfo = [1, 1, 1, 1, 1, 1, 1, 0.18];
export const totalRewards = [0, 0, 0, 0, 0, 0, 0];

export const farmInfo = {
  account: '',
  amount: '0'
}

export const userInfo = {
  amount: "0",
  deposit_time: "0",
  reward_amount: "0",
  account: ""
}
export const userInfos = [userInfo, userInfo, userInfo, userInfo, userInfo, userInfo, userInfo, userInfo ]

export const potInfo = {
  account: "",
  amount: "0",
  qualified_amount: "0",
}
export const potInfos = [potInfo, potInfo, potInfo, potInfo, potInfo, potInfo, potInfo, potInfo ]

export const amountHistory = [
  {
    time: 1641281704,
    amount: totalRewards,
    reward: totalRewards,
    totalUSD: new BigNumber(0.0001),
  },
  {
    time: 1641281704,
    amount: totalRewards,
    reward: totalRewards,
    totalUSD: new BigNumber(0.0001),
  },
];

export const successOption: any = {
  position: "bottom-right",
  type: "success",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  // pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const errorOption: any = {
  position: "bottom-right",
  type: "error",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  // pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const StableCoins=[
  {
    name: 'USDC',
    id: 'usd-coin',
    description: 'USD Coin',
    avatar: 'Usdc.svg',
    apy: 23.97,
    apr: 21.4985,
    decimals: 6,
    stable: true,
    upcoming: false,
    address: "ft.alenzertest.testnet",
  },
  {
    name: 'USDT',
    id: 'tether',
    description: 'USD Tether',
    avatar: 'Usdt.svg',
    apy: 23.97,
    apr: 21.4985,
    decimals: 6,
    stable: true,
    upcoming: false,
    address: "other.alenzertest.testnet",
  },
  {
    name: 'DAI',
    id: 'dai',
    description: 'Dai',
    avatar: 'Dai.svg',
    apy: 23.97,
    apr: 21.4985,
    decimals: 18,
    stable: true,
    upcoming: false,
    address: "other.alenzertest.testnet",
  },
  {
    name: 'USN',
    id: 'usn',
    description: 'USD NEAR',
    avatar: 'Usn.svg',
    apy: 23.97,
    apr: 21.4985,
    decimals: 18,
    stable: true,
    upcoming: false,
    address: "other.alenzertest.testnet",
  },
  {
    name: 'wBTC',
    id: 'wrapped-bitcoin',
    description: 'Wrapped Bitcoin',
    avatar: 'Wbtc.svg',
    apy: 9.15,
    apr: 8.76,
    decimals: 8,
    stable: false,
    upcoming: false,
    address: "other.alenzertest.testnet",
  },
  {
    name: 'ETH',
    id: 'ethereum',
    description: 'Ethereum',
    avatar: 'Eth.png',
    apy: 9.15,
    apr: 8.76,
    decimals: 18,
    stable: false,
    upcoming: false,
    address: "other.alenzertest.testnet",
  },
  {
    name: 'wNEAR',
    id: 'wrapped-near',
    description: 'Wrapped Near',
    avatar: 'Wnear.svg',
    apy: 14.61,
    apr: 13.651,
    decimals: 24,
    stable: false,
    upcoming: false,
    address: "wrap.testnet",
  },
  {
    name: 'NEARt',
    description: 'Near Treasury (Cooming Soon)',
    avatar: 'Neart.svg',
    apy: 0,
    apr: 0,
    decimals: 6,
    stable: false,
    upcoming: true
  }
]

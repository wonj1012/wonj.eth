import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';
import { cookieStorage, createStorage } from 'wagmi';
import {
  mainnet,
  arbitrum,
  polygon,
  optimism,
  avalanche,
  bsc,
  holesky,
  sepolia,
} from 'wagmi/chains';

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) throw new Error('Project ID is not defined');

const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal for Wonj',
  url: 'https://wonj.me',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

const chains = [
  mainnet,
  arbitrum,
  polygon,
  optimism,
  avalanche,
  bsc,
  holesky,
  sepolia,
];

export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
});

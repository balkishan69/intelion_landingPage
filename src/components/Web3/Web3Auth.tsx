import React from 'react';
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi';
import { WagmiProvider, useAccount, useConnect } from 'wagmi';
import { mainnet, polygon } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Use a default project ID for development - replace with your own in production
const projectId = process.env.VITE_WALLET_CONNECT_PROJECT_ID || 'DEFAULT_PROJECT_ID';

const metadata = {
  name: 'Intelion',
  description: 'Intelion Web3 Authentication',
  url: 'https://intelion.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
};

const chains = [mainnet, polygon];
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  enableWalletConnect: true,
  enableInjected: true,
  enableEIP6963: true,
  enableCoinbase: true,
});

const queryClient = new QueryClient();

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  chains,
  enableAnalytics: true,
  defaultChain: mainnet,
});

const ConnectButton: React.FC = () => {
  const { isConnected, address } = useAccount();
  const { connect } = useConnect();

  return (
    <div className="flex flex-col items-center space-y-4">
      <button
        onClick={() => connect()}
        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
      >
        {isConnected ? 'Connected' : 'Connect Wallet'}
      </button>
      {isConnected && address && (
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Connected: {address.slice(0, 6)}...{address.slice(-4)}
        </p>
      )}
    </div>
  );
};

const Web3Auth: React.FC = () => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectButton />
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default Web3Auth;
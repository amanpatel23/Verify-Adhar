// import { http, createConfig } from "wagmi";
// import { sepolia } from "viem/chains";
// import { walletConnect } from "wagmi/connectors";

// const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "";

// const metadata = {
//   name: "Anon Aadhaar",
//   description: "Example voting app",
//   url: "https://localhost:3000/",
//   icons: ["https://avatars.githubusercontent.com/u/37784886"],
// };

// export const wagmiConfig = createConfig({
//   chains: [sepolia],
//   connectors: [
//     walletConnect({
//       projectId,
//       metadata,
//     }),
//   ],
//   transports: {
//     [sepolia.id]: http(),
//   },
// });

import { http, createConfig } from "wagmi";
import { walletConnect } from "wagmi/connectors";
import { Chain } from "wagmi/chains";

// Define the Sepolia chain with all required properties
const sepolia: Chain = {
  id: 11155111,
  name: "Sepolia",
  network: "sepolia",
  nativeCurrency: {
    name: "SepoliaETH",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.sepolia.org'],
    },
    public: {
      http: [],
      webSocket: undefined
    }
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://sepolia.etherscan.io",
    },
  },
  contracts: {},
};

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "";

const metadata = {
  name: "Anon Aadhaar",
  description: "Example voting app",
  url: "https://localhost:3000/",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

export const wagmiConfig = createConfig({
  chains: [sepolia],
  connectors: [
    walletConnect({
      projectId,
      metadata,
    }),
  ],
  transports: {
    [sepolia.id]: http(),
  },
});

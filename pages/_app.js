import Script from "next/script";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import {
	WagmiConfig,
	createClient,
	defaultChains,
	configureChains,
	webSocketProvider,
} from "wagmi";

import "../styles/globals.css";

// Set up connectors
const { chains, provider } = configureChains(defaultChains, [
	alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID }),
]);

const client = createClient({
	connectors: [
		new MetaMaskConnector({ chains }),
		new CoinbaseWalletConnector({
			chains,
			options: {
				appName: "wagmi",
			},
		}),
		new WalletConnectConnector({
			chains,
			options: {
				qrcode: true,
			},
		}),
	],
	provider,
	webSocketProvider,
});

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Script
				strategy="lazyOnload"
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
			/>
			<Script strategy="lazyOnload">
				{`window.dataLayer = window.dataLayer || [];
  				function gtag(){dataLayer.push(arguments);}
  				gtag('js', new Date());

  				gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');`}
			</Script>
			<WagmiConfig client={client}>
				<Component {...pageProps} />
			</WagmiConfig>
		</>
	);
}

export default MyApp;

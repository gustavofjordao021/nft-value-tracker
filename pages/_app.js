import Script from "next/script";
import { providers } from "ethers";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { Provider, chain, defaultChains } from "wagmi";

import "../styles/globals.css";

// Get environment variables
const infuraId = process.env.NEXT_PUBLIC_INFURA_ID;
const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_ID;
const etherscanId = process.env.NEXT_PUBLIC_ETHERSCAN_ID;

// Pick chains
const chains = defaultChains;
const defaultChain = chain.mainnet;

// Set up connectors
const connectors = ({ chainId }) => {
	const rpcUrl =
		chains.find((x) => x.id === chainId)?.rpcUrls?.[0] ??
		defaultChain.rpcUrls[0];
	return [
		new InjectedConnector({ chains }),
		new WalletConnectConnector({
			chains,
			options: {
				infuraId,
				alchemyId,
				etherscanId,
				qrcode: true,
			},
		}),
	];
};

// Set up providers
const isChainSupported = (chainId) => chains.some((x) => x.id === chainId);

const provider = ({ chainId }) =>
	providers.getDefaultProvider(
		isChainSupported(chainId) ? chainId : defaultChain.id,
		{
			infuraId,
			alchemyId,
			etherscanId,
		}
	);
const webSocketProvider = ({ chainId }) =>
	isChainSupported(chainId)
		? new providers.InfuraWebSocketProvider(chainId, infuraId)
		: undefined;

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Script
				strategy="lazyOnload"
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
			/>

			<Script strategy="lazyOnload">
				{`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
			</Script>
			<Provider
				autoConnect
				connectors={connectors}
				provider={provider}
				webSocketProvider={webSocketProvider}
			>
				<Component {...pageProps} />
			</Provider>
		</>
	);
}

export default MyApp;

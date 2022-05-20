import Head from "next/head";
import Image from "next/image";

import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAccount, useConnect } from "wagmi";

import Footer from "../components/footer";
import Header from "../components/header";
import MainConnect from "../components/mainConnect";
import WalletLookup from "../components/walletLookup";

const Home = () => {
	const [{ data, error }, connect] = useConnect();
	const [{ data: accountData }, disconnect] = useAccount({
		fetchEns: true,
	});

	const router = useRouter();

	const { connected } = data;

	useEffect(() => {
		if (connected) {
			router.push(`/${accountData?.ens?.name || accountData?.address}`);
		}
	}, [connected]);

	return (
		<>
			<div className="p-6 flex flex-col min-h-screen w-screen items-stretch justify-center grow">
				<Head>
					<title>tote.app - Best bag value tracker for the web3 world</title>
					<link rel="shortcut icon" href="/favicon.ico" />
					<meta
						name="description"
						content="Best bag value tracker for the web3 world"
					/>
				</Head>
				<Header />
				<div className="flex flex-col items-center justify-center grow w-full">
					<div className="flex flex-col items-center justify-center grow">
						<p className="text-6xl font-bold">
							Check yo{" "}
							<span className="underline decoration-pink-500">bags!</span>
						</p>
						<div className="m-6 text-2xl flex flex-row items-center justify-center">
							The best app to check how much your{" "}
							<span className="px-2">
								<Image src="/logo.png" width={24} height={24} />
								<Image src="/logo.png" width={24} height={24} />
								<Image src="/logo.png" width={24} height={24} />
							</span>{" "}
							are worth
						</div>
						<MainConnect />
						{/* <div className="w-2/4 flex flex-col items-center justify-center">
							<p className="m-6 text-2xl flex flex-row items-center justify-center">
								... or spy on your frens' bags{" "}
								<span className="px-3">👇🏻👇🏻</span>
							</p>
							<WalletLookup />
						</div> */}
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
};

export default Home;

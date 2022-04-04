import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import MainConnect from "../components/mainConnect";
import BalanceCheck from "../components/balanceCheck";
import WalletLookup from "../components/walletLookup";
import DropdownConnect from "../components/dropdownConnect";

import { useAccount, useConnect } from "wagmi";

const Home = () => {
	const [{ data, error }, connect] = useConnect();
	const [{ data: accountData }, disconnect] = useAccount({
		fetchEns: true,
	});

	const { connected } = data;

	return (
		<>
			<div className="p-6 flex flex-col min-h-screen w-screen items-stretch justify-center grow">
				<Head>
					<title>bags.app - Best bag value tracker for the web3 world</title>
					<link rel="shortcut icon" href="/favicon.ico" />
					<meta
						name="description"
						content="Best bag value tracker for the web3 world"
					/>
				</Head>
				<div className="flex justify-between">
					<div className="flex flex-row items-center justify-center">
						<Image src="/logo.png" width={24} height={24} />
						<h1 className="ml-2 text-2xl font-bold underline decoration-pink-500">
							bags.app
						</h1>
					</div>
					<DropdownConnect />
				</div>
				<div className="flex flex-col items-center justify-center grow w-full">
					{connected ? (
						<BalanceCheck />
					) : (
						<div className="flex flex-col items-center justify-center grow">
							<p className="text-6xl font-bold">
								Check yo{" "}
								<span className="underline decoration-pink-500">bags!</span>
							</p>
							<div className="m-6 text-2xl flex flex-row items-center justify-center">
								The best app to check how much your{" "}
								<span className="px-2">
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
					)}
				</div>
				<footer className="flex items-center justify-center w-full">
					<p>
						Made with <span className="pr-1">💜</span> by{" "}
						<Link href="https://twitter.com/gjordaodoteth">
							<a
								className="underline decoration-pink-500 font-bold decoration-2 underline-offset-1 hover:transition hover:ease-in hover:duration-300 hover:delay-150 hover:decoration-4 hover:underline-offset-1"
								target={"_blank"}
							>
								@gjordaodoteth
							</a>
						</Link>
					</p>
				</footer>
			</div>
		</>
	);
};

export default Home;

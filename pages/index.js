import Head from "next/head";
import Image from "next/image";
import MainConnect from "../components/mainConnect";
import BalanceCheck from "../components/balanceCheck";
import DropdownConnect from "../components/dropdownConnect";

import { useAccount, useConnect } from "wagmi";

const Home = () => {
	const [{ data, error }, connect] = useConnect();
	const [{ data: accountData }, disconnect] = useAccount({
		fetchEns: true,
	});

	const { connectors, connected } = data;

	return (
		<>
			<div className="p-6 flex-row h-screen align-middle justify-center">
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
				{connected ? (
					<BalanceCheck />
				) : (
					<div className="flex flex-col items-center justify-center h-full w-full">
						<p className="text-6xl font-bold">
							Check yo{" "}
							<span className="underline decoration-pink-500">bags!</span>
						</p>
						<div className="m-6 text-2xl flex flex-row items-center justify-center">
							The best app to check how much are your{" "}
							<span className="px-2">
								<Image src="/logo.png" width={24} height={24} />
							</span>{" "}
							are worth
						</div>
						<MainConnect />
					</div>
				)}
			</div>
		</>
	);
};

export default Home;

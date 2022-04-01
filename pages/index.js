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
			<div className="p-6 flex-row h-screen w-screen align-middle justify-center">
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
							The best app to check how much your{" "}
							<span className="px-2">
								<Image src="/logo.png" width={24} height={24} />
							</span>{" "}
							are worth
						</div>
						<MainConnect />
						<div className="w-2/4 flex flex-col items-center justify-center">
							<p className="m-6 text-2xl flex flex-row items-center justify-center">
								... or spy on your frens' bags{" "}
								<span className="px-3">👇🏻👇🏻</span>
							</p>
							<form className="w-full flex flex-col items-center justify-center">
								<input
									id="name"
									name="name"
									type="text"
									autoComplete="name"
									placeholder="Drop your fren ETH or ENS address"
									className="tracking-[-0.2] w-2/3 bg-transparent border-2 shadow-md rounded-full text-base lg:text-[18px] py-10 px-8 outline-non placeholder:text-center"
									required
								/>
								<button
									type="submit"
									className="transition-all duration-150 absolute right-80 py-8 pl-8 focus:bg-[#464d55] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-2 rounded-full shadow-lg flex items-center justify-center mr-80 outline-none"
								>
									<div className="mr-8 px-4">👀</div>
								</button>
							</form>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default Home;

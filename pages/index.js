import Head from "next/head";
import Dropdown from "../components/dropdown";
import BalanceCheck from "../components/balanceCheck";

const Home = () => {
	return (
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
				<div>
					<h1 className="text-2xl font-bold underline decoration-pink-500">
						bags.app
					</h1>
				</div>
				<Dropdown />
			</div>
			<BalanceCheck />
		</div>
	);
};

export default Home;

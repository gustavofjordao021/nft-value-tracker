import BalanceCheck from "./components/balanceCheck";
import Dropdown from "./components/dropdown";

const Home = () => {
	return (
		<div className="p-6 flex-row h-screen align-middle justify-center">
			<div className="flex justify-between">
				<div>
					<h1 className="text-2xl font-bold">NFT Value Tracker</h1>
				</div>
				<div>
					<Dropdown />
				</div>
			</div>
			<BalanceCheck />
		</div>
	);
};

export default Home;

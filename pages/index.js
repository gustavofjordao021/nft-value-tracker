import { useConnect, useAccount } from "wagmi";

import Dropdown from "./components/dropdown";

const Home = () => {
	const [{ data, error }, connect] = useConnect();
	const [{ data: accountData }, disconnect] = useAccount({
		fetchEns: true,
	});
	const { connected } = data;

	if (connected) {
		return (
			<div className="py-24 text-center">
				<p className="text-2xl font-bold">
					Welcome {accountData?.ens?.name || accountData?.address}
				</p>
				<button
					className="mx-auto mt-10 rounded bg-slate-200 p-2"
					onClick={disconnect}
				>
					Disconnect
				</button>
			</div>
		);
	}

	return (
		<div className="p-6 flex-row">
			<div className="flex justify-between">
				<div>
					<h1 className="text-2xl font-bold">NFT Value Tracker</h1>
				</div>
				<div>
					<Dropdown />
				</div>
			</div>

			{error && (
				<p className="text-red-500">{error?.message ?? "Failed to connect"}</p>
			)}
		</div>
	);
};

export default Home;

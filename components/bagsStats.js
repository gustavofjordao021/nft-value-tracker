import Table from "./table";
import MinimumWalletValue from "./minValue";

const BagsStats = ({ walletData }) => {
	const columns = [
		{
			Header: "Collection",
			accessor: "name",
		},
		{
			Header: "Floor",
			accessor: "price",
		},
		{
			Header: "Volume",
			accessor: "volume",
		},
		{
			Header: "Supply",
			accessor: "supply",
		},
		{
			Header: "Bags",
			accessor: "networth",
		},
	];

	return (
		<>
			<div className="p-6 flex flex-col min-h-screen w-full justify-between items-center">
				<MinimumWalletValue data={walletData} />
				<Table
					columns={columns}
					data={walletData.data}
					isLoading={walletData.isLoading}
				/>
			</div>
		</>
	);
};

export default BagsStats;

import Table from "./table";

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
			Header: "Net worth",
			accessor: "networth",
		},
	];

	return (
		<>
			<div className="p-12 flex flex-col h-full w-full justify-center items-center">
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

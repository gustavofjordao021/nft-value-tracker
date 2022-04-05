import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const CollectionTable = () => {
	const { data, error } = useSWR("/api/stats", fetcher);

	return (
		<>
			{data ? (
				<>
					<div className="flex flex-col items-center">
						<table className="w-4/5 text-sm text-center text-black rounded-lg mb-32">
							<thead className="text-xs text-black uppercase rounded-t-lg shadow-2xl border-transparent">
								<tr className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-transparent">
									<th scope="col" className="px-6 py-3 border-transparent">
										Collection
									</th>
									<th scope="col" className="px-6 py-3 border-transparent">
										Floor
									</th>
									<th scope="col" className="px-6 py-3 border-transparent">
										Volume
									</th>
									<th scope="col" className="px-6 py-3 border-transparent">
										Supply
									</th>
									<th scope="col" className="px-6 py-3 border-transparent">
										Owners
									</th>
									<th scope="col" className="px-6 py-3 border-transparent">
										Bags
									</th>
								</tr>
							</thead>
							<tbody className="shadow-2xl border-transparent">
								{data.collections?.map((collection) => (
									<tr className="bg-white border-b">
										<th
											scope="row"
											className="px-6 py-4 font-medium text-black whitespace-nowrap border-transparent"
										>
											{collection.name}
										</th>
										<td className="px-6 py-4 border-transparent">
											{collection.floor}
										</td>
										<td className="px-6 py-4 border-transparent">
											{collection.volume}
										</td>
										<td className="px-6 py-4 border-transparent">
											{collection.supply}
										</td>
										<td className="px-6 py-4 border-transparent">
											{collection.owners}
										</td>
										<td className="px-6 py-4 border-transparent">
											{collection.floor * 2}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</>
			) : (
				<>
					<div>blob</div>
				</>
			)}
		</>
	);
};

export default CollectionTable;

import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const CollectionTable = () => {
	const { data, error } = useSWR("/api/stats", fetcher);

	return (
		<>
			{data ? (
				<>
					<div className="flex flex-col items-center">
						<table className="w-4/5 text-sm text-center text-black mb-48">
							<thead className="text-xs text-white uppercase shadow-2xl border-transparent">
								<tr className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-transparent">
									<th
										scope="col"
										className="px-6 py-3 border-transparent rounded-tl-xl mb-8"
									>
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
									<th
										scope="col"
										className="px-6 py-3 border-transparent rounded-tr-xl"
									>
										Bags
									</th>
								</tr>
							</thead>
							<tbody className="shadow-2xl border-transparent">
								{data.collections?.map((collection) => (
									<tr>
										<th
											scope="row"
											className="px-6 py-4 font-medium text-black whitespace-nowrap"
										>
											{collection.name}
										</th>
										<td className="px-6 py-4 border-transparent">
											<svg
												className="absolute ml-8"
												xmlns="http://www.w3.org/2000/svg"
												width="12"
												height="20"
											>
												<path
													d="M 5.948 0.239 L 5.821 0.663 L 5.821 12.974 L 5.948 13.098 L 11.745 9.72 Z"
													fill="rgb(52,52,52)"
												></path>
												<path
													d="M 5.948 0.239 L 0.152 9.72 L 5.948 13.098 Z"
													fill="rgb(140,140,140)"
												></path>
												<path
													d="M 5.948 14.18 L 5.877 14.266 L 5.877 18.651 L 5.948 18.857 L 11.748 10.804 L 5.948 14.18 Z"
													fill="rgb(60,60,59)"
												></path>
												<path
													d="M 5.948 18.857 L 5.948 14.18 L 0.152 10.804 Z"
													fill="rgb(140,140,140)"
												></path>
												<path
													d="M 5.948 13.098 L 11.745 9.72 L 5.948 7.123 Z"
													fill="rgb(20,20,20)"
												></path>
												<path
													d="M 0.152 9.72 L 5.948 13.098 L 5.948 7.123 Z"
													fill="rgb(57,57,57)"
												></path>
											</svg>
											{collection.floor}
										</td>
										<td className="px-6 py-4 border-transparent">
											<svg
												className="absolute ml-10"
												xmlns="http://www.w3.org/2000/svg"
												width="12"
												height="20"
											>
												<path
													d="M 5.948 0.239 L 5.821 0.663 L 5.821 12.974 L 5.948 13.098 L 11.745 9.72 Z"
													fill="rgb(52,52,52)"
												></path>
												<path
													d="M 5.948 0.239 L 0.152 9.72 L 5.948 13.098 Z"
													fill="rgb(140,140,140)"
												></path>
												<path
													d="M 5.948 14.18 L 5.877 14.266 L 5.877 18.651 L 5.948 18.857 L 11.748 10.804 L 5.948 14.18 Z"
													fill="rgb(60,60,59)"
												></path>
												<path
													d="M 5.948 18.857 L 5.948 14.18 L 0.152 10.804 Z"
													fill="rgb(140,140,140)"
												></path>
												<path
													d="M 5.948 13.098 L 11.745 9.72 L 5.948 7.123 Z"
													fill="rgb(20,20,20)"
												></path>
												<path
													d="M 0.152 9.72 L 5.948 13.098 L 5.948 7.123 Z"
													fill="rgb(57,57,57)"
												></path>
											</svg>
											{collection.volume}
										</td>
										<td className="px-6 py-4 border-transparent">
											{collection.supply}
										</td>
										<td className="px-6 py-4 border-transparent">
											{collection.owners}
										</td>
										<td className="px-6 py-4 border-transparent">
											<svg
												className="absolute ml-6"
												xmlns="http://www.w3.org/2000/svg"
												width="12"
												height="20"
											>
												<path
													d="M 5.948 0.239 L 5.821 0.663 L 5.821 12.974 L 5.948 13.098 L 11.745 9.72 Z"
													fill="rgb(52,52,52)"
												></path>
												<path
													d="M 5.948 0.239 L 0.152 9.72 L 5.948 13.098 Z"
													fill="rgb(140,140,140)"
												></path>
												<path
													d="M 5.948 14.18 L 5.877 14.266 L 5.877 18.651 L 5.948 18.857 L 11.748 10.804 L 5.948 14.18 Z"
													fill="rgb(60,60,59)"
												></path>
												<path
													d="M 5.948 18.857 L 5.948 14.18 L 0.152 10.804 Z"
													fill="rgb(140,140,140)"
												></path>
												<path
													d="M 5.948 13.098 L 11.745 9.72 L 5.948 7.123 Z"
													fill="rgb(20,20,20)"
												></path>
												<path
													d="M 0.152 9.72 L 5.948 13.098 L 5.948 7.123 Z"
													fill="rgb(57,57,57)"
												></path>
											</svg>
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

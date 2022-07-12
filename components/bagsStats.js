import Image from "next/image";
import useSWR from "swr";
import { useState } from "react";
import { useAccount, useBalance } from "wagmi";

import Spinner from "./spinner";

const BagsStats = () => {
	const collectionFetcher = (url1, accountAddress) => {
		if (accountAddress) {
			fetch(`${url1}?address=${accountAddress}`)
				.then((response) => response.json())
				.then((data) => {
					window.localStorage.setItem("collections", JSON.stringify(data));
					const response = JSON.parse(
						window.localStorage.getItem("collections")
					);
					const parsedResponse = Object.keys(response);
					setNetworthState({
						isLoading: false,
						collections: JSON.parse(window.localStorage.getItem("collections")),
						networth: JSON.parse(
							window.localStorage.getItem("collections")
						).reduce((a, b) => {
							return a + b.networth;
						}, 0),
					});
				});
		}
	};

	const [{ data: accountData }, disconnect] = useAccount({
		fetchEns: true,
	});

	const [{ data: balanceData, loading }, getBalance] = useBalance({
		addressOrName: accountData?.address,
	});

	const [networthState, setNetworthState] = useState({
		isLoading: true,
		collections: "",
		networth: 0,
	});

	const { data: collectionData, error } = useSWR(
		() => ["/api/collections/", accountData.address],
		collectionFetcher
	);

	if (networthState.isLoading)
		return (
			<>
				<div className="flex flex-col items-center justify-center w-full">
					<h2 className="m-6 font-bold text-2xl bg-transparent flex items-center justify-center">
						<span className="mr-2">Mininum</span>{" "}
						<Image src="/logo.png" width={24} height={24} />{" "}
						<span className="ml-2">value </span>
					</h2>
					<div className="p-4 mx-2 w-1/6 h-24 flex flex-row justify-center items-center rounded-full border-1 shadow-2xl">
						<div className="w-12">
							<Spinner />
						</div>
						<span className="ml-6">Loading...</span>
					</div>
				</div>
				<div className="flex flex-col items-center mb-20 mt-20">
					<table className="w-4/5 text-sm text-center text-black table-auto">
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
							<tr className="w-full">
								<td colSpan={6}>
									<div className="h-48 p-8 flex justify-center">
										<Spinner />
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</>
		);

	return (
		<>
			<div className="flex flex-col items-center justify-center grow w-full">
				<h2 className="m-6 font-bold text-2xl bg-transparent flex items-center justify-center">
					<span className="mr-2">Mininum</span>{" "}
					<Image src="/logo.png" width={24} height={24} />{" "}
					<span className="ml-2">value </span>
				</h2>
				<div className="p-4 mx-2 w-1/6 flex flex-row items-center justify-center h-20 rounded-full border-1 shadow-2xl">
					<Image src="/eth.png" width={12} height={20} />{" "}
					<span className="text-2xl ml-4">{networthState.networth}</span>
				</div>
			</div>
			{networthState ? (
				<>
					<div className="flex flex-col items-center">
						<table className="w-4/5 text-sm text-center text-black mb-20 mt-20">
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
									<th
										scope="col"
										className="px-6 py-3 border-transparent rounded-tr-xl"
									>
										Bags
									</th>
								</tr>
							</thead>
							<tbody className="shadow-2xl border-transparent">
								{networthState.collections.map((collection) => (
									<tr>
										<th
											scope="row"
											className="px-6 py-4 font-medium text-black whitespace-nowrap"
										>
											{collection.name}
										</th>
										<td className="px-6 py-4 border-transparent">
											<Image src="/eth.png" width={12} height={20} />{" "}
											{collection.price}
										</td>
										<td className="px-6 py-4 border-transparent">
											<Image src="/eth.png" width={12} height={20} />{" "}
											{collection.volume}
										</td>
										<td className="px-6 py-4 border-transparent">
											{collection.supply}
										</td>
										<td className="px-6 py-4 border-transparent">
											<Image src="/eth.png" width={12} height={20} />{" "}
											{collection.price * collection.ownedAmount}
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

export default BagsStats;

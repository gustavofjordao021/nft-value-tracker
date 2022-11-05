import Image from "next/image";
import useSWR from "swr";
import { useState } from "react";
import { useAccount, useBalance } from "wagmi";

import Table from "./table";
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
						data: JSON.parse(window.localStorage.getItem("collections")),
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
		data: [
			{
				name: "",
				price: "",
				volume: "",
				supply: "",
				networth: "",
			},
		],
		networth: 0,
	});

	const { data: collectionData, error } = useSWR(
		() => ["/api/collections/", accountData.address],
		collectionFetcher
	);

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
		<Table
			columns={columns}
			data={networthState.data}
			isLoading={networthState.isLoading}
		/>
	);
};

export default BagsStats;

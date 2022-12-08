import useSWR from "swr";
import { useRouter } from "next/router";
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";

import Footer from "../components/footer";
import Header from "../components/header";
import BagsStats from "../components/bagsStats";
import MinimumWalletValue from "../components/minValue";

const Bags = () => {
	const { address, isConnected } = useAccount();

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

	const collectionFetcher = (url1, accountAddress) => {
		if (accountAddress) {
			fetch(`${url1}?address=${accountAddress}`)
				.then((response) => response.json())
				.then((data) => {
					window.localStorage.setItem("collections", JSON.stringify(data));
					const response = JSON.parse(
						window.localStorage.getItem("collections")
					);
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

	const { data: collectionData, error } = useSWR(
		() => ["/api/collections/", address],
		collectionFetcher
	);

	const router = useRouter();

	useEffect(() => {
		if (!isConnected) {
			router.push("/");
		}
	}, [networthState]);

	return (
		<div className="p-6 flex flex-col h-screen w-screen justify-between">
			<Header />
			<MinimumWalletValue walletData={networthState} />
			<BagsStats walletData={networthState} />
			<Footer />
		</div>
	);
};

export default Bags;

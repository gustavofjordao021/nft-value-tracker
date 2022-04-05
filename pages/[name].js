import { useEffect } from "react";
import { useRouter } from "next/router";

import Footer from "../components/footer";
import Header from "../components/header";
import BalanceCheck from "../components/balanceCheck";
import CollectionTable from "../components/collectionTable";

import { useAccount, useConnect } from "wagmi";

const Bags = () => {
	const [{ data }, connect] = useConnect();
	const [{ data: accountData }, disconnect] = useAccount({
		fetchEns: true,
	});

	const router = useRouter();

	const { connected } = data;

	useEffect(() => {
		if (!connected) {
			router.push("/");
		}
	}, []);

	return (
		<div className="p-6 flex flex-col min-h-screen w-screen items-stretch justify-center">
			<Header />
			<BalanceCheck />
			<CollectionTable />
			<Footer />
		</div>
	);
};

export default Bags;

import { useEffect } from "react";
import { useRouter } from "next/router";

import Footer from "../components/footer";
import Header from "../components/header";
import BagsStats from "../components/bagsStats";

import { useConnect } from "wagmi";

const Bags = () => {
	const [{ data }, connect] = useConnect();

	const router = useRouter();

	const { connected } = data;

	useEffect(() => {
		if (!connected) {
			router.push("/");
		}
	}, []);

	return (
		<div className="p-6 flex flex-col min-h-screen w-screen justify-between">
			<Header />
			<BagsStats />
			<Footer />
		</div>
	);
};

export default Bags;

import { useEnsLookup } from "wagmi";

const WalletLookup = () => {
	const [{ data, error, loading }, lookupAddress] = useEnsLookup({
		address: "",
	});

	console.log(data);

	const onSubmit = async (event) => {
		event.preventDefault();
		const addressForLookup = event.target.elements.ENSName.value;
		await lookupAddress({ address: addressForLookup });
	};

	return (
		<form
			className="w-full flex flex-col items-center justify-center"
			onSubmit={onSubmit}
		>
			<input
				id="ENSName"
				name="ENSName"
				type="text"
				autoComplete="name"
				placeholder="Drop your fren ETH or ENS address to spy on them"
				className="tracking-[-0.2] w-2/3 bg-transparent border-2 shadow-md rounded-full text-[18px] py-10 px-8 outline-none"
				required
			/>
			<button
				type="submit"
				className="transition-all duration-150 absolute right-80 py-8 pl-8 focus:bg-[#464d55] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-2 rounded-full shadow-lg flex items-center justify-center mr-80 outline-none"
			>
				<div className="mr-8 px-4">👀</div>
			</button>
		</form>
	);
};

export default WalletLookup;

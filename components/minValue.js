import Image from "next/image";
import Spinner from "./spinner";

const MinimumWalletValue = ({ data }) => {
	if (data.isLoading) {
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
			</>
		);
	} else {
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
						<span className="text-2xl ml-4">
							{parseFloat(data.networth.toFixed(2))}
						</span>
					</div>
				</div>
			</>
		);
	}
};

export default MinimumWalletValue;

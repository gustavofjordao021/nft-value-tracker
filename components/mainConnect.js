import { Fragment } from "react";
import { useRouter } from "next/router";
import { Menu, Transition } from "@headlessui/react";
import { useAccount, useConnect } from "wagmi";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const MainConnect = () => {
	const [{ data, error }, connect] = useConnect();
	const [{ data: accountData }, disconnect] = useAccount({
		fetchEns: true,
	});

	const router = useRouter();

	const connectAndRoute = async (x) => {
		await connect(data.connectors[x]).then(() =>
			router.push(`/${accountData?.ens?.name || accountData?.address}`)
		);
	};

	return (
		<Menu as="div" className="relative inline-block text-left">
			<div>
				<Menu.Button className="inline-flex px-12 py-6 rounded-full text-white text-2xl drop-shadow-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
					Connect Wallet
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="origin-center flex flex-col justify-end absolute mt-2 right-14">
					<Menu.Item>
						{({ active }) => (
							<button
								className={classNames(
									active ? "text-gray-900" : "text-gray-700",
									"block m-1 px-4 py-2 text-sm w-full border-1 rounded-2xl shadow-2xl bg-white ring-1 ring-black ring-opacity-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
								)}
								onClick={() => connectAndRoute(0)}
							>
								{data.connectors[0].name}
							</button>
						)}
					</Menu.Item>
					<Menu.Item>
						{({ active }) => (
							<button
								href="#"
								className={classNames(
									active ? "text-gray-900" : "text-gray-700",
									"block m-1 px-2 py-2 text-sm w-full border-1 rounded-2xl shadow-2xl bg-white ring-1 ring-black ring-opacity-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
								)}
								onClick={() => connectAndRoute(1)}
							>
								{data.connectors[1].name}
							</button>
						)}
					</Menu.Item>
				</Menu.Items>
			</Transition>
		</Menu>
	);
};

export default MainConnect;

import { Fragment } from "react";
import { useRouter } from "next/router";
import { Menu, Transition } from "@headlessui/react";
import { useConnect } from "wagmi";

import classNames from "../utils/classNamesJoin";

const MainConnect = () => {
	const { connect, connectors, error, isLoading, pendingConnector } =
		useConnect();

	const router = useRouter();

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
					{connectors.map((connector) => (
						<Menu.Item>
							{({ active }) => (
								<button
									className={classNames(
										active ? "text-gray-900" : "text-gray-700",
										"block m-1 px-4 py-2 text-sm w-full border-1 rounded-2xl shadow-2xl bg-white ring-1 ring-black ring-opacity-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
									)}
									disabled={!connector.ready}
									key={connector.id}
									onClick={() => connect({ connector })}
								>
									{connector.name}
								</button>
							)}
						</Menu.Item>
					))}
				</Menu.Items>
			</Transition>
		</Menu>
	);
};

export default MainConnect;

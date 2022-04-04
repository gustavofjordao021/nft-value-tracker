import Image from "next/image";

import DropdownConnect from "../components/dropdownConnect";

const Header = () => {
	return (
		<div className="flex justify-between">
			<div className="flex flex-row items-center justify-center">
				<Image src="/logo.png" width={24} height={24} />
				<h1 className="ml-2 text-2xl font-bold underline decoration-pink-500">
					bags.app
				</h1>
			</div>
			<DropdownConnect />
		</div>
	);
};

export default Header;

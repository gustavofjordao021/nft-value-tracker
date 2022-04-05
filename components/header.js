import Image from "next/image";
import Link from "next/link";

import DropdownConnect from "../components/dropdownConnect";

const Header = () => {
	return (
		<div className="flex justify-between">
			<Link href="/">
				<div className="flex flex-row items-center justify-center">
					<Image src="/logo.png" width={24} height={24} />
					<a className="ml-2 text-2xl font-bold underline decoration-pink-500 cursor-pointer">
						bags.app
					</a>
				</div>
			</Link>
			<DropdownConnect />
		</div>
	);
};

export default Header;

import Link from "next/link";

const Footer = () => {
	return (
		<footer className="py-6 flex items-center justify-center w-full">
			<p>
				Made with <span className="pr-1">💜</span> by{" "}
				<Link href="https://twitter.com/gjordaodoteth">
					<a
						className="font-bold transition duration-300 border-b-4 border-transparent hover:border-pink-500"
						target={"_blank"}
					>
						@gjordaodoteth
					</a>
				</Link>
			</p>
		</footer>
	);
};

export default Footer;
